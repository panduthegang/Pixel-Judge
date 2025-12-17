import React, { useState } from 'react';
import { Upload, FileImage, AlertCircle, Loader2, FileText } from 'lucide-react';
import { VintageButton } from '../components/ui/VintageButton';
import { ToggleSwitch } from '../components/ui/ToggleSwitch';
import ReactMarkdown from 'react-markdown';
import { GoogleGenerativeAI } from '@google/generative-ai';

type Mode = 'review' | 'prompt';
type PromptType = 'ui' | 'xml';
type InputType = 'image' | 'text';

export const JudgePageLayout: React.FC = () => {
  const [mode, setMode] = useState<Mode>('review');
  const [promptType, setPromptType] = useState<PromptType>('ui');
  const [inputType, setInputType] = useState<InputType>('image');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [textInput, setTextInput] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (PNG, JPG, etc.)');
      return;
    }
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setError(null);
    setResult(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleSubmit = async () => {
    if (inputType === 'image' && !selectedFile) {
      setError('Please select an image first');
      return;
    }

    if (inputType === 'text' && !textInput.trim()) {
      setError('Please enter a description');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      if (!apiKey) {
        throw new Error('API key not configured');
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      if (inputType === 'text') {
        let promptText = '';

        if (promptType === 'ui') {
          promptText = `You are PixelJudge, an expert at translating text descriptions into detailed UI generation prompts for tools like Figma AI or Midjourney.

The user has described their vision:
"${textInput}"

Create a comprehensive prompt that can be used to generate a high-fidelity, polished UI design.

Format the output in Markdown with clear sections and structure. Include:

## Layout Structure
Describe the grid system and overall layout

## Component Hierarchy
List and describe each component

## Color Palette
Suggest colors (avoid purple/indigo unless present)

## Typography
Specify font styles, sizes, and weights

## Spacing & Padding
Detail spacing specifications

## Interactive Elements
Describe states and interactions

## Design Style
Define the aesthetic approach

## Final Prompt
Provide a single, detailed prompt ready to paste into an AI image generator.

Use proper Markdown formatting throughout.`;
        } else {
          promptText = `You are PixelJudge, an expert at translating text descriptions into structured XML format for development tools like Bolt.new, Claude, or Lovable.

The user has described their vision:
"${textInput}"

CRITICAL: Output MUST be in pure XML format, NOT JSX or React code.

Create a detailed XML structure document. Format the output in Markdown with clear sections:

## XML Structure Overview
Brief description of the XML document structure

## Complete XML Code
Provide the FULL XML structure using proper XML syntax:
- Use XML tags like <component>, <layout>, <element>, <style>, <interaction>
- Use XML attributes for properties
- Properly nest elements
- Include XML comments where helpful
- Use CDATA sections for complex content if needed

Example XML structure:
\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<interface>
  <layout type="grid" columns="12">
    <component name="header" position="top">
      <element type="navigation">
        <item>Home</item>
        <item>About</item>
      </element>
    </component>
  </layout>
</interface>
\`\`\`

## Component Definitions
List each component with XML tag definitions

## Styling Specifications
Define CSS/Tailwind classes as XML attributes or nested style elements

## Interaction Definitions
Define event handlers and behaviors in XML format

## Implementation Notes
Technical notes for converting this XML to actual code

Output MUST be valid XML format, not JSX or React code.`;
        }

        try {
          const result = await model.generateContent(promptText);
          const response = await result.response;
          const text = response.text();

          if (text) {
            setResult(text);
          } else {
            throw new Error('No response generated');
          }
        } catch (err) {
          console.error('API Error:', err);
          setError(err instanceof Error ? err.message : 'Failed to generate prompt');
        } finally {
          setLoading(false);
        }

        return;
      }

      const reader = new FileReader();

      reader.onload = async () => {
        try {
          const base64Data = (reader.result as string).split(',')[1];
          const mimeType = selectedFile!.type;

          let promptText = '';

          if (mode === 'review') {
            promptText = `You are PixelJudge, a notorious, harsh, but incredibly knowledgeable Art Director and UI/UX critic from the 1920s.

Your task:
1. Critically analyze the uploaded UI wireframe or design. Be ruthless about alignment, spacing, typography hierarchy, and adherence to grid systems. Use vintage vocabulary (e.g., "abomination," "dreadful kerning," "pedestrian layout").
2. Provide a "Verdict" section summarizing the design's quality.
3. Point out specific issues with spacing, alignment, color contrast, hierarchy, and usability.
4. Offer concrete suggestions for improvement in your characteristic stern tone.

Format the output in Markdown with clear sections.`;
          } else {
            if (promptType === 'ui') {
              promptText = `You are PixelJudge, an expert at translating wireframes into detailed UI generation prompts for tools like Figma AI or Midjourney.

Analyze this wireframe/design and create a comprehensive prompt that can be used to generate a high-fidelity, polished version.

Format the output in Markdown with clear sections and structure. Include:

## Layout Structure
Describe the grid system and overall layout

## Component Hierarchy
List and describe each component

## Color Palette
Suggest colors (avoid purple/indigo unless present)

## Typography
Specify font styles, sizes, and weights

## Spacing & Padding
Detail spacing specifications

## Interactive Elements
Describe states and interactions

## Design Style
Define the aesthetic approach

## Final Prompt
Provide a single, detailed prompt ready to paste into an AI image generator.

Use proper Markdown formatting throughout.`;
            } else {
              promptText = `You are PixelJudge, an expert at translating wireframes into structured XML format for development tools like Bolt.new, Claude, or Lovable.

Analyze this wireframe/design and create a detailed XML structure document.

CRITICAL: Output MUST be in pure XML format, NOT JSX or React code.

Format the output in Markdown with clear sections:

## XML Structure Overview
Brief description of the XML document structure based on the wireframe

## Complete XML Code
Provide the FULL XML structure using proper XML syntax:
- Use XML tags like <component>, <layout>, <element>, <style>, <interaction>
- Use XML attributes for properties
- Properly nest elements
- Include XML comments where helpful
- Use CDATA sections for complex content if needed

Example XML structure:
\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<interface>
  <layout type="grid" columns="12">
    <component name="header" position="top">
      <element type="navigation">
        <item>Home</item>
        <item>About</item>
      </element>
    </component>
  </layout>
</interface>
\`\`\`

## Component Definitions
List each component with XML tag definitions

## Styling Specifications
Define CSS/Tailwind classes as XML attributes or nested style elements

## Interaction Definitions
Define event handlers and behaviors in XML format

## Implementation Notes
Technical notes for converting this XML to actual code

Output MUST be valid XML format, not JSX or React code.`;
            }
          }

          const result = await model.generateContent([
            {
              inlineData: {
                mimeType: mimeType,
                data: base64Data
              }
            },
            promptText
          ]);

          const response = await result.response;
          const text = response.text();

          if (text) {
            setResult(text);
          } else {
            throw new Error('No response generated');
          }
        } catch (err) {
          console.error('API Error:', err);
          setError(err instanceof Error ? err.message : 'Failed to analyze image');
        } finally {
          setLoading(false);
        }
      };

      reader.onerror = () => {
        setError('Failed to read file');
        setLoading(false);
      };

      reader.readAsDataURL(selectedFile!);
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-vintage-cream pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-black text-vintage-charcoal mb-4">
            THE JUDGMENT CHAMBER
          </h1>
          <p className="font-mono text-vintage-charcoal/70 uppercase tracking-widest text-sm">
            Submit your design for ruthless evaluation
          </p>
        </div>

        <div className="mb-8 flex flex-col items-center gap-6">
          <ToggleSwitch
            value={mode}
            onChange={(newMode) => {
              setMode(newMode);
              setResult(null);
            }}
            options={[
              { value: 'review', label: 'Design Review' },
              { value: 'prompt', label: 'Prompt Generation' }
            ]}
          />

          {mode === 'prompt' && (
            <ToggleSwitch
              value={inputType}
              onChange={(newType) => {
                setInputType(newType);
                setResult(null);
                setError(null);
              }}
              options={[
                { value: 'image', label: 'Image Upload' },
                { value: 'text', label: 'Text Description' }
              ]}
            />
          )}
        </div>

        {mode === 'prompt' && (
          <div className="mb-8 flex justify-center gap-4">
            <button
              onClick={() => setPromptType('ui')}
              className={`px-6 py-2 font-mono text-sm uppercase tracking-wider border-2 border-vintage-border transition-all ${
                promptType === 'ui'
                  ? 'bg-vintage-charcoal text-vintage-cream'
                  : 'bg-white text-vintage-charcoal hover:bg-vintage-paper'
              }`}
            >
              UI Prompt
            </button>
            <button
              onClick={() => setPromptType('xml')}
              className={`px-6 py-2 font-mono text-sm uppercase tracking-wider border-2 border-vintage-border transition-all ${
                promptType === 'xml'
                  ? 'bg-vintage-charcoal text-vintage-cream'
                  : 'bg-white text-vintage-charcoal hover:bg-vintage-paper'
              }`}
            >
              XML/Code Prompt
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ gridAutoRows: 'minmax(0, 1fr)' }}>
          <div className="border-2 border-vintage-border bg-white p-8 shadow-retro flex flex-col">
            <h2 className="font-serif text-2xl font-bold mb-6 text-vintage-charcoal">
              {inputType === 'image' ? 'Upload Wireframe' : 'Describe Your Vision'}
            </h2>

            {inputType === 'image' ? (
              <div
                className={`border-2 border-dashed p-12 text-center transition-all cursor-pointer ${
                  isDragging
                    ? 'border-vintage-red bg-vintage-red/10 border-solid'
                    : 'border-vintage-border/50 hover:border-vintage-border bg-vintage-paper/30'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer block">
                  {previewUrl ? (
                    <div>
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="max-h-64 mx-auto mb-4 border-2 border-vintage-border shadow-retro"
                      />
                      <p className="font-mono text-sm text-vintage-charcoal/60">
                        {selectedFile?.name}
                      </p>
                      <p className="font-mono text-xs text-vintage-charcoal/40 mt-2">
                        Click or drop to replace
                      </p>
                    </div>
                  ) : (
                    <div>
                      <FileImage className="w-16 h-16 mx-auto mb-4 text-vintage-charcoal/40" />
                      <p className="font-mono text-sm text-vintage-charcoal/60 mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="font-mono text-xs text-vintage-charcoal/40">
                        PNG, JPG, WEBP up to 10MB
                      </p>
                    </div>
                  )}
                </label>
              </div>
            ) : (
              <div className="border-2 border-vintage-border/50 bg-vintage-paper/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-vintage-charcoal/40" />
                  <p className="font-mono text-sm text-vintage-charcoal/60">
                    Describe the components and layout you envision
                  </p>
                </div>
                <textarea
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Example: I want a dashboard with a sidebar on the left containing navigation items, a header with a search bar and user profile, and a main content area with cards displaying metrics like revenue, users, and conversion rate..."
                  className="w-full h-80 p-4 border-2 border-vintage-border font-mono text-sm text-vintage-charcoal bg-white resize-none focus:outline-none focus:border-vintage-red transition-colors"
                />
                <p className="font-mono text-xs text-vintage-charcoal/40 mt-3">
                  Be specific about layout, components, interactions, and style preferences
                </p>
              </div>
            )}

            {error && (
              <div className="mt-4 p-4 bg-vintage-red/10 border-2 border-vintage-red flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-vintage-red flex-shrink-0 mt-0.5" />
                <p className="font-mono text-sm text-vintage-red">{error}</p>
              </div>
            )}

            <VintageButton
              variant="primary"
              onClick={handleSubmit}
              disabled={(inputType === 'image' && !selectedFile) || (inputType === 'text' && !textInput.trim()) || loading}
              className="w-full mt-6 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {inputType === 'text' ? 'Generating...' : 'Analyzing...'}
                </>
              ) : (
                <>
                  {inputType === 'image' ? <Upload className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                  {mode === 'review' ? 'Get Judged' : 'Generate Prompt'}
                </>
              )}
            </VintageButton>
          </div>

          <div className="border-2 border-vintage-border bg-white p-8 shadow-retro flex flex-col">
            <h2 className="font-serif text-2xl font-bold mb-6 text-vintage-charcoal">
              {mode === 'review' ? 'The Verdict' : 'Generated Prompt'}
            </h2>

            <div className="bg-vintage-paper/30 border-2 border-vintage-border/50 p-6 font-mono text-sm overflow-y-auto" style={{ height: '400px' }}>
              {loading ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="w-8 h-8 animate-spin text-vintage-charcoal/40" />
                </div>
              ) : result ? (
                <div className="prose prose-sm max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-vintage-charcoal prose-p:font-mono prose-p:text-vintage-charcoal/80 prose-strong:text-vintage-red prose-ul:font-mono prose-li:text-vintage-charcoal/80 prose-code:font-mono prose-code:text-vintage-charcoal prose-code:bg-vintage-paper">
                  <ReactMarkdown>{result}</ReactMarkdown>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-vintage-charcoal/40">
                  <p className="text-center">
                    {mode === 'review'
                      ? 'The Judge awaits your submission...'
                      : inputType === 'text'
                      ? 'Your generated prompt will appear here...'
                      : 'Your prompt will appear here...'}
                  </p>
                </div>
              )}
            </div>

            {result && (
              <VintageButton
                variant="outline"
                onClick={() => navigator.clipboard.writeText(result)}
                className="w-full mt-4"
              >
                Copy to Clipboard
              </VintageButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
