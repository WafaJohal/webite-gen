export enum PublicationType {
  JOURNAL = 'Journal',
  CONFERENCE = 'Conference',
  WORKSHOP = 'Workshop',
  THESIS = 'Thesis'
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: PublicationType;
  doi?: string;
  pdfUrl?: string;
  abstract?: string;
  tags?: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  active: boolean;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  role: string;
  period: string;
  institution: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string; // Lucide icon name
}