// src/app/communication/services/page.tsx
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select"
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
 Dialog,
 DialogContent,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "@/components/ui/dialog"

export default function ServicesList() {
 return (
   <div className="flex flex-col h-full">
     {/* Header Principal */}
     <div className="border-b">
       <div className="flex h-16 items-center px-4 gap-4">
         <div className="flex items-center gap-2 flex-1">
           <h1 className="text-xl font-semibold">Comunicação</h1>
           <Separator orientation="vertical" className="h-6" />
           <h2 className="text-xl">Atendimentos</h2>
         </div>
         <Link href="/communication/services/new" className="flex items-center">
           <Button>Novo Atendimento</Button>
         </Link>
       </div>
     </div>

     {/* Conteúdo Principal */}
     <div className="flex-1 p-6 space-y-4">
       <Tabs defaultValue="todos" className="space-y-4">
         <div className="flex items-center justify-between">
           <TabsList>
             <TabsTrigger value="todos">Todos</TabsTrigger>
             <TabsTrigger value="abertos">Abertos</TabsTrigger>
             <TabsTrigger value="proposta">Proposta</TabsTrigger>
             <TabsTrigger value="negociacao">Negociação</TabsTrigger>
             <TabsTrigger value="finalizados">Finalizados</TabsTrigger>
           </TabsList>

           <div className="flex items-center gap-2">
             <Input
               placeholder="Buscar atendimentos..."
               className="w-[300px]"
             />
             <Dialog>
               <DialogTrigger asChild>
                 <Button variant="outline">Filtros Avançados</Button>
               </DialogTrigger>
               <DialogContent>
                 <DialogHeader>
                   <DialogTitle>Filtros Avançados</DialogTitle>
                 </DialogHeader>
                 <div className="space-y-4 py-4">
                   <div className="space-y-2">
                     <h3 className="text-sm font-medium">Tipo de Atendimento</h3>
                     <Select>
                       <SelectTrigger>
                         <SelectValue placeholder="Selecione o tipo" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="todos">Todos</SelectItem>
                         <SelectItem value="proposta">Proposta</SelectItem>
                         <SelectItem value="sac">SAC</SelectItem>
                         <SelectItem value="negociacao">Negociação</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                   
                   <div className="space-y-2">
                     <h3 className="text-sm font-medium">Período</h3>
                     <div className="grid grid-cols-2 gap-2">
                       <Input type="date" />
                       <Input type="date" />
                     </div>
                   </div>

                   <div className="space-y-2">
                     <h3 className="text-sm font-medium">Cliente</h3>
                     <Select>
                       <SelectTrigger>
                         <SelectValue placeholder="Selecione o cliente" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="cliente1">Cliente 1</SelectItem>
                         <SelectItem value="cliente2">Cliente 2</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                 </div>
               </DialogContent>
             </Dialog>
           </div>
         </div>

         <TabsContent value="todos" className="m-0">
           <div className="rounded-md border">
             <Table>
               <TableHeader>
                 <TableRow>
                   <TableHead>Código</TableHead>
                   <TableHead>Cliente</TableHead>
                   <TableHead>Tipo</TableHead>
                   <TableHead>Status</TableHead>
                   <TableHead>Data</TableHead>
                   <TableHead>Ações</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 {[1, 2, 3].map((id) => (
                   <TableRow key={id}>
                     <TableCell>
                       <Link 
                         href={`/communication/services/${id}`}
                         className="font-medium hover:underline"
                       >
                         ATD-{id.toString().padStart(4, '0')}
                       </Link>
                     </TableCell>
                     <TableCell>Cliente {id}</TableCell>
                     <TableCell>
                       {id % 2 === 0 ? 'Proposta' : 'SAC'}
                     </TableCell>
                     <TableCell>
                       <Badge 
                         variant={id % 2 === 0 ? 'default' : 'secondary'}
                         className="font-semibold"
                       >
                         {id % 2 === 0 ? 'ABERTO' : 'EM ANDAMENTO'}
                       </Badge>
                     </TableCell>
                     <TableCell>01/02/2025</TableCell>
                     <TableCell>
                       <div className="flex items-center gap-2">
                         <Link href={`/communication/services/${id}`}>
                           <Button variant="ghost" size="sm">
                             Visualizar
                           </Button>
                         </Link>
                         <Link href={`/communication/services/edit`}>
                           <Button variant="ghost" size="sm">
                             Editar
                           </Button>
                         </Link>
                       </div>
                     </TableCell>
                   </TableRow>
                 ))}
               </TableBody>
             </Table>
           </div>
         </TabsContent>
       </Tabs>
     </div>
   </div>
 )
}