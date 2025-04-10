
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import CountdownTimer from '@/components/CountdownTimer';
import NewsletterForm from '@/components/NewsletterForm';
import SocialLinks from '@/components/SocialLinks';

const Index = () => {
  // Set target launch date to 30 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <AnimatedBackground />
      
      <div className="container max-w-3xl text-center z-10 py-10">
        {/* WordPress Logo */}
        <div className="w-16 h-16 mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <svg viewBox="0 0 122.52 122.523" xmlns="http://www.w3.org/2000/svg" className="text-theme-purple fill-current">
            <path d="M8.708 61.26c0 20.802 12.089 38.779 29.619 47.298L13.258 39.872c-2.916 6.536-4.55 13.769-4.55 21.388zm89.122-2.784c0-6.498-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501L48.2 93.547l11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.241-17.517c2.273-7.269 4.002-12.49 4.002-16.989z"/>
            <path d="m62.184 65.857-15.768 45.819c4.708 1.384 9.687 2.141 14.846 2.141 6.12 0 11.989-1.058 17.452-2.979-.141-.225-.269-.464-.374-.724zm45.831-30.89c.236 1.751.36 3.633.36 5.666 0 5.598-1.047 11.886-4.194 19.744L87.761 106.28c16.505-9.626 27.624-27.438 27.624-47.895 0-9.642-2.453-18.698-6.762-26.597a10.6 10.6 0 0 0-.442-.757c-.1-.168-.208-.329-.32-.487z"/>
            <path d="M61.262 0C27.483 0 0 27.481 0 61.26c0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263C122.526 27.481 95.04 0 61.262 0zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.45 58.453-58.45 32.229 0 58.45 26.22 58.45 58.45 0 32.232-26.221 58.455-58.45 58.455z"/>
          </svg>
        </div>
        
        {/* Heading */}
        <div className="relative">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in text-theme-darkGray tracking-tight" style={{ animationDelay: '0.6s' }}>
            COMING SOON
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-theme-purple/10 to-transparent shine-effect opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}></div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          We're working hard to bring you something amazing.
        </p>
        
        {/* Countdown Timer */}
        <CountdownTimer targetDate={targetDate} />
        
        {/* Newsletter Form */}
        <NewsletterForm />
        
        {/* Social Media Links */}
        <SocialLinks />
      </div>
    </div>
  );
};

export default Index;
