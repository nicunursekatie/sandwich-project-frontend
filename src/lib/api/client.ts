// Mock API client for development
// Replace with actual API calls when backend is deployed

import type { 
  User, 
  Host, 
  Recipient, 
  Driver, 
  Project, 
  Meeting, 
  Message,
  SandwichCollection,
  WeeklyReport,
  DriveLink,
  InsertProject,
  InsertMeeting 
} from '@shared/schema';

// Mock data for development
const mockUser: User = {
  id: 1,
  email: 'admin@sandwichproject.org',
  name: 'Admin User',
  role: 'admin',
  permissions: [
    'view_hosts',
    'view_recipients', 
    'view_drivers',
    'edit_data',
    'delete_data',
    'view_meetings',
    'view_analytics',
    'view_reports',
    'view_projects',
    'view_committee',
    'manage_users',
    'system_admin',
    'send_messages',
    'moderate_messages'
  ],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Summer Food Safety Training',
    description: 'Implement comprehensive food safety training for all volunteers',
    status: 'active',
    priority: 'high',
    due_date: '2025-08-01',
    assigned_to: 1,
    category: 'Training',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Volunteer Recruitment Drive',
    description: 'Increase volunteer base by 25% before fall season',
    status: 'planning',
    priority: 'medium',
    due_date: '2025-09-15',
    assigned_to: 1,
    category: 'Recruitment',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// Mock API functions
export const api = {
  // Auth
  getCurrentUser: (): Promise<User> => 
    Promise.resolve(mockUser),
  
  login: (email: string, password: string): Promise<{ user: User; token: string }> =>
    Promise.resolve({ user: mockUser, token: 'mock-jwt-token' }),
    
  logout: (): Promise<void> => 
    Promise.resolve(),

  // Projects
  getProjects: (): Promise<Project[]> => 
    Promise.resolve(mockProjects),
    
  getProject: (id: number): Promise<Project | null> =>
    Promise.resolve(mockProjects.find(p => p.id === id) || null),
    
  createProject: (data: InsertProject): Promise<Project> => {
    const newProject: Project = {
      id: Math.max(...mockProjects.map(p => p.id)) + 1,
      ...data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    mockProjects.push(newProject);
    return Promise.resolve(newProject);
  },

  updateProject: (id: number, data: Partial<Project>): Promise<Project | null> => {
    const index = mockProjects.findIndex(p => p.id === id);
    if (index === -1) return Promise.resolve(null);
    
    mockProjects[index] = { 
      ...mockProjects[index], 
      ...data, 
      updated_at: new Date().toISOString() 
    };
    return Promise.resolve(mockProjects[index]);
  },

  deleteProject: (id: number): Promise<boolean> => {
    const index = mockProjects.findIndex(p => p.id === id);
    if (index === -1) return Promise.resolve(false);
    
    mockProjects.splice(index, 1);
    return Promise.resolve(true);
  },

  // Hosts
  getHosts: (): Promise<Host[]> => 
    Promise.resolve([]),
    
  // Recipients  
  getRecipients: (): Promise<Recipient[]> => 
    Promise.resolve([]),
    
  // Drivers
  getDrivers: (): Promise<Driver[]> => 
    Promise.resolve([]),
    
  // Meetings
  getMeetings: (): Promise<Meeting[]> => 
    Promise.resolve([]),
    
  // Messages
  getMessages: (): Promise<Message[]> => 
    Promise.resolve([]),
    
  // Collections
  getCollections: (): Promise<SandwichCollection[]> => 
    Promise.resolve([]),
    
  // Reports
  getWeeklyReports: (): Promise<WeeklyReport[]> => 
    Promise.resolve([]),
    
  // Drive Links
  getDriveLinks: (): Promise<DriveLink[]> => 
    Promise.resolve([]),
};

// Environment-based API client
const isProduction = import.meta.env.PROD;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

export const apiClient = {
  async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    if (!isProduction) {
      // In development, use mock API
      console.log(`Mock API call: ${endpoint}`);
      // You can implement mock responses here based on endpoint
      return {} as T;
    }
    
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      credentials: 'include',
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return response.json();
  },
  
  get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint);
  },
  
  post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  },
  
  put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  },
  
  delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    });
  },
};
