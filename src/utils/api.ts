import { Product, Order, OrderStatus } from '@prisma/client';

const API_BASE_URL = '/api';

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
}

export async function createProduct(product: Partial<Product>): Promise<Product> {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error('Failed to create product');
  return response.json();
}

export async function updateProduct(id: number, product: Partial<Product>): Promise<Product> {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error('Failed to update product');
  return response.json();
}

export async function deleteProduct(id: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete product');
}

export async function fetchOrders(): Promise<Order[]> {
  const response = await fetch(`${API_BASE_URL}/orders`);
  if (!response.ok) throw new Error('Failed to fetch orders');
  return response.json();
}

export async function updateOrderStatus(orderId: number, status: OrderStatus): Promise<Order> {
  const response = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  if (!response.ok) throw new Error('Failed to update order status');
  return response.json();
}