
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, Trash2 } from 'lucide-react';

interface Step6Props {
  nextStep: () => void;
  prevStep: () => void;
}

const Step6: React.FC<Step6Props> = ({ nextStep, prevStep }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="bg-white shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-200">Setup Your Team</CardTitle>
          <CardDescription>Invite your team members and assign their roles.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* This will be a list of team members */}
            <div className="flex items-center space-x-2">
              <Input placeholder="name@example.com" />
              <Select>
                <SelectTrigger><SelectValue placeholder="Role" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="member">Member</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4" /></Button>
            </div>
            <Button variant="outline" className="w-full">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Team Member
            </Button>
          </div>
          <div className="flex justify-between mt-8">
            <Button onClick={prevStep} variant="outline">Back</Button>
            <Button onClick={nextStep} className="bg-blue-100 hover:bg-blue-100/90 text-white">Finish</Button>
          </div>
        </CardContent>
      </Card>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-xl font-bold text-center text-blue-200">Your Team's Organogram</h3>
        {/* Organogram will be rendered here */}
        <div className="mt-4 text-center text-gray-500">Organogram coming soon...</div>
      </div>
    </div>
  );
};

export default Step6;
