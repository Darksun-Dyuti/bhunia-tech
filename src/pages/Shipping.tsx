import { Truck, Clock, MapPin, Package, Shield, IndianRupee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

const deliveryZones = [
  {
    zone: 'Metro Cities',
    cities: 'Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad',
    standard: '2-3 Days',
    express: '1-2 Days',
    standardCost: 'Free above ₹999',
    expressCost: '₹149',
  },
  {
    zone: 'Tier-1 Cities',
    cities: 'Jaipur, Lucknow, Chandigarh, Bhopal, Indore, Nagpur, Patna, Kochi',
    standard: '3-5 Days',
    express: '2-3 Days',
    standardCost: 'Free above ₹999',
    expressCost: '₹199',
  },
  {
    zone: 'Tier-2 Cities',
    cities: 'Midnapore, Siliguri, Rourkela, Ranchi, Guwahati, Dehradun, Varanasi',
    standard: '5-7 Days',
    express: '3-4 Days',
    standardCost: '₹99 (Free above ₹1499)',
    expressCost: '₹249',
  },
  {
    zone: 'Remote Areas',
    cities: 'North East, J&K, Himachal Pradesh, Andaman & Nicobar, Lakshadweep',
    standard: '7-10 Days',
    express: '5-7 Days',
    standardCost: '₹149 (Free above ₹1999)',
    expressCost: '₹349',
  },
];

const shippingFeatures = [
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    description: 'We deliver to 25,000+ pin codes across India including remote areas.',
  },
  {
    icon: Clock,
    title: 'Real-time Tracking',
    description: 'Track your order in real-time with SMS and WhatsApp updates.',
  },
  {
    icon: Shield,
    title: 'Secure Packaging',
    description: 'All products are securely packed with bubble wrap and tamper-proof seals.',
  },
  {
    icon: IndianRupee,
    title: 'Free Shipping',
    description: 'Enjoy free standard shipping on orders above ₹999 to metro cities.',
  },
];

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Shipping Information
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fast and reliable delivery across India. Track your orders in real-time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {shippingFeatures.map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Delivery Zones */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Delivery Zones & Timelines
          </h2>
          <div className="grid gap-6">
            {deliveryZones.map((zone) => (
              <Card key={zone.zone}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    {zone.zone}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{zone.cities}</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="p-4 rounded-lg bg-secondary/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Standard Delivery</span>
                        <Badge variant="secondary">{zone.standard}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{zone.standardCost}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Express Delivery</span>
                        <Badge className="gradient-primary border-0">{zone.express}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{zone.expressCost}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Shipping Policy */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Shipping Policy
          </h2>
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Package className="h-4 w-4 text-primary" />
                  Order Processing
                </h3>
                <p className="text-sm text-muted-foreground">
                  Orders placed before 2 PM IST are processed on the same day. Orders placed after 2 PM IST 
                  or on weekends/holidays will be processed on the next business day.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Truck className="h-4 w-4 text-primary" />
                  Delivery Partners
                </h3>
                <p className="text-sm text-muted-foreground">
                  We partner with trusted courier services including BlueDart, Delhivery, DTDC, and 
                  India Post to ensure safe and timely delivery of your orders.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Insurance
                </h3>
                <p className="text-sm text-muted-foreground">
                  All shipments above ₹5,000 are fully insured against damage or loss during transit 
                  at no additional cost.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  Delivery Attempts
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our delivery partners will make up to 3 delivery attempts. If delivery fails after 
                  3 attempts, the order will be returned to our warehouse and a refund will be processed.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact for Shipping */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Have questions about your shipment? Contact our support team.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <span className="flex items-center gap-2">
              📞 <strong>+91 81111 80000</strong>
            </span>
            <span className="flex items-center gap-2">
              ✉️ <strong>supportbhuniatechzone@gmail.com</strong>
            </span>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Shipping;
