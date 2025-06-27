# Edge AI Pipelines - UI

A modern web interface for the [Edge Pipelines for Model Validation](https://github.com/redhat-et/edge-pipelines-for-model-validation) project, showcasing automated AI inference pipelines for edge deployment using bootc RHEL images.

## 🎯 What This UI Shows

This website demonstrates the **Edge AI Pipelines** project, which provides automated AI inference pipelines for edge deployment on NVIDIA Jetson devices. The UI showcases:

### 🔧 Bootc Image Layers
Three layered bootc images that build upon each other:

1. **RHEL 9.4 Base Image** (Red Hat + NVIDIA)
   - Enterprise-grade Red Hat Enterprise Linux 9.4
   - Optimized for NVIDIA Jetson devices
   - Integrated GPU drivers and edge computing capabilities

2. **vLLM Inference Server** (Red Hat + vLLM)
   - High-performance inference server built on RHEL base
   - Optimized for large language model serving
   - CUDA acceleration on Jetson hardware

3. **Granite 7B Model Stack** (Red Hat + IBM)
   - Complete AI stack with IBM Granite 7B model
   - Running on vLLM inference server
   - Ready for edge deployment on NVIDIA Jetson devices

### 💻 Interactive Features
- **Platform Selection**: Choose target hardware (currently NVIDIA Jetson)
- **Podman Pull Commands**: Click any card to get the container pull command
- **Copy to Clipboard**: One-click copying of podman commands
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🚀 Features

- **Project Showcase**: Interactive presentation of the edge AI pipelines project
- **Bootc Image Visualization**: Clear display of layered container architecture
- **Command Generation**: Instant access to podman pull commands for each image
- **Red Hat Branding**: Official Red Hat design system and logos
- **Partner Logos**: NVIDIA, vLLM, and IBM logos for each respective layer
- **Responsive Layout**: Grid layout for 3 cards, carousel for more
- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS

## 🛠 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **Development**: Hot reload with Turbopack

## 📦 Installation & Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/redhat-et/ui-edge-pipelines.git
   cd ui-edge-pipelines
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🎨 Key Components

### Header Component
- **Black Background**: Matches original Jounce.io design inspiration
- **Red Hat Logo**: Official Red Hat SVG logo
- **Minimal Design**: Clean, focused navigation
- **Responsive**: Mobile-friendly layout

### CardCarousel Component
- **Smart Layout**: Grid for ≤3 cards, carousel for more
- **Logo Combinations**: Red Hat + partner logos (NVIDIA/vLLM/IBM)
- **Interactive Cards**: Click to reveal podman pull commands
- **Copy Functionality**: One-click command copying
- **Responsive Design**: Adapts to all screen sizes

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**:
   ```bash
   npx vercel
   ```

3. **Or connect your GitHub repository** to Vercel for automatic deployments

### Deploy to Other Platforms

#### Netlify
```bash
npm run build
npx netlify deploy --prod --dir=out
```

#### Docker
```bash
# Build Docker image
docker build -t edge-ai-pipelines-ui .

# Run container
docker run -p 3000:3000 edge-ai-pipelines-ui
```

#### Static Export
```bash
# For static hosting (GitHub Pages, S3, etc.)
npm run build
npm run export
```

### Environment Variables

No environment variables required for basic deployment. The app is fully static and client-side.

## 🔗 Related Projects

- **Main Project**: [Edge Pipelines for Model Validation](https://github.com/redhat-et/edge-pipelines-for-model-validation)
- **Red Hat Design System**: Based on Red Hat's official design guidelines
- **Bootc Images**: Container images available on quay.io/redhat-et

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test locally: `npm run dev`
5. Build and verify: `npm run build`
6. Submit a pull request

## 📄 License

This project is part of the Red Hat Emerging Technologies initiative. See the main [edge-pipelines-for-model-validation](https://github.com/redhat-et/edge-pipelines-for-model-validation) repository for license information.

---

Built with ❤️ by Red Hat Emerging Technologies
Showcasing AI inference pipelines for edge computing
