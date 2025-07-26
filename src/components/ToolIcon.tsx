
import React from 'react';

// Import individual icons
import { ReactComponent as SlackLogo } from '../assets/icons/slack.svg';
import { ReactComponent as GmailLogo } from '../assets/icons/gmail.svg';
import { ReactComponent as OutlookLogo } from '../assets/icons/outlook.svg';
import { ReactComponent as NotionLogo } from '../assets/icons/notion.svg';
import { ReactComponent as JiraLogo } from '../assets/icons/jira.svg';
import { ReactComponent as GithubLogo } from '../assets/icons/github.svg';
import { ReactComponent as GitlabLogo } from '../assets/icons/gitlab.svg';
import { ReactComponent as AsanaLogo } from '../assets/icons/asana.svg';
import { ReactComponent as ConfluenceLogo } from '../assets/icons/confluence.svg';
import { ReactComponent as LinearLogo } from '../assets/icons/linear.svg';
import { ReactComponent as TeamsLogo } from '../assets/icons/teams.svg';

interface ToolIconProps {
  tool: string;
  className?: string;
}

const iconMap: { [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>> } = {
  slack: SlackLogo,
  gmail: GmailLogo,
  outlook: OutlookLogo,
  notion: NotionLogo,
  jira: JiraLogo,
  github: GithubLogo,
  gitlab: GitlabLogo,
  asana: AsanaLogo,
  confluence: ConfluenceLogo,
  linear: LinearLogo,
  teams: TeamsLogo,
};

const ToolIcon: React.FC<ToolIconProps> = ({ tool, className }) => {
  const Icon = iconMap[tool.toLowerCase()];

  if (!Icon) {
    return null;
  }

  return <Icon className={className} />;
};

export default ToolIcon;
