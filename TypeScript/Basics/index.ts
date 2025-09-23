// ===== Basic Types =====
let userName: string = "Alice";
let userAge: number = 25;
let isActive: boolean = true;
let something: any = "Could be anything";
let notSure: unknown = 42;
let nullable: null = null;
let undef: undefined = undefined;

// ===== Enum =====
enum UserRole {
  Admin = "ADMIN",
  Manager = "MANAGER",
  Customer = "CUSTOMER"
}

// ===== Interface =====
interface BaseUser {
  id: number;
  name: string;
  role: UserRole;
}

// ===== Type Alias =====
type Email = string;
type Phone = string;

// Union type: User can have either Email or Phone as contact
type ContactInfo = Email | Phone;

// Intersection type: Employee must be a User + extra fields
type Employee = BaseUser & {
  department: string;
  salary: number;
};

// ===== Class using Interface and Types =====
class Person implements BaseUser {
  constructor(
    public id: number,
    public name: string,
    public role: UserRole,
    private contact: ContactInfo
  ) {}

  // Method demonstrating union narrowing
  getContact(): string {
    if (this.contact.includes("@")) {
      return `Email: ${this.contact}`;
    } else {
      return `Phone: ${this.contact}`;
    }
  }
}

// ===== Another Class Extending =====
class Staff extends Person implements Employee {
  constructor(
    id: number,
    name: string,
    role: UserRole,
    contact: ContactInfo,
    public department: string,
    public salary: number
  ) {
    super(id, name, role, contact);
  }

  describe(): string {
    return `${this.name} (${this.role}) works in ${this.department} with salary $${this.salary}`;
  }
}

// ===== Usage =====
const admin = new Staff(
  1,
  "Alice",
  UserRole.Admin,
  "alice@example.com",
  "IT",
  90000
);

console.log(admin.describe());
console.log(admin.getContact());





