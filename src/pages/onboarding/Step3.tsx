
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import ToolSelection from './ToolSelection';

interface Step3Props {
  nextStep: () => void;
  prevStep: () => void;
}

const workTools = [
  { name: 'Linear', icon: 'linear' },
  { name: 'Jira', icon: 'jira' },
  { name: 'Github', icon: 'github' },
  { name: 'Gitlab', icon: 'gitlab' },
  { name: 'Notion', icon: 'notion' },
  { name: 'Asana', icon: 'asana' },
];

const knowledgeTools = [
  { name: 'Notion', icon: 'notion' },
  { name: 'Confluence', icon: 'confluence' },
];

const communicationTools = [
  { name: 'Slack', icon: 'slack' },
  { name: 'Teams', icon: 'teams' },
];

const Step3: React.FC<Step3Props> = ({ nextStep, prevStep }) => {
  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-blue-200">Setup Your Team Personal Assistant</CardTitle>
        <CardDescription>Customize your PA to fit your team's workflow.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="pa-name" className="block text-sm font-medium text-gray-700 mb-1">Personal Assistant Name</label>
              <Input id="pa-name" placeholder="e.g. Product Helper" />
            </div>
            <div>
              <label htmlFor="pa-handle" className="block text-sm font-medium text-gray-700 mb-1">Personal Assistant Handle</label>
              <Input id="pa-handle" placeholder="@product" />
            </div>
          </div>
          
          <ToolSelection 
            title="What tools does your team use for work?"
            tools={workTools}
            onSelectionChange={() => {}}
          />

          <ToolSelection
            title="Where is team knowledge/documentation managed?"
            tools={knowledgeTools}
            onSelectionChange={() => {}}
          />

          <ToolSelection
            title="How do you communicate?"
            tools={communicationTools}
            onSelectionChange={() => {}}
          />

          <div className="flex justify-between pt-4">
            <Button onClick={prevStep} variant="outline">Back</Button>
            <Button onClick={nextStep} className="bg-blue-100 hover:bg-blue-100/90 text-white">Continue</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Step3;
