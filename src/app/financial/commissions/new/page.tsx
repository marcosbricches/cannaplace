// src/app/financial/commissions/new/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function NewCommission() {
 return (
   <div className="container mx-auto py-10">
     <div className="flex justify-between items-center mb-6">
       <h1 className="text-2xl font-bold">Nova Comissão</h1>
       <div className="space-x-2">
         <a href="/financial/commissions">
           <Button variant="outline">Cancelar</Button>
         </a>
         <a href="/financial/commissions/novo-id">
           <Button>Criar Comissão</Button>
         </a>
       </div>
     </div>

     <Card>
       <CardHeader>
         <CardTitle>Informações da Comissão</CardTitle>
       </CardHeader>
       <CardContent className="space-y-6">
         <div className="grid gap-2">
           <Label htmlFor="type">Tipo de Comissão</Label>
           <Select>
             <SelectTrigger>
               <SelectValue placeholder="Selecione o tipo" />
             </SelectTrigger>
             <SelectContent>
               <SelectItem value="consultor">Consultor</SelectItem>
               <SelectItem value="assessoria">Assessoria</SelectItem>
             </SelectContent>
           </Select>
         </div>

         <div className="grid gap-2">
           <Label htmlFor="saleType">Tipo de Venda</Label>
           <Select>
             <SelectTrigger>
               <SelectValue placeholder="Selecione o tipo de venda" />
             </SelectTrigger>
             <SelectContent>
               <SelectItem value="direta">Venda Direta</SelectItem>
               <SelectItem value="intervencao">Venda com Intervenção</SelectItem>
               <SelectItem value="captacao">Captação de Lead</SelectItem>
             </SelectContent>
           </Select>
         </div>

         <Separator />

         <div className="grid gap-2">
           <Label htmlFor="mainCommission">Comissão Principal (%)</Label>
           <Input 
             id="mainCommission" 
             type="number" 
             placeholder="Ex: 15"
           />
           <span className="text-sm text-muted-foreground">
             Aplicada em vendas diretas e consultor principal
           </span>
         </div>

         <div className="grid gap-2">
           <Label htmlFor="secondaryCommission">Comissão Secundária (%)</Label>
           <Input 
             id="secondaryCommission" 
             type="number" 
             placeholder="Ex: 5"
           />
           <span className="text-sm text-muted-foreground">
             Aplicada em vendas com intervenção e consultor secundário
           </span>
         </div>

         <div className="grid gap-2">
           <Label htmlFor="status">Status</Label>
           <Select defaultValue="ativo">
             <SelectTrigger>
               <SelectValue placeholder="Selecione o status" />
             </SelectTrigger>
             <SelectContent>
               <SelectItem value="ativo">Ativo</SelectItem>
               <SelectItem value="inativo">Inativo</SelectItem>
             </SelectContent>
           </Select>
         </div>
       </CardContent>
     </Card>
   </div>
 )
}