import { Button } from "@/components/ui/button"
import { Delete, Pencil, Plus, Trash2 } from "lucide-react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const AdminProducts = () => {
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
                    <TableRow>
                        <TableCell className="font-medium">Test Product</TableCell>
                        <TableCell>Test</TableCell>
                        <TableCell>Test</TableCell>
                        <TableCell>Credit,Card</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell className="flex w-full justify-end items-center gap-2">
                            <Button className="bg-blue-600 hover:bg-blue-500 cursor-pointer">
                                <Pencil />
                            </Button>
                            <Button className="bg-red-600 hover:bg-red-500 cursor-pointer">
                                <Trash2 />
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default AdminProducts