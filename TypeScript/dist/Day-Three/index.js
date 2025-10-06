"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchApi(url) {
    try {
        const res = await fetch(url);
        if (!res.ok)
            throw new Error('Network error');
        const data = await res.json();
        return { success: true, data };
    }
    catch (error) {
        return { success: false, error: error.message };
    }
}
function normalizeResponse(response) {
    if (response.success && response.data) {
        return { ...response, success: true, data: response.data };
    }
    return { success: false, data: null, error: response.error || 'Unknown error' };
}
async function getUser(userId) {
    const response = await fetchApi(`https://api.example.com/users/${userId}`);
    return normalizeResponse(response);
}
async function getProduct(productId) {
    const response = await fetchApi(`https://api.example.com/products/${productId}`);
    return normalizeResponse(response);
}
async function main() {
    const userResp = await getUser('123');
    if (userResp.success) {
        console.log('User name:', userResp.data?.name); // ✅ Safe access
    }
    else {
        console.error('Error fetching user:', userResp.error);
    }
    const productResp = await getProduct('456');
    if (productResp.success) {
        console.log('Product price:', productResp.data?.price); // ✅ Safe access
    }
    else {
        console.error('Error fetching product:', productResp.error);
    }
}
main();
//# sourceMappingURL=index.js.map