
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Step2Props {
  nextStep: () => void;
  prevStep: () => void;
}

const Step2: React.FC<Step2Props> = ({ nextStep, prevStep }) => {
  return (
    <Card className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-blue-200">Create Your Team</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <label htmlFor="team-name" className="block text-sm font-medium text-gray-700 mb-1">Team Name</label>
            <Input id="team-name" placeholder="e.g. Product Team" />
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

export default Step2;
