import { NavLink, useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { Power, ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const UserTopBar = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState<string>("")
  const [cartItems, setCartItems] = useState<any[]>([])

 
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser)
        setUserName(user.name || "")
      } catch (err) {
        console.error("Invalid user data in localStorage", err)
      }
    }

    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart))
      } catch (err) {
        console.error("Invalid cart data in localStorage", err)
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/")
  }

  const handleCheckout = () => {
    navigate("/user/checkout")
  }

  return (
    <div className="h-14 w-svw text-primary bg-white 
      flex justify-center items-center border-b border-violet-600 shadow-sm
      shadow-purple-600 px-4">
      
      <div className="w-[50%] h-full flex flex-row justify-start items-center gap-4">
        <NavLink to="/user/products" className="h-full flex justify-center items-center font-bold text-xl px-3">Products</NavLink>
        <NavLink to="/user/orders" className="h-full flex justify-center items-center font-bold text-xl px-3">Orders</NavLink>
        <NavLink to="/user/profile" className="h-full flex justify-center items-center font-bold text-xl px-3">Profile</NavLink>
      </div>


      <div className="w-[50%] h-full flex flex-row justify-end items-center gap-4">
        {userName && <span className="font-semibold text-lg">{userName}</span>}

   
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost" className="relative">
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b pb-1"
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="text-sm text-gray-600">x{item.qty || 1}</span>
                  </div>
                ))
              ) : (
                <span className="text-gray-500">Cart is empty</span>
              )}
            </div>
            {cartItems.length > 0 && (
              <Button
                className="w-full mt-2 bg-violet-600 hover:bg-violet-500"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            )}
          </HoverCardContent>
        </HoverCard>


        <Button
          className="bg-red-500 hover:bg-red-400 cursor-pointer"
          onClick={handleLogout}
        >
          <Power />
        </Button>
      </div>
    </div>
  )
}

export default UserTopBar
