
import React from 'react';

interface OnboardingLayoutProps {
  children: React.ReactNode;
}

const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({ children }) => {
  return (
    <div className="bg-cream min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default OnboardingLayout;
