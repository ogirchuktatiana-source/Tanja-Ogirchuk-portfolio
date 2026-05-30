/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Theme = 'light' | 'dark';

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  context: string;
  details?: string[];
  type: 'education' | 'experience' | 'pivot';
}

export interface Project {
  id: string;
  title: string;
  role: string;
  image?: string;
  images: string[];
  impact: string;
  tags: string[];
  metrics?: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
  native?: boolean;
}

export interface Recommendation {
  id: string;
  author: string;
  role: string;
  company: string;
  period: string;
  relationship: string;
  category: 'product-management' | 'engineering-tech';
  text: string;
  tags: string[];
  linkedin?: string;
}

