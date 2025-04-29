import React, { useState, useEffect } from 'react';

const rotatingWords = [
  "GFX Artist",
  "Designer",
  "Restart",
  "Visionary",
  "Dumbass",
  "Creator",
  "Editor",
];

const AboutPage: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const wordTimer = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 500);
    }, 3000);
    
    setIsVisible(true);
    
    return () => clearInterval(wordTimer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white py-24 px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h2 className="text-6xl font-bold mb-6">
              Hi, I'm <span className="text-[#0012ff]">nikooo</span>.
            </h2>
            <div className="h-16 mb-8">
              <p className="text-3xl">
                And I'm a professional{' '}
                <span 
                  className={`text-[#0012ff] inline-block transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                  {rotatingWords[wordIndex]}
                </span>
              </p>
            </div>
            <p className="text-lg mb-6">
              I am a passionate and experienced Roblox graphics artist with a strong background in creating
              visually appealing designs for games, assets, and branding. Skilled in using tools
              like Photoshop, Blender, and Roblox Studio, I bring creative concepts to life through high-quality
              icons, thumbnails and UI elements.
            </p>
            <p className="text-lg">
              With a deep understanding of the Roblox platform and its community, I tailor my designs to enhance
              user experience and captivate players. I thrive in collaborative environments, effectively communicating
              with developers to ensure that visual elements align with game mechanics and project goals.
            </p>
          </div>
          
          <div className="relative h-[650px] rounded-lg overflow-hidden">
              <video
                src="https://i.imgur.com/17xL8TT.mp4"  
                autoPlay
                loop
                muted
                playsInline
              />
              </div>
            </div>
          </div>
        </div>
  );
};

export default AboutPage;