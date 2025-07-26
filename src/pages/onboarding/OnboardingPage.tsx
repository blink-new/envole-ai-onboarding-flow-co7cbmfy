
import React, { useState } from 'react';
import OnboardingLayout from '../../components/layout/OnboardingLayout';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const OnboardingPage: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <OnboardingLayout>
      <div className="p-8 rounded-lg w-full">
        {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}
        {/* Other steps will be added here */}
      </div>
    </OnboardingLayout>
  );
};

export default OnboardingPage;
