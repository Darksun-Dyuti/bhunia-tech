import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Login requires backend', description: 'Connect to Lovable Cloud to enable authentication.' });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Registration requires backend', description: 'Connect to Lovable Cloud to enable authentication.' });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Link to="/" className="flex items-center justify-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
              <Cpu className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              TECH<span className="text-gradient">ZONE</span>
            </span>
          </Link>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div><Label>Email</Label><Input type="email" required /></div>
                <div className="relative">
                  <Label>Password</Label>
                  <Input type={showPassword ? 'text' : 'password'} required />
                  <Button type="button" variant="ghost" size="icon" className="absolute right-0 top-6" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                <Button type="submit" className="w-full gradient-primary">Sign In</Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div><Label>Full Name</Label><Input required /></div>
                <div><Label>Email</Label><Input type="email" required /></div>
                <div><Label>Password</Label><Input type="password" required /></div>
                <Button type="submit" className="w-full gradient-primary">Create Account</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
