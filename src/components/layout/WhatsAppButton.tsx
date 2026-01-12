import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const phoneNumber = '15551234567'; // Replace with actual WhatsApp number
  const message = encodeURIComponent('Hello! I have a question about your products.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        style={{ background: '#25D366' }}
      >
        <MessageCircle className="h-7 w-7 text-primary-foreground" />
        <span className="sr-only">Chat on WhatsApp</span>
      </Button>
    </a>
  );
};

export default WhatsAppButton;
