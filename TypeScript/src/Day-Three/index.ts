// Base API response type
type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

// User endpoint
type User = {
  id: string;
  name: string;
  email: string;
};

// Product endpoint
type Product = {
  id: string;
  title: string;
  price: number;
};

type NormalizedResponse<T> = ApiResponse<T> & {
  data: T; // always defined
  success: true;
};


async function fetchApi<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Network error');

    const data: T = await res.json();
    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}


function normalizeResponse<T>(response: ApiResponse<T>): NormalizedResponse<T> | ApiResponse<null> {
  if (response.success && response.data) {
    return { ...response, success: true, data: response.data };
  }
  return { success: false, data: null, error: response.error || 'Unknown error' };
}

async function getUser(userId: string) {
  const response = await fetchApi<User>(`https://api.example.com/users/${userId}`);
  return normalizeResponse(response);
}

async function getProduct(productId: string) {
  const response = await fetchApi<Product>(`https://api.example.com/products/${productId}`);
  return normalizeResponse(response);
}


async function main() {
  const userResp = await getUser('123');
  if (userResp.success) {
    console.log('User name:', userResp.data?.name); // ✅ Safe access
  } else {
    console.error('Error fetching user:', userResp.error);
  }

  const productResp = await getProduct('456');
  if (productResp.success) {
    console.log('Product price:', productResp.data?.price); // ✅ Safe access
  } else {
    console.error('Error fetching product:', productResp.error);
  }
}

main();

export{};