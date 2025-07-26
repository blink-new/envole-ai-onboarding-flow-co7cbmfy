
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// We will create this component next
// import ToolIcon from './ToolIcon'; 

interface Tool {
  name: string;
  icon: string;
}

interface ToolSelectionProps {
  title: string;
  tools: Tool[];
  onSelectionChange: (selected: string[]) => void;
}

const ToolSelection: React.FC<ToolSelectionProps> = ({ title, tools, onSelectionChange }) => {
  const [selectedTools, setSelectedTools] = useState<string[]>([]);

  const toggleTool = (toolName: string) => {
    const newSelection = selectedTools.includes(toolName)
      ? selectedTools.filter(t => t !== toolName)
      : [...selectedTools, toolName];
    setSelectedTools(newSelection);
    onSelectionChange(newSelection);
  };

  return (
    <div>
      <h3 className="text-md font-medium text-gray-700 mb-2">{title}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {tools.map(tool => (
          <div
            key={tool.name}
            onClick={() => toggleTool(tool.name)}
            className={`cursor-pointer border-2 rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-200 ${
              selectedTools.includes(tool.name)
                ? 'border-blue-100 bg-blue-100/10'
                : 'border-gray-200 hover:border-gray-300'
            }`}>
            {/* <ToolIcon tool={tool.icon} className="h-8 w-8 mb-2" /> */}
            <img src={`/src/assets/icons/${tool.icon}.svg`} alt={tool.name} className="h-8 w-8 mb-2" />
            <span className="text-sm text-center">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolSelection;
