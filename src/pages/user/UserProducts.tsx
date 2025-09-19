import { useEffect, useState } from "react"
import { getAllProducts } from "@/api/api"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { CartItem, Product } from "@/types"



const CART_KEY = "cart"

const UserProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        const data = res?.data ?? []
        setProducts(Array.isArray(data) ? data : [])
      })
      .catch(() => setProducts([]))
  }, [])

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        setCartItems(Array.isArray(parsed) ? parsed : [])
      }
    } catch {
      setCartItems([])
    }
  }, [])

  const handleAddToCart = (product: Product) => {
    const currentCart = [...cartItems]
    const idx = currentCart.findIndex((p) => p.id === product._id)

    let next: CartItem[]
    if (idx !== -1) {
      next = currentCart.map((p, i) =>
        i === idx ? { ...p, qty: p.qty + 1 } : p
      )
    } else {
      const item: CartItem = {
        id: product._id,
        name: product.name,
        price: product.price,
        qty: 1,
      }
      next = [...currentCart, item]
    }

    setCartItems(next)
    localStorage.setItem(CART_KEY, JSON.stringify(next))
    window.dispatchEvent(new CustomEvent("cart-updated", { detail: next }))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <Card key={product._id} className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl">{product.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
            )}
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="mt-2 font-semibold text-lg">₹{product.price}</p>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-violet-600 hover:bg-violet-500"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default UserProducts
