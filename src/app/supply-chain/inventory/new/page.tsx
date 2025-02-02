// src/app/supply-chain/inventory/new/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function InventoryNew() {
 return (
   <div className="container mx-auto py-8 max-w-5xl">
     <div className="flex justify-between items-center mb-8">
       <div>
         <h1 className="text-3xl font-bold">Nova Entrada em Estoque</h1>
         <p className="text-muted-foreground mt-1">Cadastre um novo produto no estoque</p>
       </div>
       <div className="space-x-2">
         <Link href="/supply-chain/inventory">
           <Button variant="outline">Cancelar</Button>
         </Link>
         <Button>Salvar</Button>
       </div>
     </div>

     <div className="grid gap-6">
       <Card>
         <CardHeader>
           <CardTitle>Informações do Produto</CardTitle>
         </CardHeader>
         <CardContent>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
               <Label>Produto</Label>
               <Input placeholder="Digite o nome do produto" />
             </div>

             <div className="space-y-2">
               <Label>SKU</Label>
               <Input placeholder="Digite o SKU" />
             </div>

             <div className="space-y-2">
               <Label>Quantidade</Label>
               <Input type="number" placeholder="Digite a quantidade" />
             </div>

             <div className="space-y-2">
               <Label>Custo Unitário (R$)</Label>
               <Input type="number" placeholder="Digite o custo unitário" />
             </div>

             <div className="space-y-2">
               <Label>Localidade</Label>
               <Select>
                 <SelectTrigger>
                   <SelectValue placeholder="Selecione a localidade" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="brasil-courrier">Brasil Courrier</SelectItem>
                   <SelectItem value="fazenda">Fazenda</SelectItem>
                   <SelectItem value="outro">Outro</SelectItem>
                 </SelectContent>
               </Select>
             </div>

             <div className="space-y-2">
               <Label>Status</Label>
               <Select>
                 <SelectTrigger>
                   <SelectValue placeholder="Selecione o status" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="disponivel">Disponível</SelectItem>
                   <SelectItem value="indisponivel">Indisponível</SelectItem>
                   <SelectItem value="reservado">Reservado</SelectItem>
                 </SelectContent>
               </Select>
             </div>
           </div>
         </CardContent>
       </Card>

       <Card>
         <CardHeader>
           <CardTitle>Informações do Lote</CardTitle>
         </CardHeader>
         <CardContent>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
               <Label>Número do Lote</Label>
               <Input placeholder="Digite o número do lote" />
             </div>

             <div className="space-y-2">
               <Label>Data de Fabricação</Label>
               <Input type="date" />
             </div>

             <div className="space-y-2">
               <Label>Data de Validade</Label>
               <Input type="date" />
             </div>

             <div className="space-y-2">
               <Label>Batch</Label>
               <Input placeholder="Digite o batch" />
             </div>

             <div className="col-span-2 space-y-2">
               <Label>Certificado de Análise (COA)</Label>
               <Input type="file" />
               <p className="text-sm text-muted-foreground mt-1">
                 Anexe o arquivo do certificado de análise do produto
               </p>
             </div>
           </div>
         </CardContent>
       </Card>

       <Card>
         <CardHeader>
           <CardTitle>Entrada Inicial</CardTitle>
         </CardHeader>
         <CardContent>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
               <Label>Motivo</Label>
               <Select>
                 <SelectTrigger>
                   <SelectValue placeholder="Selecione o motivo" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="compra">Compra</SelectItem>
                   <SelectItem value="fabricacao">Fabricação</SelectItem>
                   <SelectItem value="ajuste">Ajuste</SelectItem>
                 </SelectContent>
               </Select>
             </div>

             <div className="space-y-2">
               <Label>Data</Label>
               <Input type="date" />
             </div>
           </div>
         </CardContent>
       </Card>
     </div>
   </div>
 )
}