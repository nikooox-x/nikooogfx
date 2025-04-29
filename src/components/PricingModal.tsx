import React from 'react';
import { X } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const PricingModal: React.FC = () => {
  const { closeModal } = useModal();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 p-4">
      <div className="bg-[#0a0a1a] border-2 border-[#0012ff] p-4 sm:p-8 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto relative text-white">
        <button 
          onClick={closeModal}
          className="absolute top-2 right-2 text-white hover:text-[#0012ff] transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0012ff]">Commission Pricing</h2>
          
          <div className="grid gap-6 mb-6">
            <div className="border-b border-[#0012ff]/30 pb-4">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Group icons</h3>
              <p className="text-xl sm:text-2xl font-bold text-[#0012ff] mb-2">Depends on how many icons is the commission</p>
              <h3>Most usually 3$ per icon.</h3>
              <ul className="text-left list-disc pl-6 space-y-1 text-sm sm:text-base">
                <li>Simple character render</li>
                <li>Basic background</li>
                <li>Delivery within 3-4 days</li>
              </ul>
            </div>
            
            <div className="border-b border-[#0012ff]/30 pb-4">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Standard GFX image</h3>
              <p className="text-xl sm:text-2xl font-bold text-[#0012ff] mb-2">$10+</p>
              <ul className="text-left list-disc pl-6 space-y-1 text-sm sm:text-base">
                <li>Detailed character render</li>
                <li>Custom background</li>
                <li>Special effects (optional)</li>
                <li>Delivery within 2-3 days</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Premium GFX Package</h3>
              <p className="text-xl sm:text-2xl font-bold text-[#0012ff] mb-2">$20+</p>
              <ul className="text-left list-disc pl-6 space-y-1 text-sm sm:text-base">
                <li>Complex scene with multiple characters</li>
                <li>Advanced lighting and effects</li>
                <li>Highly detailed environment</li>
                <li>3 revisions included</li>
                <li>Delivery within agreed date when requesting</li>
              </ul>
            </div>
          </div>

          <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Special request</h3>
              <p className="text-xl sm:text-2xl font-bold text-[#0012ff] mb-2">?</p>
              <ul className="text-left list-disc pl-6 space-y-1 text-sm sm:text-base">
                <li>Contact me if any of the above won't match your wantings</li>
              </ul>
            </div>
          </div>
          
          <p className="text-xs sm:text-sm text-gray-400 mt-4">
            Prices may vary based on complexity and specific requirements.
            Contact me for custom quotes on larger projects.
          </p>
        </div>
      </div>
  );
};

export default PricingModal;