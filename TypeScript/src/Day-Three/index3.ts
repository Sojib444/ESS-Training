type Role = 'Admin' | 'Editor' | 'Viewer';
type Action = 'create' | 'read' | 'update' | 'delete';
type Resource = 'document' | 'user' | 'settings';

type Permissions = {
  [R in Resource]: {
    [A in Action]?: boolean;
  };
};

const rolePermissions: Record<Role, Permissions> = {
  Admin: {
    document: { create: true, read: true, update: true, delete: true },
    user: { create: true, read: true, update: true, delete: true },
    settings: { read: true, update: true },
  },
  Editor: {
    document: { create: true, read: true, update: true },
    user: { read: true },
    settings: { read: true },
  },
  Viewer: {
    document: { read: true },
    user: {},
    settings: {},
  },
};

function canPerform(role: Role, resource: Resource, action: Action): boolean {
  const permissions = rolePermissions[role];
  return !!permissions[resource]?.[action];
}

const role: Role = 'Editor';
console.log(canPerform(role, 'document', 'create')); // true
console.log(canPerform(role, 'document', 'delete')); // false
console.log(canPerform(role, 'user', 'update')); // false

function performAction<T extends Role, R extends Resource, A extends Action>(
  role: T,
  resource: R,
  action: A
) {
  if (canPerform(role, resource, action)) {
    console.log(`${role} can ${action} ${resource}`);
  } else {
    console.log(`${role} cannot ${action} ${resource}`);
  }
}

performAction('Admin', 'settings', 'update'); 
performAction('Viewer', 'document', 'update'); 


export{};
