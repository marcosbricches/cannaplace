// src/app/supply-chain/inventory/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function InventoryList() {
 return (
   <div className="container mx-auto py-8 max-w-7xl">
     <div className="flex justify-between items-center mb-8">
       <div>
         <h1 className="text-3xl font-bold">Gestão de Estoque</h1>
         <p className="text-muted-foreground mt-1">Gerencie as entradas e saídas de produtos</p>
       </div>
       <Link href="/supply-chain/inventory/new">
         <Button>Nova Entrada</Button>
       </Link>
     </div>

     <Card className="mb-6">
       <CardContent className="pt-6">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           <div className="space-y-2">
             <label className="text-sm font-medium">Buscar</label>
             <Input placeholder="Nome, SKU ou ID..." />
           </div>
           <div className="space-y-2">
             <label className="text-sm font-medium">Tipo de Movimentação</label>
             <Select>
               <SelectTrigger>
                 <SelectValue placeholder="Todos" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="todos">Todos</SelectItem>
                 <SelectItem value="entrada">Entrada</SelectItem>
                 <SelectItem value="saida">Saída</SelectItem>
               </SelectContent>
             </Select>
           </div>
           <div className="space-y-2">
             <label className="text-sm font-medium">Período De</label>
             <Input type="date" />
           </div>
           <div className="space-y-2">
             <label className="text-sm font-medium">Até</label>
             <Input type="date" />
           </div>
         </div>
       </CardContent>
     </Card>

     <Card>
       <CardContent className="p-0">
         <Table>
           <TableHeader>
             <TableRow>
               <TableHead>Produto</TableHead>
               <TableHead>SKU</TableHead>
               <TableHead>Quantidade</TableHead>
               <TableHead>Lote</TableHead>
               <TableHead>Validade</TableHead>
               <TableHead>Localidade</TableHead>
               <TableHead className="text-right">Ações</TableHead>
             </TableRow>
           </TableHeader>
           <TableBody>
             <TableRow>
               <TableCell>Produto ABC</TableCell>
               <TableCell>PRD-001</TableCell>
               <TableCell>150 un</TableCell>
               <TableCell>LOT-2024-001</TableCell>
               <TableCell>01/01/2025</TableCell>
               <TableCell>Brasil Courrier</TableCell>
               <TableCell className="text-right">
                 <div className="flex justify-end gap-2">
                   <Link href="/supply-chain/inventory/123">
                     <Button variant="outline" size="sm">Ver</Button>
                   </Link>
                   <Link href="/supply-chain/inventory/123/edit">
                     <Button variant="outline" size="sm">Editar</Button>
                   </Link>
                 </div>
               </TableCell>
             </TableRow>

             <TableRow>
               <TableCell>Produto XYZ</TableCell>
               <TableCell>PRD-002</TableCell>
               <TableCell>75 un</TableCell>
               <TableCell>LOT-2024-002</TableCell>
               <TableCell>15/03/2025</TableCell>
               <TableCell>Fazenda</TableCell>
               <TableCell className="text-right">
                 <div className="flex justify-end gap-2">
                   <Link href="/supply-chain/inventory/456">
                     <Button variant="outline" size="sm">Ver</Button>
                   </Link>
                   <Link href="/supply-chain/inventory/456/edit">
                     <Button variant="outline" size="sm">Editar</Button>
                   </Link>
                 </div>
               </TableCell>
             </TableRow>
           </TableBody>
         </Table>
       </CardContent>
     </Card>
   </div>
 )
}