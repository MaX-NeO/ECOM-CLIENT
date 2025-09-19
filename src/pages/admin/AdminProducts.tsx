import { Button } from "@/components/ui/button"
import { Pencil, Plus, Trash2 } from "lucide-react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import { deleteProduct, getAllProducts } from "@/api/api"
import { toast } from "sonner"
import Loading from "@/components/Loading"
import type { AdminProductType } from "@/types"


const AdminProducts = () => {
    const [products, setProducts] = useState<AdminProductType[]>([])
    const [loading, setLoading] = useState(true)

    const fetchdata = async () => {
        try {
            const response = await getAllProducts()
            if (response.status === 200) {
                setProducts(response.data)
            }
        } catch (error) {
            toast.error("Error while fetching Products")
        } finally {
            setLoading(false)
        }
    }
    const handleDelete = async (id: string) => {
        try {
            const response = await deleteProduct(id)
            if (response.status === 200) {
                toast.success("Product Deleted !")
                fetchdata()
            }
        } catch (error) {
            toast.error("Error while fetching Products")
        }
    }
    useEffect(() => {
        fetchdata()
    }, [])

    if (loading) {
        return <Loading />
    }
    return (
        <div className="mt-4 border-2 round-sm h-full w-full flex justify-center items-start flex-col">
            <div className="flex w-[98svw] h-12 justify-between items-center text-lg shadow-lg px-2 text-primary">
                <div className="w-1/2 font-bold ">
                    Admin Propducts
                </div>
                <div className="w-1/2 flex justify-end items-center">
                    <Button className="bg-green-600 hover:bg-green-500 rounded-sm">
                        <Plus /> Add Product
                    </Button>
                </div>
            </div>
            {(!loading && products.length === 0) ?
                (
                    <div> no products available </div>
                ) : (
                    <Table>
                        <TableHeader className="bg-primary ">
                            <TableRow>
                                <TableHead className="w-[100px] text-white">Name</TableHead>
                                <TableHead className="text-white">Description</TableHead>
                                <TableHead className="text-white">Category</TableHead>
                                <TableHead className="text-white">Tags</TableHead>
                                <TableHead className="text-white">Stock</TableHead>
                                <TableHead className="text-white">Price</TableHead>
                                <TableHead className="text-white text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{product.name}</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell>{product.tags}</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell className="flex w-full justify-end items-center gap-2">
                                        <Button className="bg-blue-600 hover:bg-blue-500 cursor-pointer">
                                            <Pencil />
                                        </Button>
                                        <Button className="bg-red-600 hover:bg-red-500 cursor-pointer" onClick={() => handleDelete(product.id)}>
                                            <Trash2 />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                            }
                        </TableBody>
                    </Table>
                )
            }
        </div>
    )
}

export default AdminProducts