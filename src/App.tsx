import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Shield, Zap, Monitor, Terminal, Lock, Cpu, Code, Sparkles, Workflow, Star } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [downloadLink, setDownloadLink] = useState('https://www.mediafire.com/file/8q27jsdgkm6hmnh/Debug.rar/file');
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = [
    {
      name: "Alex M.",
      rating: 5,
      text: "Best executor I've ever used. Super stable and reliable!",
      color: "from-purple-400 to-blue-500"
    },
    {
      name: "Sarah K.",
      rating: 5,
      text: "Amazing performance and the support team is fantastic!",
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Mike R.",
      rating: 5,
      text: "Incredibly smooth and never detected.",
      color: "from-cyan-400 to-emerald-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    const reviewInterval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(reviewInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1C] relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-500/10 to-cyan-400/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2946')] 
                      bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      </div>

      {/* Animated orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-float-delayed"></div>
      <div className="absolute top-40 right-40 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl animate-float-slow"></div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Topbar */}
        <nav className="bg-[#0A0F1C]/80 backdrop-blur-xl border-b border-blue-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                  Klyptic
                </span>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center space-x-6">
                <a href="#features" className="px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 transition-all duration-300 border border-blue-500/20 hover:border-blue-400/40">Features</a>
                <a href="#download" className="px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 transition-all duration-300 border border-blue-500/20 hover:border-blue-400/40">Download</a>
                <a href="#support" className="px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 transition-all duration-300 border border-blue-500/20 hover:border-blue-400/40">Support</a>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0A0F1C]/90 backdrop-blur-xl">
              <a href="#features" className="block px-3 py-2 text-blue-100 hover:bg-blue-500/10 rounded-md">Features</a>
              <a href="#download" className="block px-3 py-2 text-blue-100 hover:bg-blue-500/10 rounded-md">Download</a>
              <a href="#support" className="block px-3 py-2 text-blue-100 hover:bg-blue-500/10 rounded-md">Support</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 mb-6">
                Unleash Your Potential
              </h1>
              <p className="text-xl text-blue-200/80 mb-8 max-w-2xl mx-auto">
                Experience the next generation of Roblox execution with unmatched performance and compatibility
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <a 
                href={downloadLink}
                className="inline-flex items-center px-8 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25 animate-float-button"
              >
                Download Now
              </a>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-20">
              <div className="p-6 rounded-xl bg-[#0A0F1C]/50 backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 animate-fade-in-up animation-delay-300 hover:transform hover:scale-105">
                <Zap className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-blue-100 mb-2">Lightning Fast</h3>
                <p className="text-blue-200/70">Experience instant execution with our optimized engine</p>
              </div>

              <div className="p-6 rounded-xl bg-[#0A0F1C]/50 backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 animate-fade-in-up animation-delay-400 hover:transform hover:scale-105">
                <Lock className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-blue-100 mb-2">Secure & Safe</h3>
                <p className="text-blue-200/70">Advanced protection against detection and bans</p>
              </div>

              <div className="p-6 rounded-xl bg-[#0A0F1C]/50 backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 animate-fade-in-up animation-delay-500 hover:transform hover:scale-105">
                <Cpu className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-blue-100 mb-2">High Performance</h3>
                <p className="text-blue-200/70">Optimized for all devices with minimal resource usage</p>
              </div>
            </div>

            {/* Additional Features Section */}
            <div className="mt-32 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 mb-16">
                Advanced Features
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-xl bg-[#0A0F1C]/50 backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
                  <Code className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-blue-100 mb-3">Script Library</h3>
                  <p className="text-blue-200/70">Access our extensive collection of pre-made scripts and tools</p>
                </div>
                <div className="p-8 rounded-xl bg-[#0A0F1C]/50 backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
                  <Terminal className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-blue-100 mb-3">Debug Console</h3>
                  <p className="text-blue-200/70">Advanced debugging tools and real-time script monitoring</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-32 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 mb-16">
                Why Choose Klyptic?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-100 mb-2">Undetected</h3>
                  <p className="text-blue-200/70">Stay safe with our advanced protection system</p>
                </div>
                <div className="text-center p-6 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-100 mb-2">User-Friendly</h3>
                  <p className="text-blue-200/70">Intuitive interface for all skill levels</p>
                </div>
                <div className="text-center p-6 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Workflow className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-100 mb-2">Regular Updates</h3>
                  <p className="text-blue-200/70">Constant improvements and new features</p>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-48">
              <div className="max-w-3xl mx-auto p-8 rounded-xl bg-gradient-to-r border border-blue-500/20 backdrop-blur-xl transition-all duration-500 animate-fade-in-up">
                <div key={currentReviewIndex} className="animate-slide-in">
                  <div className="flex justify-center mb-4">
                    {[...Array(reviews[currentReviewIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl text-blue-100 italic mb-4">"{reviews[currentReviewIndex].text}"</p>
                  <p className="text-blue-300 font-semibold">{reviews[currentReviewIndex].name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;