
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Step1Props {
  nextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ nextStep }) => {
  return (
    <Card className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-blue-200">Tell Us More About You</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <label htmlFor="job-title" className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
            <Input id="job-title" placeholder="e.g. Product Manager" />
          </div>
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">For which department do you want a Personal Assistant?</label>
            <Select>
              <SelectTrigger id="department">
                <SelectValue placeholder="Select a department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="product">Product</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="team-size" className="block text-sm font-medium text-gray-700 mb-1">Team Size</label>
            <Input id="team-size" type="number" placeholder="e.g. 10" />
          </div>
          <Button onClick={nextStep} className="w-full bg-blue-100 hover:bg-blue-100/90 text-white">Continue</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Step1;
