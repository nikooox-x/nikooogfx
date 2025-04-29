import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  image: {
    src: string;
    alt: string;
  };
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-[#0012ff] transition-colors"
      >
        <X size={24} />
      </button>
      
      <img
        src={image.src}
        alt={image.alt}
        className="max-w-full max-h-[90vh] object-contain rounded-lg"
      />
    </div>
  );
};

export default ImageModal;