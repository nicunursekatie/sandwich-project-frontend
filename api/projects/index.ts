// Mock projects data
const mockProjects = [
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

export default function handler(req: any, res: any) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return res.status(200).json(mockProjects);
    
    case 'POST':
      // In a real implementation, you would:
      // 1. Validate input
      // 2. Save to database
      // 3. Return created project
      const newProject = {
        id: mockProjects.length + 1,
        ...req.body,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      mockProjects.push(newProject);
      return res.status(201).json(newProject);
    
    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
}
