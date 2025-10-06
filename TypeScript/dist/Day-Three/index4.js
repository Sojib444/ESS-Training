"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class APICache {
    cache = new Map();
    set(key, value, ttl) {
        const expiry = Date.now() + ttl;
        this.cache.set(key, { value, expiry });
    }
    get(key) {
        const item = this.cache.get(key);
        if (!item)
            return null;
        if (Date.now() > item.expiry) {
            this.cache.delete(key);
            return null;
        }
        return item.value;
    }
    clear() {
        this.cache.clear();
    }
}
const apiCache = new APICache();
async function fetchWithCache(url, ttl = 60000) {
    const cached = apiCache.get(url);
    if (cached)
        return cached;
    const res = await fetch(url);
    if (!res.ok)
        throw new Error('Network error');
    const data = await res.json();
    apiCache.set(url, data, ttl);
    return data;
}
async function main() {
    const user = await fetchWithCache('https://api.example.com/user/123', 30000);
    console.log('User:', user.name);
    const product = await fetchWithCache('https://api.example.com/product/456', 60000);
    console.log('Product:', product.title);
    // Second call to same endpoint returns cached data instantly
    const cachedUser = await fetchWithCache('https://api.example.com/user/123');
    console.log('Cached User:', cachedUser.name);
}
main();
//# sourceMappingURL=index4.js.map