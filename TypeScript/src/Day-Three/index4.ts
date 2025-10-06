type CacheItem<T> = {
  value: T;
  expiry: number; // timestamp when it expires
};

class APICache {
  private cache = new Map<string, CacheItem<any>>();

  set<T>(key: string, value: T, ttl: number) {
    const expiry = Date.now() + ttl;
    this.cache.set(key, { value, expiry });
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    if (!item) return null;
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }
    return item.value as T;
  }

  clear() {
    this.cache.clear();
  }
}


const apiCache = new APICache();

async function fetchWithCache<T>(url: string, ttl = 60000): Promise<T> {
  const cached = apiCache.get<T>(url);
  if (cached) return cached;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Network error');
  const data: T = await res.json();

  apiCache.set(url, data, ttl);
  return data;
}

type User = { id: string; name: string; email: string };
type Product = { id: string; title: string; price: number };

async function main() {
  const user = await fetchWithCache<User>('https://api.example.com/user/123', 30000);
  console.log('User:', user.name);

  const product = await fetchWithCache<Product>('https://api.example.com/product/456', 60000);
  console.log('Product:', product.title);

  // Second call to same endpoint returns cached data instantly
  const cachedUser = await fetchWithCache<User>('https://api.example.com/user/123');
  console.log('Cached User:', cachedUser.name);
}

main();

export{};
