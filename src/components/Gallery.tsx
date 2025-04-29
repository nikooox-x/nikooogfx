import React, { useEffect, useRef, useState } from 'react';
import ImageModal from './ImageModal';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: "https://i.imgur.com/XbDy7L3.png", alt: "It ain't loading cuh :skull:" }, //abuse CG
  { id: 2, src: "https://i.imgur.com/9jktHpR.jpeg", alt: "It ain't loading cuh :skull:" }, //hope 501
  { id: 3, src: "https://i.imgur.com/rFWO5oo.png", alt: "It ain't loading cuh :skull:" }, //boil n waxer
  { id: 4, src: "https://i.imgur.com/pjKqaAE.png", alt: "It ain't loading cuh :skull:" }, //gmpasses icons (bundles)
  { id: 5, src: "https://i.imgur.com/nxmlVO3.jpeg", alt: "It ain't loading cuh :skull:" }, //gmpass icons
  { id: 6, src: "https://i.imgur.com/1fpkBdf.png", alt: "It ain't loading cuh :skull:" }, //grey
  { id: 7, src: "https://i.imgur.com/2684arh.png", alt: "It ain't loading cuh :skull:" }, //RG
  { id: 8, src: "https://i.imgur.com/J4M4k9C.png", alt: "It ain't loading cuh :skull:" }, //RI
  { id: 9, src: "https://i.imgur.com/z8Bk6UJ.png", alt: "It ain't loading cuh :skull:" }, //RI starcard
  { id: 10, src: "https://i.imgur.com/hklZZTi.png", alt: "It ain't loading cuh :skull:" }, //SFC
  { id: 11, src: "https://i.imgur.com/w1rqBjA.png", alt: "It ain't loading cuh :skull:" }, //SOB
  { id: 12, src: "https://i.imgur.com/C3OwYAQ.png", alt: "It ain't loading cuh :skull:" }, //STORM
  { id: 13, src: "https://i.imgur.com/ujafi8n.jpeg", alt: "It ain't loading cuh :skull:" }, //team sele
  { id: 14, src: "https://i.imgur.com/eNQTTIa.png", alt: "It ain't loading cuh :skull:" }, //tour
];

const Gallery: React.FC = () => {
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);
  const column3Ref = useRef<HTMLDivElement>(null);
  const column4Ref = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const columns = [column1Ref.current, column2Ref.current, column3Ref.current, column4Ref.current];
    
    const createColumn = (images: GalleryImage[]) => {
      const column = document.createElement('div');
      column.className = 'flex flex-col gap-4';
      
      images.forEach(image => {
        const wrapper = document.createElement('div');
        wrapper.className = 'relative overflow-hidden rounded-lg cursor-pointer';
        wrapper.style.height = `${Math.floor(Math.random() * 200) + 300}px`;
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.className = 'w-full h-full object-cover transition-transform duration-500 hover:scale-110';
        
        // Add click event to open modal
        wrapper.onclick = () => setSelectedImage(image);
        
        wrapper.appendChild(img);
        column.appendChild(wrapper);
      });
      
      // Clone the column content for seamless loop
      const clone = column.cloneNode(true);
      column.appendChild(clone);
      
      return column;
    };

    const animateColumn = (column: HTMLDivElement, speed: number) => {
      let position = 0;
      const scroll = () => {
        position -= speed;
        column.style.transform = `translateY(${position}px)`;
        
        if (Math.abs(position) >= column.clientHeight / 2) {
          position = 0;
          column.style.transform = 'translateY(0)';
        }
        
        requestAnimationFrame(scroll);
      };
      
      requestAnimationFrame(scroll);
    };

    columns.forEach((column, index) => {
      if (column) {
        column.innerHTML = '';
        
        const shuffledImages = [...galleryImages]
          .sort(() => Math.random() - 0.5)
          .slice(0, 6);
        
        const columnContent = createColumn(shuffledImages);
        column.appendChild(columnContent);
        
        const speed = 5 + index * 0.5;
        animateColumn(columnContent, speed);
      }
    });
  }, []);

  return (
    <div className="py-12 bg-black">
      <h2 className="text-4xl font-bold text-white text-center mb-0">
        My work I've done here and there <span className="text-[#0012ff]">:D</span>
      </h2>
      <h1 className="text-1xl font-bold text-white text-center mb-0">
        Click on the images in order to view them full-screen.
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div ref={column1Ref} className="h-[800px] overflow-hidden"></div>
        <div ref={column2Ref} className="h-[800px] overflow-hidden"></div>
        <div ref={column3Ref} className="h-[800px] overflow-hidden"></div>
        <div ref={column4Ref} className="h-[800px] overflow-hidden"></div>
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Gallery;