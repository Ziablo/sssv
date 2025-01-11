import React, { useState } from 'react';
import { Send, Lock, AlertCircle } from 'lucide-react';

function App() {
  const [accessCode, setAccessCode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showPresentation, setShowPresentation] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode === '0000') {
      setError(false);
      setIsAuthorized(true);
      startAnimationSequence();
    } else {
      setError(true);
      const form = document.querySelector('.login-form');
      form?.classList.add('shake');
      setTimeout(() => {
        form?.classList.remove('shake');
      }, 500);
    }
  };

  const startAnimationSequence = () => {
    // Show welcome immediately
    setShowWelcome(true);
    
    // Switch to presentation after 2s
    setTimeout(() => {
      setShowWelcome(false);
      setShowPresentation(true);
    }, 2000);
    
    // Switch to content after another 2s
    setTimeout(() => {
      setShowPresentation(false);
      setShowContent(true);
    }, 4000);
  };

  const telegramChannels = [
    {
      title: "Canal Principal",
      description: "Actualités et annonces importantes",
      link: "https://t.me/+bsFbTqFnfdI0OGNk",
      image: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2016/12/18/431639/176106/tvr_logo_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1901310.jpg?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Discussions",
      description: "Échangez avec la communauté",
      link: "https://t.me/TVRdiscussionzone",
      image: "https://cdn-icons-png.flaticon.com/512/5064/5064943.png?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Cerveau",
      description: "Restez informé des prochains événements",
      link: "https://t.me/+WFkHb0oeGx45ODBk",
      image: "https://static.wikia.nocookie.net/tele-realite/images/d/d4/TheCerveauLOGO.webp/revision/latest?cb=20241208105725&path-prefix=fr?auto=format&fit=crop&w=800&q=80"
    }
  ];

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          
          <div className="login-form bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex justify-center mb-8">
              <div className="bg-blue-600/20 p-4 rounded-full">
                <Lock size={32} className="text-blue-400" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Zone Privée</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="password"
                  value={accessCode}
                  onChange={(e) => {
                    setAccessCode(e.target.value);
                    setError(false);
                  }}
                  placeholder="Code d'accès"
                  className={`w-full px-4 py-4 rounded-lg bg-gray-700/50 text-white border ${
                    error ? 'border-red-500' : 'border-gray-600'
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 backdrop-blur-sm`}
                />
                {error && (
                  <div className="absolute -bottom-6 left-0 flex items-center text-red-500 text-sm">
                    <AlertCircle size={16} className="mr-1" />
                    <span>Code incorrect</span>
                  </div>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-4 rounded-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Accéder</span>
                <Send size={20} className="animate-pulse" />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (showWelcome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-fade-in">
          Bienvenue
        </h1>
      </div>
    );
  }

  if (showPresentation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-presentation text-center px-4">
          Présenté par Ziablow
        </h1>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 ${showContent ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4 animate-slide-down whitespace-nowrap">
            Nos Canaux Telegram
          </h1>
          <p className="text-gray-300 text-xl animate-slide-up">
            Rejoignez notre communauté exclusive et restez connecté
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {telegramChannels.map((channel, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={channel.image}
                  alt={channel.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {channel.title}
                </h3>
                <p className="text-gray-400 mb-6">{channel.description}</p>
                <a
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center transform hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Rejoindre le canal
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;