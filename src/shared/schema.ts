import { z } from 'zod';

// Base schemas
export const insertUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  role: z.string(),
  permissions: z.array(z.string()),
});

export const insertHostSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  zip: z.string().min(1),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  active: z.boolean().default(true),
  notes: z.string().optional(),
});

export const insertHostContactSchema = z.object({
  hostId: z.number(),
  name: z.string().min(1),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  relationship: z.string().optional(),
});

export const insertRecipientSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  zip: z.string().min(1),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  dietaryRestrictions: z.string().optional(),
  active: z.boolean().default(true),
  notes: z.string().optional(),
});

export const insertContactSchema = z.object({
  recipientId: z.number(),
  name: z.string().min(1),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  relationship: z.string().optional(),
});

export const insertDriverSchema = z.object({
  name: z.string().min(1),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  active: z.boolean().default(true),
  notes: z.string().optional(),
});

export const insertProjectSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  status: z.enum(['planning', 'active', 'completed', 'on-hold']).default('planning'),
  priority: z.enum(['low', 'medium', 'high']).default('medium'),
  due_date: z.string().optional(),
  assigned_to: z.number().optional(),
  category: z.string().optional(),
});

export const insertMeetingSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  date: z.string(),
  time: z.string(),
  location: z.string().optional(),
  type: z.enum(['board', 'committee', 'volunteer', 'training']).default('board'),
  status: z.enum(['scheduled', 'in-progress', 'completed', 'cancelled']).default('scheduled'),
});

// Type definitions
export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  permissions: string[];
  created_at: string;
  updated_at: string;
}

export interface Host {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone?: string;
  email?: string;
  active: boolean;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface HostContact {
  id: number;
  hostId: number;
  name: string;
  phone?: string;
  email?: string;
  relationship?: string;
  created_at: string;
  updated_at: string;
}

export interface Recipient {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone?: string;
  email?: string;
  dietaryRestrictions?: string;
  active: boolean;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: number;
  recipientId: number;
  name: string;
  phone?: string;
  email?: string;
  relationship?: string;
  created_at: string;
  updated_at: string;
}

export interface Driver {
  id: number;
  name: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  active: boolean;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: number;
  title: string;
  description?: string;
  status: 'planning' | 'active' | 'completed' | 'on-hold';
  priority: 'low' | 'medium' | 'high';
  due_date?: string;
  assigned_to?: number;
  category?: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectTask {
  id: number;
  projectId: number;
  title: string;
  description?: string;
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo?: number;
  dueDate?: string;
  created_at: string;
  updated_at: string;
}

export interface Meeting {
  id: number;
  title: string;
  description?: string;
  date: string;
  time: string;
  location?: string;
  type: 'board' | 'committee' | 'volunteer' | 'training';
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface MeetingMinutes {
  id: number;
  meetingId: number;
  content: string;
  attachments?: string[];
  created_at: string;
  updated_at: string;
}

export interface Message {
  id: number;
  senderId: number;
  recipientId?: number;
  content: string;
  type: 'general' | 'committee' | 'host' | 'driver' | 'recipient';
  priority: 'low' | 'medium' | 'high';
  read: boolean;
  created_at: string;
  updated_at: string;
}

export interface SandwichCollection {
  id: number;
  date: string;
  location: string;
  quantity: number;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface WeeklyReport {
  id: number;
  week_start: string;
  week_end: string;
  total_sandwiches: number;
  total_hosts: number;
  total_recipients: number;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface DriveLink {
  id: number;
  title: string;
  url: string;
  category: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

// Insert types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertHost = z.infer<typeof insertHostSchema>;
export type InsertHostContact = z.infer<typeof insertHostContactSchema>;
export type InsertRecipient = z.infer<typeof insertRecipientSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type InsertDriver = z.infer<typeof insertDriverSchema>;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertMeeting = z.infer<typeof insertMeetingSchema>;
