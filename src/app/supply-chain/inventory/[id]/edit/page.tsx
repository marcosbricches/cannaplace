// src/app/supply-chain/inventory/[id]/edit/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function InventoryEdit({ params }: any) {
 return (
   <div className="container mx-auto py-8 max-w-5xl">
     <div className="flex justify-between items-center mb-8">
       <div>
         <h1 className="text-3xl font-bold">Editar Produto em Estoque</h1>
         <p className="text-muted-foreground mt-1">Atualize as informações do produto</p>
       </div>
       <div className="space-x-2">
         <Link href={`/supply-chain/inventory/${params.id}`}>
           <Button variant="outline">Cancelar</Button>
         </Link>
         <Button>Salvar Alterações</Button>
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
               <Input defaultValue="Produto ABC" />
             </div>

             <div className="space-y-2">
               <Label>SKU</Label>
               <Input defaultValue="PRD-001" />
             </div>

             <div className="space-y-2">
               <Label>Quantidade</Label>
               <Input type="number" defaultValue="150" />
             </div>

             <div className="space-y-2">
               <Label>Custo Unitário (R$)</Label>
               <Input type="number" defaultValue="25.00" />
             </div>

             <div className="space-y-2">
               <Label>Localidade</Label>
               <Select defaultValue="brasil-courrier">
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
               <Select defaultValue="disponivel">
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
               <Input defaultValue="LOT-2024-001" />
             </div>

             <div className="space-y-2">
               <Label>Data de Fabricação</Label>
               <Input type="date" defaultValue="2024-01-01" />
             </div>

             <div className="space-y-2">
               <Label>Data de Validade</Label>
               <Input type="date" defaultValue="2025-01-01" />
             </div>

             <div className="space-y-2">
               <Label>Batch</Label>
               <Input defaultValue="BCH-001" />
             </div>

             <div className="col-span-2 space-y-2">
               <Label>Certificado de Análise (COA)</Label>
               <Input type="file" />
               <p className="text-sm text-muted-foreground mt-1">
                 Arquivo atual: COA-2024-001.pdf
               </p>
             </div>
           </div>
         </CardContent>
       </Card>

       <Card>
         <CardHeader>
           <CardTitle>Nova Movimentação</CardTitle>
         </CardHeader>
         <CardContent>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
               <Label>Tipo</Label>
               <Select>
                 <SelectTrigger>
                   <SelectValue placeholder="Selecione o tipo" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="entrada">Entrada</SelectItem>
                   <SelectItem value="saida">Saída</SelectItem>
                 </SelectContent>
               </Select>
             </div>

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
                   <SelectItem value="venda">Venda</SelectItem>
                   <SelectItem value="descarte">Descarte</SelectItem>
                 </SelectContent>
               </Select>
             </div>

             <div className="space-y-2">
               <Label>Quantidade</Label>
               <Input type="number" placeholder="Digite a quantidade" />
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