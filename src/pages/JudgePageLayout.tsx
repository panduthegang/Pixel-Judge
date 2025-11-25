import React, { useState } from 'react';
import { Upload, FileImage, AlertCircle, Loader2 } from 'lucide-react';
import { VintageButton } from '../components/ui/VintageButton';
import { ToggleSwitch } from '../components/ui/ToggleSwitch';
import ReactMarkdown from 'react-markdown';
import { GoogleGenerativeAI } from '@google/generative-ai';

type Mode = 'review' | 'prompt';
type PromptType = 'ui' | 'xml';

export const JudgePageLayout: React.FC = () => {
  const [mode, setMode] = useState<Mode>('review');
  const [promptType, setPromptType] = useState<PromptType>('ui');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
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
    if (!selectedFile) {
      setError('Please select an image first');
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
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const reader = new FileReader();

      reader.onload = async () => {
        try {
          const base64Data = (reader.result as string).split(',')[1];
          const mimeType = selectedFile.type;

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
              promptText = `You are PixelJudge, an expert at translating wireframes into structured XML/code prompts for development tools like Bolt.new, Claude, or Lovable.

Analyze this wireframe/design and create a detailed technical prompt.

Format the output in Markdown with clear sections:

## Component Structure
Describe the component hierarchy

## Layout Specifications
Detail flexbox, grid, or other layout approaches

## Styling Approach
Specify Tailwind CSS classes or CSS approach

## Interactive Behavior
Describe user interactions and states

## Responsive Design
Outline breakpoints and mobile considerations

## Accessibility
List ARIA labels and accessibility requirements

## State Management
Describe state needs and data flow

## Implementation Prompt
Provide a complete, structured prompt that a developer or AI coding assistant can use to build the interface.

Use proper Markdown formatting throughout.`;
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

      reader.readAsDataURL(selectedFile);
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

        <div className="mb-8 flex justify-center">
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
              Upload Wireframe
            </h2>

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

            {error && (
              <div className="mt-4 p-4 bg-vintage-red/10 border-2 border-vintage-red flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-vintage-red flex-shrink-0 mt-0.5" />
                <p className="font-mono text-sm text-vintage-red">{error}</p>
              </div>
            )}

            <VintageButton
              variant="primary"
              onClick={handleSubmit}
              disabled={!selectedFile || loading}
              className="w-full mt-6 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
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
                <div className="prose prose-sm max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-vintage-charcoal prose-p:font-mono prose-p:text-vintage-charcoal/80 prose-strong:text-vintage-red prose-ul:font-mono prose-li:text-vintage-charcoal/80">
                  <ReactMarkdown>{result}</ReactMarkdown>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-vintage-charcoal/40">
                  <p className="text-center">
                    {mode === 'review'
                      ? 'The Judge awaits your submission...'
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
