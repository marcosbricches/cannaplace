// src/app/financial/invoices/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function InvoicesList() {
 return (
   <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
     {/* Header */}
     <div className="flex items-center justify-between space-y-2">
       <div>
         <h2 className="text-2xl font-bold tracking-tight">Notas Fiscais</h2>
         <p className="text-muted-foreground">
           Gerencie as notas fiscais de serviço do sistema
         </p>
       </div>
       <div className="flex items-center space-x-2">
         <a href="/financial/invoices/new">
           <Button>Emitir Nova Nota</Button>
         </a>
       </div>
     </div>

     {/* Resumo */}
     <div className="grid gap-4 md:grid-cols-3">
       <Card className="p-6">
         <div className="flex flex-col gap-1">
           <span className="text-sm font-medium text-muted-foreground">Notas Emitidas (Mês)</span>
           <span className="text-2xl font-bold">32</span>
           <span className="text-xs text-muted-foreground">+12% em relação ao mês anterior</span>
         </div>
       </Card>
       <Card className="p-6">
         <div className="flex flex-col gap-1">
           <span className="text-sm font-medium text-muted-foreground">Valor Total (Mês)</span>
           <span className="text-2xl font-bold">R$ 145.678,90</span>
           <span className="text-xs text-muted-foreground">+8% em relação ao mês anterior</span>
         </div>
       </Card>
       <Card className="p-6">
         <div className="flex flex-col gap-1">
           <span className="text-sm font-medium text-muted-foreground">Média por Nota</span>
           <span className="text-2xl font-bold">R$ 4.552,47</span>
           <span className="text-xs text-muted-foreground">Valor médio por nota no mês</span>
         </div>
       </Card>
     </div>

     {/* Filtros */}
     <div className="flex flex-col space-y-4">
       <div className="flex flex-wrap gap-4">
         <Input
           placeholder="Buscar notas..."
           className="h-8 w-[300px]"
         />
         <Select>
           <SelectTrigger className="h-8 w-[180px]">
             <SelectValue placeholder="Status" />
           </SelectTrigger>
           <SelectContent>
             <SelectItem value="todos">Todos</SelectItem>
             <SelectItem value="emitida">Emitida</SelectItem>
             <SelectItem value="cancelada">Cancelada</SelectItem>
           </SelectContent>
         </Select>
         <Input
           type="month"
           className="h-8 w-[180px]"
         />
       </div>

       <div className="flex-1 text-sm text-muted-foreground">
         Mostrando 10 de 32 notas fiscais
       </div>
     </div>

     {/* Tabela */}
     <div className="rounded-md border">
       <Table>
         <TableHeader>
           <TableRow className="bg-muted/50">
             <TableHead>Número</TableHead>
             <TableHead>Data Emissão</TableHead>
             <TableHead>Cliente</TableHead>
             <TableHead>Serviço</TableHead>
             <TableHead className="text-right">Valor</TableHead>
             <TableHead>Status</TableHead>
             <TableHead className="text-right">Ações</TableHead>
           </TableRow>
         </TableHeader>
         <TableBody>
           {[1, 2, 3].map((item, i) => (
             <TableRow key={i} className="hover:bg-muted/50">
               <TableCell className="font-medium">NFS-{item}23</TableCell>
               <TableCell>01/02/2025</TableCell>
               <TableCell>
                 <div className="flex flex-col">
                   <span className="font-medium">João Silva</span>
                   <span className="text-xs text-muted-foreground">123.456.789-00</span>
                 </div>
               </TableCell>
               <TableCell>Prestação de Serviços de Consultoria</TableCell>
               <TableCell className="text-right font-medium">
                 R$ 4.567,89
               </TableCell>
               <TableCell>
                 <Badge variant={i === 0 ? "default" : "secondary"}>
                   {i === 0 ? "Emitida" : "Cancelada"}
                 </Badge>
               </TableCell>
               <TableCell className="text-right">
                 <div className="flex justify-end space-x-2">
                   <a href={`/financial/invoices/${item}`}>
                     <Button variant="ghost" size="sm">Visualizar</Button>
                   </a>
                   <Button variant="ghost" size="sm">Download</Button>
                 </div>
               </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>

       {/* Paginação */}
       <div className="flex items-center justify-between px-4 py-4 border-t">
         <div className="text-sm text-muted-foreground">
           Página 1 de 4
         </div>
         <div className="flex space-x-2">
           <Button variant="outline" size="sm">Anterior</Button>
           <Button variant="outline" size="sm">Próxima</Button>
         </div>
       </div>
     </div>
   </div>
 )
}