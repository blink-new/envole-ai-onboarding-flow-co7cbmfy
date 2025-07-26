
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface Step4Props {
  nextStep: () => void;
  prevStep: () => void;
}

const Step4: React.FC<Step4Props> = ({ nextStep, prevStep }) => {
  return (
    <Card className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-blue-200">Connect Your PA to Meetings</CardTitle>
        <CardDescription>Allow your PA to join meetings and take notes.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col space-y-4">
            <Button variant="outline" className="w-full">
              <img src="/src/assets/icons/gmail.svg" alt="Gmail" className="h-6 w-6 mr-2" />
              Connect Gmail
            </Button>
            <Button variant="outline" className="w-full">
              <img src="/src/assets/icons/outlook.svg" alt="Outlook" className="h-6 w-6 mr-2" />
              Connect Outlook
            </Button>
          </div>
          <div className="flex justify-between">
            <Button onClick={prevStep} variant="outline">Back</Button>
            <Button onClick={nextStep} className="bg-blue-100 hover:bg-blue-100/90 text-white">Continue</Button>
          </div>
          <div className="text-center">
            <Button onClick={nextStep} variant="link">Skip for now</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Step4;
