# 🎨 PixelJudge

<div align="center">
  <img src="./public/Thumbnail.png" alt="PixelJudge Logo" >

  ### ✨ The Discerning Eye for Your Wireframes

  🤖 AI-powered UI/UX design critique and prompt generation with ruthless precision

  [![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=flat&logo=github)](https://github.com/panduthegang/Pixel-Judge.git)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
  [![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
</div>

---

## 🌟 Overview

PixelJudge is a sophisticated AI-powered design critique tool that analyzes wireframes and UI designs with the ruthless precision of a 1920s Art Director. Get instant feedback on alignment, spacing, typography, and usability, or generate detailed prompts for AI image generators and development tools.

---

## ✨ Features

### 🎯 Design Review Mode
- **💬 Ruthless Critique**: Get honest, detailed feedback on your wireframes
- **📐 Layout Analysis**: Identify issues with spacing, alignment, and grid systems
- **🔤 Typography Review**: Evaluate hierarchy, kerning, and readability
- **♿ Accessibility Check**: Ensure your designs meet usability standards
- **👔 Vintage Personality**: Receive feedback in a characteristic stern tone

### ⚡ Prompt Generation Mode
- **🎨 UI Prompts**: Generate detailed prompts for Figma AI, Midjourney, or similar tools
- **💻 XML/Code Prompts**: Create structured XML for Bolt.new, Claude, or Lovable
- **🖼️ Image Upload**: Analyze existing wireframes and convert to prompts
- **📝 Text Descriptions**: Transform text descriptions into comprehensive design prompts
- **🏗️ Component Hierarchy**: Detailed breakdown of layout structure and elements

### 🎁 Additional Features
- **📚 Case Studies Section**: Comprehensive guides on AI-powered development
- **📱 Responsive Design**: Works seamlessly on desktop and mobile
- **🎯 Drag & Drop**: Easy file upload interface
- **📋 Copy to Clipboard**: Quick export of generated content
- **👁️ Real-time Preview**: See your uploads immediately

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | Styling | AI/ML | Build Tools |
|----------|---------|-------|-------------|
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black) | ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | ![Google Gemini](https://img.shields.io/badge/-Google_Gemini-4285F4?style=flat&logo=google&logoColor=white) | ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat&logo=vite&logoColor=white) |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | ![PostCSS](https://img.shields.io/badge/-PostCSS-DD3A0A?style=flat&logo=postcss&logoColor=white) | ![Generative AI](https://img.shields.io/badge/-Generative_AI-FF6F00?style=flat&logo=ai&logoColor=white) | ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat&logo=eslint&logoColor=white) |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat&logo=react-router&logoColor=white) | | ![React Markdown](https://img.shields.io/badge/-React_Markdown-000000?style=flat&logo=markdown&logoColor=white) | ![npm](https://img.shields.io/badge/-npm-CB3837?style=flat&logo=npm&logoColor=white) |

</div>

### 🔧 Core Technologies
- **⚛️ React 18.3** - Modern UI library with hooks
- **📘 TypeScript 5.5** - Type-safe development
- **⚡ Vite 5.4** - Lightning-fast build tool
- **🎨 Tailwind CSS 3.4** - Utility-first CSS framework
- **🛣️ React Router 7.9** - Client-side routing
- **🤖 Google Generative AI** - Gemini 2.5 Flash model
- **🎯 Lucide React** - Beautiful icon set
- **📄 React Markdown** - Markdown rendering

---

## 📁 Project Structure

```
pixeljudge/
├── public/
│   └── logo.svg                    # 🎨 Application logo
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── VintageButton.tsx   # 🔘 Reusable button component
│   │   │   └── ToggleSwitch.tsx    # 🎚️ Mode toggle component
│   │   ├── Hero.tsx                # 🎬 Landing page hero section
│   │   ├── Features.tsx            # ✨ Features showcase
│   │   ├── HowItWorks.tsx          # 🔄 Process explanation
│   │   ├── Testimonials.tsx        # 💭 User reviews
│   │   ├── Manifesto.tsx           # 📜 Design philosophy
│   │   ├── Ticker.tsx              # 📊 Animated ticker banner
│   │   ├── Navbar.tsx              # 🧭 Navigation component
│   │   └── Footer.tsx              # 🦶 Footer component
│   ├── pages/
│   │   ├── LandingPage.tsx         # 🏠 Home page
│   │   ├── JudgePageLayout.tsx     # ⚖️ Main judgment interface
│   │   └── CaseStudiesPage.tsx     # 📚 Learning resources
│   ├── App.tsx                     # 🎯 Main application component
│   ├── main.tsx                    # 🚀 Application entry point
│   ├── index.css                   # 🎨 Global styles
│   └── vite-env.d.ts              # 📝 Vite type definitions
├── index.html                      # 📄 HTML entry point
├── package.json                    # 📦 Dependencies and scripts
├── tsconfig.json                   # ⚙️ TypeScript configuration
├── tailwind.config.js              # 🎨 Tailwind CSS configuration
├── vite.config.ts                  # 🏗️ Vite configuration
└── README.md                       # 📖 This file
```

---

## 🚀 Getting Started

### 📋 Prerequisites

- 🟢 Node.js 18+ and npm
- 🔑 Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

### 📥 Installation

1. 📂 Clone the repository
```bash
git clone https://github.com/panduthegang/Pixel-Judge.git
cd Pixel-Judge
```

2. 📦 Install dependencies
```bash
npm install
```

3. 🔐 Create a `.env` file in the root directory
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

4. ▶️ Start the development server
```bash
npm run dev
```

5. 🌐 Open your browser and navigate to `http://localhost:5173`

### 🏗️ Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### 👀 Preview Production Build

```bash
npm run preview
```

---

## 📖 How to Use

### 🎯 Design Review
1. Navigate to the Judge page
2. Select "Design Review" mode
3. Upload your wireframe or UI design (PNG, JPG, WEBP)
4. Click "Get Judged" to receive detailed critique
5. Review the analysis and implement suggestions

### ⚡ Prompt Generation (Image)
1. Navigate to the Judge page
2. Select "Prompt Generation" mode
3. Choose "Image Upload" input type
4. Select either "UI Prompt" or "XML/Code Prompt"
5. Upload your wireframe
6. Click "Generate Prompt" to create detailed prompts
7. Copy and use in your favorite AI tool

### 📝 Prompt Generation (Text)
1. Navigate to the Judge page
2. Select "Prompt Generation" mode
3. Choose "Text Description" input type
4. Select either "UI Prompt" or "XML/Code Prompt"
5. Describe your design vision in detail
6. Click "Generate Prompt" to create comprehensive prompts
7. Copy and use in development tools

### 📚 Case Studies
- 🔍 Explore the Case Studies page for comprehensive guides
- 💡 Learn about prompting strategies
- 🐛 Discover debugging techniques
- 🔀 Compare AI development platforms
- 🚀 Master deployment workflows

---

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Google Gemini API key for AI analysis | Yes |

---

## 🎨 Design Philosophy

PixelJudge embraces a vintage 1920s aesthetic combined with modern functionality:

- **🔤 Typography**: Playfair Display for elegance, Courier Prime for authenticity
- **🎨 Colors**: Cream, charcoal, red, and gold vintage palette
- **🌑 Shadows**: Retro box shadows for depth
- **📦 Borders**: Bold 2px borders for definition
- **✨ Animation**: Subtle transitions and transforms

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔀 Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- 🎭 Design inspiration from 1920s Art Deco aesthetic
- 🤖 Powered by Google Gemini AI
- 💻 Built with modern web technologies
- 🎯 Icons by Lucide React

---

<div align="center">

  ### 💝 Made with love by Harsh Rathod

  ⭐ Star this repository if you find it helpful!

  [GitHub](https://github.com/panduthegang/Pixel-Judge.git) • [Report Bug](https://github.com/panduthegang/Pixel-Judge.git/issues) • [Request Feature](https://github.com/panduthegang/Pixel-Judge.git/issues)

</div>
