

import { cn } from '@/lib/utils';

const WhatsAppButton = () => {
  const phoneNumber = '5511146168357';
  const message = 'Olá! Gostaria de saber mais sobre os serviços contábeis.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "w-16 h-16",
        "rounded-full shadow-lg hover:shadow-xl",
        "flex items-center justify-center",
        "transition-all duration-300 ease-in-out",
        "hover:scale-110 active:scale-95",
        "animate-pulse hover:animate-none"
      )}
      aria-label="Falar no WhatsApp"
    >
      <img 
        src="/lovable-uploads/ddc65749-b34e-41ef-b993-e4811238028a.png" 
        alt="WhatsApp" 
        className="w-full h-full object-cover rounded-full"
      />
    </a>
  );
};

export default WhatsAppButton;

