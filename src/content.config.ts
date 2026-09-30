/**
 * Content Collections Config — JaviLesacaPro Portfolio
 * Defines schema, validation, and TypeScript types for all content.
 * Uses Zod for runtime validation + inferred TS types.
 */

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

/* ============================================================
 * PROJECTS COLLECTION
 * ============================================================ */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  // NOTE: projects_en mirrors the same schema; source of truth is ES.
  // Other locales reuse ES content until their MDX is translated.
  schema: ({ image }) => z.object({
    title: z.string().max(100),
    description: z.string().max(500),
    shortDescription: z.string().max(200),
    techStack: z.array(z.string()).min(1).max(10),
    role: z.enum(['Backend', 'Frontend', 'Fullstack', 'DevOps', 'Mobile']),
    status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
    featured: z.boolean().default(false),
    startDate: z.string().date(),           // ISO date string
    endDate: z.string().date().optional(),
    repoUrl: z.string().url(),
    demoUrl: z.string().url().optional(),
    image: image(),                          // optimized via astro:assets
    imageAlt: z.string().min(10).max(150),
    challenges: z.array(z.string()).min(1).max(6),
    learnings: z.array(z.string()).min(1).max(6),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
  }),
});

const projects_en = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects_en' }),
  schema: ({ image }) => z.object({
    title: z.string().max(100),
    description: z.string().max(500),
    shortDescription: z.string().max(200),
    techStack: z.array(z.string()).min(1).max(10),
    role: z.enum(['Backend', 'Frontend', 'Fullstack', 'DevOps', 'Mobile']),
    status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
    featured: z.boolean().default(false),
    startDate: z.string().date(),
    endDate: z.string().date().optional(),
    repoUrl: z.string().url(),
    demoUrl: z.string().url().optional(),
    image: image(),
    imageAlt: z.string().min(10).max(150),
    challenges: z.array(z.string()).min(1).max(6),
    learnings: z.array(z.string()).min(1).max(6),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
  }),
});

const projects_pt = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects_pt' }),
  schema: ({ image }) => z.object({
    title: z.string().max(100),
    description: z.string().max(500),
    shortDescription: z.string().max(200),
    techStack: z.array(z.string()).min(1).max(10),
    role: z.enum(['Backend', 'Frontend', 'Fullstack', 'DevOps', 'Mobile']),
    status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
    featured: z.boolean().default(false),
    startDate: z.string().date(),
    endDate: z.string().date().optional(),
    repoUrl: z.string().url(),
    demoUrl: z.string().url().optional(),
    image: image(),
    imageAlt: z.string().min(10).max(150),
    challenges: z.array(z.string()).min(1).max(6),
    learnings: z.array(z.string()).min(1).max(6),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
  }),
});

const projects_de = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects_de' }),
  schema: ({ image }) => z.object({
    title: z.string().max(100),
    description: z.string().max(500),
    shortDescription: z.string().max(200),
    techStack: z.array(z.string()).min(1).max(10),
    role: z.enum(['Backend', 'Frontend', 'Fullstack', 'DevOps', 'Mobile']),
    status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
    featured: z.boolean().default(false),
    startDate: z.string().date(),
    endDate: z.string().date().optional(),
    repoUrl: z.string().url(),
    demoUrl: z.string().url().optional(),
    image: image(),
    imageAlt: z.string().min(10).max(150),
    challenges: z.array(z.string()).min(1).max(6),
    learnings: z.array(z.string()).min(1).max(6),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
  }),
});

const projects_fr = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects_fr' }),
  schema: ({ image }) => z.object({
    title: z.string().max(100),
    description: z.string().max(500),
    shortDescription: z.string().max(200),
    techStack: z.array(z.string()).min(1).max(10),
    role: z.enum(['Backend', 'Frontend', 'Fullstack', 'DevOps', 'Mobile']),
    status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
    featured: z.boolean().default(false),
    startDate: z.string().date(),
    endDate: z.string().date().optional(),
    repoUrl: z.string().url(),
    demoUrl: z.string().url().optional(),
    image: image(),
    imageAlt: z.string().min(10).max(150),
    challenges: z.array(z.string()).min(1).max(6),
    learnings: z.array(z.string()).min(1).max(6),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
  }),
});

/* ============================================================
 * BLOG COLLECTION (future)
 * ============================================================ */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(120),
    description: z.string().max(300),
    publishDate: z.string().date(),
    updateDate: z.string().date().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    readingTime: z.string().optional(),
  }),
});

/* ============================================================
 * EXPORTS
 * ============================================================ */
export const collections = { projects, projects_en, projects_fr, projects_de, projects_pt, blog };

/* ============================================================
 * TYPE HELPERS — Infer types from schemas
 * ============================================================ */
export type ProjectEntry = typeof projects.schema;
export type BlogEntry = typeof blog.schema;

// Type for getCollection() results
export interface ProjectData {
  id: string;
  slug: string;
  data: z.infer<ProjectEntry>;
  body: string;
}

export interface BlogData {
  id: string;
  slug: string;
  data: z.infer<BlogEntry>;
  body: string;
}