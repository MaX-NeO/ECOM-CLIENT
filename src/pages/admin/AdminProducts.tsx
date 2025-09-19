import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
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
                    <Button className="bg-green-600 hover:bg-green-500 rounded-none">
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
                        <TableHead className="text-white text-right">Price</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Test Product</TableCell>
                        <TableCell>Test</TableCell>
                        <TableCell>Test</TableCell>
                        <TableCell>Credit,Card</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default AdminProducts