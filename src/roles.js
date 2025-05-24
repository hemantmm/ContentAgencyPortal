export const roles = {
  admin: [
    { action: '*', resource: '*' },
  ],
  contentStrategist: [
    { action: 'manage', resource: 'projects' },
    { action: 'read', resource: 'clients' },
  ],
  editor: [
    { action: 'review', resource: 'content' },
    { action: 'approve', resource: 'content' },
  ],
  writer: [
    { action: 'create', resource: 'content' },
    { action: 'edit', resource: 'content' },
  ],
};
