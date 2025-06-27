import Image from 'next/image';
import Header from '@/components/Header';
import CardCarousel, { CardData } from '@/components/CardCarousel';

const bootcImageLayers: CardData[] = [
  {
    id: '1',
    title: 'RHEL 9.4 Base Image',
    description: 'Enterprise-grade Red Hat Enterprise Linux 9.4 bootc image optimized for NVIDIA Jetson devices with integrated GPU drivers and edge computing capabilities.',
    image: 'placeholder',
    category: 'Base Image',
    link: 'podman pull quay.io/redhat-et/nvidia-jetson-rhel-9:latest'
  },
  {
    id: '2',
    title: 'vLLM Inference Server',
    description: 'High-performance inference server built on the RHEL base image, optimized for large language model serving with CUDA acceleration on Jetson hardware.',
    image: 'placeholder',
    category: 'Inference Server',
    link: 'podman pull quay.io/redhat-et/vllm-nvidia-jetson-rhel-9:latest'
  },
  {
    id: '3',
    title: 'Granite 7B Model Stack',
    description: 'Complete AI stack with IBM Granite 7B model running on vLLM inference server, ready for edge deployment on NVIDIA Jetson devices.',
    image: 'placeholder',
    category: 'Complete Stack',
    link: 'podman pull quay.io/redhat-et/granite-7b-vllm-nvidia-jetson-rhel-9:latest'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Edge AI
            <span className="text-red-600"> Pipelines</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Automated AI inference pipelines for edge deployment using bootc RHEL images.
            Test and deploy curated AI/ML stacks on NVIDIA Jetson devices with multiple inference servers
            including vLLM, llama.cpp, Kserve, and TorchServe.
          </p>
          <div className="space-x-4">
            <a
              href="https://github.com/redhat-et/edge-pipelines-for-model-validation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              View on GitHub
            </a>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Platform Filter Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Target Platform</h2>
            <div className="inline-flex rounded-lg border border-gray-300 bg-white p-1">
              <button className="px-6 py-2 rounded-md bg-red-600 text-white font-medium">
                NVIDIA Jetson
              </button>
              <button className="px-6 py-2 rounded-md text-gray-500 font-medium cursor-not-allowed" disabled>
                AMD Embedded + (Coming Soon)
              </button>
              <button className="px-6 py-2 rounded-md text-gray-500 font-medium cursor-not-allowed" disabled>
                NXP i.MX (Coming Soon)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bootc Image Layers Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bootc Image Layers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each layer builds upon the previous one, creating a complete AI inference stack.
              Click on any card to get the podman pull command for that specific image.
            </p>
          </div>
          <CardCarousel cards={bootcImageLayers} />
        </div>
      </section>

      {/* Project Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Edge AI Pipelines?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-red-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Testing</h3>
              <p className="text-gray-600">
                CI/CD pipelines automatically test multiple inference stacks and models on real hardware.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-red-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Edge Optimized</h3>
              <p className="text-gray-600">
                Bootc images specifically optimized for edge devices with GPU acceleration support.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-red-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Ready</h3>
              <p className="text-gray-600">
                Built on RHEL foundation with enterprise-grade security and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Supported Technologies</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Generative AI Inference</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• vLLM - High-performance LLM serving</li>
                <li>• llama.cpp - Efficient CPU/GPU inference</li>
                <li>• IBM Granite models</li>
                <li>• Hugging Face Transformers</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive AI Inference</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• KServe - Kubernetes-native serving</li>
                <li>• TorchServe - PyTorch model serving</li>
                <li>• OpenVINO Model Server - Intel optimization</li>
                <li>• ONNX Runtime - Cross-platform inference</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/redhat-logo.svg"
                  alt="Red Hat"
                  width={100}
                  height={26}
                  className="h-6 w-auto"
                />
              </div>
              <p className="text-gray-400">
                Automated AI inference pipelines for edge deployment using bootc RHEL images.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Project</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://github.com/redhat-et/edge-pipelines-for-model-validation" className="hover:text-white transition-colors">GitHub Repository</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Bootc Images</a></li>
                <li><a href="#" className="hover:text-white transition-colors">NVIDIA Jetson</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Inference</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Issues</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contributing</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Red Hat, Inc. All rights reserved. | <a href="https://github.com/redhat-et/edge-pipelines-for-model-validation" className="hover:text-white transition-colors">Edge Pipelines for Model Validation</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
