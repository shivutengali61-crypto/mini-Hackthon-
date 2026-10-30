/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  problemSolved: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  previewType: 'roadsafe' | 'bus' | 'portfolio';
  keyFeatures: string[];
  architecture: string[];
  metrics: string;
}

export type SkillCategory = 
  | 'Programming Languages'
  | 'Frontend Development'
  | 'Backend Development'
  | 'Database Management'
  | 'Developer Tools'
  | 'AI and Machine Learning Fundamentals';

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  experience: string;
  category: SkillCategory;
  description: string;
  tools: string[];
}

export interface AcademicRecord {
  id: string;
  institution: string;
  degree: string;
  department: string;
  university: string;
  currentStatus: string;
  cgpaOrPercentage: string;
  location: string;
  period: string;
  academicAchievements: string[];
  previousEducation: {
    level: string;
    institution: string;
    boardOrUniversity: string;
    score: string;
    year: string;
  }[];
  keyCourses: string[];
}

export interface ExperienceRecord {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  status: 'Completed' | 'Ongoing';
  type: 'Internship' | 'Practical Experience' | 'Academic Leadership' | 'Ongoing Learning' | 'Self-Directed / Ongoing';
  summary: string;
  contributions: string[];
  technologies: string[];
}

export interface AchievementRecord {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: 'Hackathon' | 'Certification' | 'Coding Milestone' | 'Academic Honor';
  credentialId?: string;
  verificationUrl?: string;
  summary: string;
  impact: string;
}
