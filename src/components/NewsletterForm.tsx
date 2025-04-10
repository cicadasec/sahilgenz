
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "We'll notify you when we launch.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '1.4s' }}>
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/80 backdrop-blur-sm border-none ring-1 ring-purple-100 focus:ring-purple-300"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-theme-purple hover:bg-theme-purple/90 text-white"
        >
          {isSubmitting ? 'Subscribing...' : 'Notify Me'}
        </Button>
      </div>
      <p className="text-sm text-center text-gray-500 mt-3">
        Be the first to know when we launch.
      </p>
    </form>
  );
};

export default NewsletterForm;
