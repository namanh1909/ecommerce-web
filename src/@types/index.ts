type ApiResponse<T> = Promise<{ success: boolean; data: T; status: number; statusText: string }>;
type ApiMessageResponse = Promise<{ success: boolean; message: string; status: number; statusText: string }>;

 type Product = {
    id: string;
    thumbnail: string;
    name: string;
    type: string;
    sku: string;
    qty: number;
    status: string;
    description: string;
    price: number;
  };