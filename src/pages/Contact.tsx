import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    toast({ title: 'Message Sent!', description: 'We\'ll get back to you soon.' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have questions? We're here to help. Reach out to our team.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><Label>Name</Label><Input required /></div>
                  <div><Label>Email</Label><Input type="email" required /></div>
                </div>
                <div><Label>Subject</Label><Input required /></div>
                <div><Label>Message</Label><Textarea rows={5} required /></div>
                <Button type="submit" className="w-full gradient-primary gap-2" disabled={isSubmitting}>
                  <Send className="h-4 w-4" /> {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card><CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div><h3 className="font-semibold">Address</h3><p className="text-sm text-muted-foreground">Jugnitola chawk, Midnapore, West Midnapore, 721129</p></div>
            </CardContent></Card>
            <Card><CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div><h3 className="font-semibold">Phone</h3><p className="text-sm text-muted-foreground">+91 81111 80000</p></div>
            </CardContent></Card>
            <Card><CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div><h3 className="font-semibold">Email</h3><p className="text-sm text-muted-foreground">supportbhuniatechzone@gmail.com</p></div>
            </CardContent></Card>
            
            {/* Google Maps */}
            <Card className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.3685!2d87.3209!3d22.4209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02a01e7e8e78b1%3A0x2e0f0a0b0c0d0e0f!2sMidnapore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1699900000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Store Location"
              />
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
