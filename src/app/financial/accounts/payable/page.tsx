// src/app/financial/accounts/payable/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export default function PayableAccounts() {
 return (
   <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
    <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Contas a Pagar</h2>
          <p className="text-muted-foreground">
            Gerencie todas as contas a pagar do sistema
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <a href="/financial/accounts">
            <Button variant="outline">Voltar</Button>
          </a>
          <a href="/financial/accounts/new">
            <Button>Nova Conta</Button>
          </a>
        </div>
      </div>

     {/* Resumo */}
     <div className="grid gap-4 md:grid-cols-3">
       <Card className="p-6">
         <div className="flex flex-col gap-1">
           <span className="text-sm font-medium text-muted-foreground">Total a Pagar</span>
           <span className="text-2xl font-bold">R$ 8.234,00</span>
           <span className="text-xs text-muted-foreground">15 contas pendentes</span>
         </div>
       </Card>
       <Card className="p-6">
         <div className="flex flex-col gap-1">
           <span className="text-sm font-medium text-muted-foreground">Vencidos</span>
           <span className="text-2xl font-bold text-red-600">R$ 2.345,00</span>
           <span className="text-xs text-muted-foreground">3 contas atrasadas</span>
         </div>
       </Card>
       <Card className="p-6">
         <div className="flex flex-col gap-1">
           <span className="text-sm font-medium text-muted-foreground">A Vencer</span>
           <span className="text-2xl font-bold text-green-600">R$ 5.889,00</span>
           <span className="text-xs text-muted-foreground">12 contas no prazo</span>
         </div>
       </Card>
     </div>

     {/* Filtros */}
     <div className="flex flex-col space-y-4">
       <div className="flex flex-wrap gap-4">
         <Input
           placeholder="Buscar contas..."
           className="h-8 w-[300px]"
         />
         <Select>
           <SelectTrigger className="h-8 w-[180px]">
             <SelectValue placeholder="Status" />
           </SelectTrigger>
           <SelectContent>
             <SelectItem value="todos">Todos</SelectItem>
             <SelectItem value="pendente">Pendente</SelectItem>
             <SelectItem value="vencido">Vencido</SelectItem>
             <SelectItem value="pago">Pago</SelectItem>
             <SelectItem value="cancelado">Cancelado</SelectItem>
           </SelectContent>
         </Select>
         <Select>
           <SelectTrigger className="h-8 w-[180px]">
             <SelectValue placeholder="Categoria" />
           </SelectTrigger>
           <SelectContent>
             <SelectItem value="todas">Todas</SelectItem>
             <SelectItem value="marketing">Marketing</SelectItem>
             <SelectItem value="operacional">Operacional</SelectItem>
             <SelectItem value="comissoes">Comissões</SelectItem>
           </SelectContent>
         </Select>
         <Input
           type="month"
           className="h-8 w-[180px]"
         />
       </div>
     </div>

     {/* Tabela */}
     <div className="rounded-md border">
       <Table>
         <TableHeader>
           <TableRow className="bg-muted/50">
             <TableHead>ID</TableHead>
             <TableHead>Descrição</TableHead>
             <TableHead>Fornecedor</TableHead>
             <TableHead>Vencimento</TableHead>
             <TableHead className="text-right">Valor</TableHead>
             <TableHead>Status</TableHead>
             <TableHead className="text-right">Ações</TableHead>
           </TableRow>
         </TableHeader>
         <TableBody>
           {[1, 2, 3].map((item, i) => (
             <TableRow key={i} className="hover:bg-muted/50">
               <TableCell className="font-medium">PAG-{item}23</TableCell>
               <TableCell>
                 <div className="flex flex-col">
                   <span className="font-medium">Comissão #456</span>
                   <span className="text-xs text-muted-foreground">Categoria: Comissões</span>
                 </div>
               </TableCell>
               <TableCell>
                 <div className="flex flex-col">
                   <span className="font-medium">Empresa XYZ</span>
                   <span className="text-xs text-muted-foreground">12.345.678/0001-90</span>
                 </div>
               </TableCell>
               <TableCell>
                 <div className="flex flex-col">
                   <span className="font-medium">15/02/2025</span>
                   <span className={`text-xs ${
                     i === 2 ? "text-red-600" : "text-green-600"
                   }`}>
                     {i === 2 ? "Atrasado 5 dias" : "Em 15 dias"}
                   </span>
                 </div>
               </TableCell>
               <TableCell className="text-right font-medium">
                 R$ 2.345,00
               </TableCell>
               <TableCell>
                 <Badge variant={
                   i === 0 ? "default" : 
                   i === 1 ? "secondary" : 
                   "destructive"
                 }>
                   {i === 0 ? "Pendente" : i === 1 ? "Pago" : "Vencido"}
                 </Badge>
               </TableCell>
               <TableCell className="text-right">
                 <div className="flex justify-end space-x-2">
                   <a href={`/financial/accounts/${item}`}>
                     <Button variant="ghost" size="sm">
                       Visualizar
                     </Button>
                   </a>
                   <Button variant="ghost" size="sm">
                     Pagar
                   </Button>
                 </div>
               </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>

       {/* Paginação */}
       <div className="flex items-center justify-between px-4 py-4 border-t">
         <div className="text-sm text-muted-foreground">
           Página 1 de 2
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