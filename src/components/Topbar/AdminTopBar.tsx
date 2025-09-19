import { NavLink } from "react-router-dom"

const AdminTopBar = () => {
    return (
        <div className="h-14 w-svw  text-primary bg-white 
    flex justify-center items-center border-b  border-violet-600 shadow-sm
     shadow-purple-600 px-4">
            <div className="w-[50%] h-full flex flex-row justify-start items-center gap-6">
                <NavLink to='/admin/products' className='h-full flex justify-center items-center font-bold text-xl'> Products</NavLink>
                <NavLink to='/admin/users' className='h-full flex justify-center items-center font-bold text-xl'> Users</NavLink>
                <NavLink to='/admin/orders' className='h-full flex justify-center items-center font-bold text-xl'> Orders</NavLink>
            </div>
            <div className="w-[50%] h-full flex flex-row justify-end items-center">

            </div>
        </div>
    )
}

export default AdminTopBar