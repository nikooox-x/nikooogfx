import React from 'react';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import Gallery from './components/Gallery';
import RobloxGroups from './components/RobloxGroups';
import CommissionModal from './components/CommissionModal';
import PricingModal from './components/PricingModal';
import { ModalProvider, useModal } from './context/ModalContext';

const AppContent: React.FC = () => {
  const { activeModal } = useModal();

  return (
    <div className="relative">
      {/* Landing Page */}
      <div className="fixed inset-0 w-full h-screen">
        <LandingPage />
      </div>
      
      {/* Content that overlaps */}
      <div className="relative z-10 pointer-events-none">
        {/* Spacer to allow scrolling past landing page */}
        <div className="h-screen w-full"></div>
        
        {/* Content sections with pointer events enabled */}
        <div className="pointer-events-auto">
          {/* About Page */}
          <section>
            <AboutPage />
          </section>
          
          {/* Gallery Section */}
          <section>
            <Gallery />
          </section>

          {/* Roblox Groups Section */}
          <section>
            <RobloxGroups />
          </section>
          
          {/* Footer */}
          <footer className="bg-black text-white py-8 text-center">
            <p className="text-sm">© 2025 nikooogfx | All rights reserved</p>
          </footer>
        </div>
      </div>
      
      {/* Modals */}
      {activeModal === 'commission' && <CommissionModal />}
      {activeModal === 'pricing' && <PricingModal />}
    </div>
  );
};

function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  );
}

export default App;