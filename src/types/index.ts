

type AdminProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    tags: string,
    price: number,
    stock: number
}

type AddProductType = {
    name: string,
    description: string,
    category: string,
    tags: string,
    price: number,
    stock: number
}

type AdminUserType = {
    id: string
    name: string
    email: string
    password: string
    street: string
    city: string
    zip: string
    roles: "ADMIN" | "USER"
}
type OrderType = {
    id: string
    userId: string
    products: Record<string, number>
    totalAmount: number
    status: "PENDING" | "SHIPPED" | "CANCELLED" | "DELIVERED"
    createdAt: string
}
export type { AdminProductType, AddProductType, AdminUserType, OrderType }

//   "id": "string",
//   "name": "string",
//   "description": "string",
//   "category": "string",
//   "tags": "string",
//   "price": 0,
//   "stock": 0