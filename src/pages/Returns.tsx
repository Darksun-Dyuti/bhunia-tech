import { RotateCcw, Clock, CheckCircle, XCircle, AlertTriangle, IndianRupee, Shield, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

const returnEligibility = [
  {
    icon: CheckCircle,
    title: 'Eligible for Return',
    items: [
      'Unopened products in original packaging',
      'Defective or damaged products (report within 48 hours)',
      'Wrong product delivered',
      'Product not matching description',
      'Missing accessories or components',
    ],
    variant: 'success' as const,
  },
  {
    icon: XCircle,
    title: 'Not Eligible for Return',
    items: [
      'Products with broken seals (unless defective)',
      'Software with activated license keys',
      'Customized or personalized products',
      'Products damaged due to misuse',
      'Products returned after 7 days',
    ],
    variant: 'destructive' as const,
  },
];

const refundTimelines = [
  { method: 'UPI / Wallet', timeline: '24-48 hours' },
  { method: 'Credit/Debit Card', timeline: '5-7 business days' },
  { method: 'Net Banking', timeline: '5-7 business days' },
  { method: 'Cash on Delivery', timeline: '7-10 business days (Bank Transfer)' },
];

const faqs = [
  {
    question: 'How do I initiate a return?',
    answer: 'Log into your account, go to "My Orders", select the order, and click "Return/Replace". You can also contact our support at +91 81111 80000 or email supportbhuniatechzone@gmail.com.',
  },
  {
    question: 'Who bears the return shipping cost?',
    answer: 'For defective products or wrong deliveries, we bear the return shipping cost. For change of mind returns, a flat fee of ₹99 will be deducted from your refund.',
  },
  {
    question: 'Can I exchange instead of return?',
    answer: 'Yes! You can request an exchange for a different size, color, or variant of the same product. For a different product, you\'ll need to return and place a new order.',
  },
  {
    question: 'What if my refund is delayed?',
    answer: 'Refunds are processed within the timelines mentioned. If delayed, please contact your bank first. If the issue persists, reach out to our support team with your order ID.',
  },
  {
    question: 'How do I track my refund status?',
    answer: 'You\'ll receive SMS and email updates for your refund status. You can also check the status in your account under "My Orders" > "Refund Status".',
  },
];

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Returns & Refunds
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hassle-free returns within 7 days. Your satisfaction is our priority.
          </p>
        </div>

        {/* Return Policy Overview */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">7-Day Returns</h3>
              <p className="text-sm text-muted-foreground">Return within 7 days of delivery</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Easy Process</h3>
              <p className="text-sm text-muted-foreground">Simple online return request</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quick Refunds</h3>
              <p className="text-sm text-muted-foreground">Refund within 5-7 business days</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Consumer Protected</h3>
              <p className="text-sm text-muted-foreground">As per Indian Consumer Protection Act</p>
            </CardContent>
          </Card>
        </div>

        {/* Eligibility */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {returnEligibility.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <section.icon className={`h-5 w-5 ${section.variant === 'success' ? 'text-green-500' : 'text-destructive'}`} />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className={section.variant === 'success' ? 'text-green-500' : 'text-destructive'}>
                        {section.variant === 'success' ? '✓' : '✗'}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Refund Timelines */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Refund Timelines
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {refundTimelines.map((item) => (
                  <div key={item.method} className="text-center p-4 rounded-lg bg-secondary/50">
                    <h4 className="font-medium mb-2">{item.method}</h4>
                    <Badge variant="secondary">{item.timeline}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Return Process Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            How to Return
          </h2>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { step: 1, title: 'Request Return', desc: 'Go to My Orders and select Return/Replace' },
              { step: 2, title: 'Select Reason', desc: 'Choose the reason for return' },
              { step: 3, title: 'Schedule Pickup', desc: 'Select a convenient pickup slot' },
              { step: 4, title: 'Get Refund', desc: 'Refund processed after quality check' },
            ].map((item) => (
              <Card key={item.step} className="text-center relative">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Consumer Rights */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Your Consumer Rights
          </h2>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Consumer Protection Act, 2019</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    As per the Consumer Protection Act, 2019, you have the right to:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Right to be Protected</strong> against hazardous goods and services</li>
                    <li>• <strong>Right to be Informed</strong> about quality, quantity, price, and standard of goods</li>
                    <li>• <strong>Right to Choose</strong> from a variety of products at competitive prices</li>
                    <li>• <strong>Right to be Heard</strong> and seek redressal against unfair practices</li>
                    <li>• <strong>Right to Seek Redressal</strong> against unfair trade practices through Consumer Forums</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    For grievances, you can also file a complaint at <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">consumerhelpline.gov.in</a> or call 1800-11-4000 (toll-free).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact for Returns */}
        <div className="text-center">
          <Card className="inline-block">
            <CardContent className="p-6">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Need Help with Returns?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our support team is available Mon-Sat, 9 AM - 6 PM IST
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <span className="flex items-center gap-2">
                  📞 <strong>+91 81111 80000</strong>
                </span>
                <span className="flex items-center gap-2">
                  ✉️ <strong>supportbhuniatechzone@gmail.com</strong>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Returns;
