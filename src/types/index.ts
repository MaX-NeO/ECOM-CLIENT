

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

export type { AdminProductType, AddProductType, AdminUserType }

//   "id": "string",
//   "name": "string",
//   "description": "string",
//   "category": "string",
//   "tags": "string",
//   "price": 0,
//   "stock": 0