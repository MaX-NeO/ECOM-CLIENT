import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
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
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"


const AdminProducts = () => {
    const [products, setProducts] = useState<AdminProductType[]>([])
    const [loading, setLoading] = useState(true)
    const [addModel, showAddModel] = useState(false)

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
                    <Button className="bg-green-600 hover:bg-green-500 rounded-sm" onClick={() => { showAddModel(true) }}>
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

            <AlertDialog open={addModel}>
                <form>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Add Product</AlertDialogTitle>
                            <AlertDialogDescription>
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Phone"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="description">Description</Label>
                                        <Input
                                            id="description"
                                            type="text"
                                            placeholder="Test Product"
                                            required
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="category">Category</Label>
                                        <Input
                                            id="Cescription"
                                            type="text"
                                            placeholder="Electronics"
                                            required
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="tags">Tags</Label>
                                        <Input
                                            id="tags"
                                            type="text"
                                            placeholder="Tag1,Tag2"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="price">Price</Label>
                                        <Input
                                            id="price"
                                            type="number"
                                            placeholder="100.00"
                                            required
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="stock">Stock</Label>
                                        <Input
                                            id="stock"
                                            type="number"
                                            placeholder="10"
                                            required
                                        />
                                    </div>
                                </div>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="flex flex-row flex-1">
                            <Button className="bg-red-600 w-1/2 hover:bg-red-500">
                                Cancel
                            </Button>
                            <Button className="bg-green-600 hover:bg-green-500 w-1/2">
                                Add
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </form>
            </AlertDialog>

        </div>
    )
}

export default AdminProducts