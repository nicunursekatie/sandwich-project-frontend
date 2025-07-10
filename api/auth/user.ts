// Mock user data for development
const mockUser = {
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

export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // In development, return mock user
    if (process.env.NODE_ENV === 'development') {
      return res.status(200).json(mockUser);
    }

    // In production, you would:
    // 1. Check session/JWT token
    // 2. Query database for user
    // 3. Return user data or 401 if not authenticated

    // For now, return mock user in production too
    // TODO: Replace with actual authentication logic
    return res.status(200).json(mockUser);
    
  } catch (error) {
    console.error('Auth error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
