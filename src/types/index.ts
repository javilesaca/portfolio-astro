/**
 * Type Definitions — JaviLesacaPro Portfolio
 * Centralized types for content collections, components, and utilities.
 */

import type { ImageMetadata } from 'astro';

/* ============================================================
 * PROJECT — Content Collection Schema
 * ============================================================ */
export interface ProjectFrontmatter {
  title: string;
  description: string;
  shortDescription: string;
  techStack: string[];
  role: 'Backend' | 'Frontend' | 'Fullstack' | 'DevOps' | 'Mobile';
  status: 'completed' | 'in-progress' | 'archived';
  featured: boolean;
  startDate: string;        // ISO date
  endDate?: string;         // ISO date, optional if in-progress
  repoUrl: string;
  demoUrl?: string;
  image: ImageMetadata;     // Astro Image (processed at build)
  imageAlt: string;
  challenges: string[];
  learnings: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  readingTime?: string;
}

/* ============================================================
 * NAVIGATION
 * ============================================================ */
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

/* ============================================================
 * SOCIAL LINKS
 * ============================================================ */
export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email' | 'twitter' | 'custom';
  ariaLabel: string;
}

/* ============================================================
 * SITE CONFIG
 * ============================================================ */
export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: {
    name: string;
    title: string;
    location: string;
    email: string;
  };
  social: SocialLink[];
  navigation: NavItem[];
}

/* ============================================================
 * SEO / JSON-LD
 * ============================================================ */
export interface JsonLdPerson {
  '@context': 'https://schema.org';
  '@type': 'Person';
  name: string;
  jobTitle: string;
  url: string;
  image: string;
  sameAs: string[];
  knowsAbout: string[];
  address: {
    '@type': 'PostalAddress';
    addressLocality: string;
    addressCountry: string;
  };
}

export interface JsonLdWebSite {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  url: string;
  potentialAction: {
    '@type': 'SearchAction';
    target: {
      '@type': 'EntryPoint';
      urlTemplate: string;
    };
    'query-input': string;
  };
}

export interface JsonLdProject {
  '@context': 'https://schema.org';
  '@type': 'Project';
  name: string;
  description: string;
  url: string;
  image: string;
  dateCreated: string;
  datePublished?: string;
  author: {
    '@type': 'Person';
    name: string;
  };
  programmingLanguage: string[];
  codeRepository: string;
}

/* ============================================================
 * COMPONENT PROPS
 * ============================================================ */
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  'aria-label'?: string;
}

export interface CardProps {
  class?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured' | 'compact';
}

export interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  class?: string;
  'aria-labelledby'?: string;
}

/* ============================================================
 * FORM
 * ============================================================ */
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select';
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    custom?: (value: string) => string | undefined;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;  // anti-spam
}