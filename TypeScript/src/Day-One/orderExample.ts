// --- Complex TypeScript Example 2 ---

// 1. Enum
const enum OrderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED",
}

// 2. Type Alias with generic constraint
type ID = string | number;

// 3. Base interface
interface Product {
  id: ID;
  name: string;
  price: number;
}

// 4. Discriminated union for payment methods
type Payment =
  | { type: "Cash"; received: boolean }
  | { type: "Card"; cardNumber: string; provider: "Visa" | "MasterCard" }
  | { type: "Paypal"; email: string };

// 5. Order interface with generics
interface Order<TProduct extends Product> {
  id: ID;
  items: TProduct[];
  status: OrderStatus;
  payment: Payment;
  createdAt: Date;
}

// 6. Utility types
type OrderSummary = Pick<Order<Product>, "id" | "status" | "createdAt">;
type ReadonlyOrder = Readonly<Order<Product>>;
type OptionalProduct = Partial<Product>;

// 7. Mapped type: mark all properties as nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// Example: Nullable Product
type NullableProduct = Nullable<Product>;

// 8. Generic Repository Class
interface Repository<T> {
  add(item: T): void;
  getById(id: ID): T | undefined;
  getAll(): T[];
}

class InMemoryRepository<T extends { id: ID }> implements Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getById(id: ID): T | undefined {
    return this.items.find((x) => x.id === id);
  }

  getAll(): T[] {
    return [...this.items];
  }
}

// 9. Async function returning Promise<ApiResponse>
type ApiResponse<T> = { ok: true; data: T } | { ok: false; error: string };

async function fetchOrder(id: ID): Promise<ApiResponse<Order<Product>>> {
  // simulate async delay
  await new Promise((r) => setTimeout(r, 500));

  if (id === 1) {
    return {
      ok: true,
      data: {
        id: 1,
        items: [{ id: "p1", name: "Laptop", price: 1200 }],
        status: OrderStatus.Pending,
        payment: { type: "Cash", received: false },
        createdAt: new Date(),
      },
    };
  }
  return { ok: false, error: "Order not found" };
}

// --- Demo ---
async function demo() {
  const repo = new InMemoryRepository<Product>();

  repo.add({ id: "p1", name: "Laptop", price: 1200 });
  repo.add({ id: "p2", name: "Phone", price: 800 });

  console.log("All products:", repo.getAll());

  const orderResponse = await fetchOrder(1);
  if (orderResponse.ok) {
    console.log("Fetched order:", orderResponse.data);
  } else {
    console.error("Error:", orderResponse.error);
  }

  const nullableProduct: NullableProduct = {
    id: null,
    name: "Something",
    price: null,
  };
  console.log("Nullable product:", nullableProduct);
}

demo();

interface Person {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
  name: "Max",
  age: 27
};

printPersonProperty(person, "name"); // Printing person property name: "Max"