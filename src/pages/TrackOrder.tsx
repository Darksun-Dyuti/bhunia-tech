import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, CheckCircle, Clock, Search, MapPin } from "lucide-react";
import { useState } from "react";

const TrackOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [orderStatus, setOrderStatus] = useState<null | {
    status: string;
    steps: { title: string; description: string; completed: boolean; date?: string }[];
  }>(null);

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      // Simulated tracking data - in production, this would fetch from an API
      setOrderStatus({
        status: "In Transit",
        steps: [
          { title: "Order Placed", description: "Your order has been confirmed", completed: true, date: "10 Jan 2026, 10:30 AM" },
          { title: "Processing", description: "Order is being prepared", completed: true, date: "10 Jan 2026, 2:00 PM" },
          { title: "Shipped", description: "Package handed to courier", completed: true, date: "11 Jan 2026, 9:00 AM" },
          { title: "In Transit", description: "Package is on the way", completed: true, date: "12 Jan 2026, 11:00 AM" },
          { title: "Out for Delivery", description: "Package is out for delivery", completed: false },
          { title: "Delivered", description: "Package delivered successfully", completed: false },
        ],
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Track Your Order</h1>
            <p className="text-muted-foreground">
              Enter your tracking number to get real-time updates on your shipment
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Enter Tracking Details
              </CardTitle>
              <CardDescription>
                You can find your tracking number in the order confirmation email or SMS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="Enter tracking number (e.g., BT1234567890)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleTrack}>
                  Track Order
                </Button>
              </div>
            </CardContent>
          </Card>

          {orderStatus && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Tracking: {trackingNumber}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {orderStatus.status}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderStatus.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.completed 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {step.completed ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : index === 4 ? (
                            <Truck className="h-4 w-4" />
                          ) : index === 5 ? (
                            <MapPin className="h-4 w-4" />
                          ) : (
                            <Clock className="h-4 w-4" />
                          )}
                        </div>
                        {index < orderStatus.steps.length - 1 && (
                          <div className={`w-0.5 h-12 ${
                            step.completed ? "bg-primary" : "bg-muted"
                          }`} />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <h4 className={`font-medium ${
                          step.completed ? "text-foreground" : "text-muted-foreground"
                        }`}>
                          {step.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                        {step.date && (
                          <p className="text-xs text-muted-foreground mt-1">{step.date}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Delivery Address
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Jugnitola chawk, Midnapore, West Midnapore, 721129
                  </p>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Need help? Contact us at{" "}
                    <a href="tel:+918111180000" className="text-primary hover:underline">
                      +91 81111 80000
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {!orderStatus && (
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Package className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-medium">Order Processing</h3>
                  <p className="text-sm text-muted-foreground">1-2 business days</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-medium">Standard Delivery</h3>
                  <p className="text-sm text-muted-foreground">3-7 business days</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-medium">Delivered</h3>
                  <p className="text-sm text-muted-foreground">Safe & secure</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TrackOrder;
