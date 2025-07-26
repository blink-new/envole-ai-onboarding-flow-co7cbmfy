
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Copy } from 'lucide-react';

interface Step5Props {
  nextStep: () => void;
  prevStep: () => void;
}

const Step5: React.FC<Step5Props> = ({ nextStep, prevStep }) => {
  const paEmail = "product-helper@envole.ai"; // This will be dynamic later

  const copyToClipboard = () => {
    navigator.clipboard.writeText(paEmail);
    // Add a toast notification for feedback
  };

  return (
    <Card className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-blue-200">Your Personal Assistant is Ready!</CardTitle>
        <CardDescription>CC this email address in your conversations to keep your PA in the loop.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Input readOnly value={paEmail} />
            <Button variant="outline" size="icon" onClick={copyToClipboard}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-between">
            <Button onClick={prevStep} variant="outline">Back</Button>
            <Button onClick={nextStep} className="bg-blue-100 hover:bg-blue-100/90 text-white">Continue</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Step5;
