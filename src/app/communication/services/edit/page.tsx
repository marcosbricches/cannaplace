// src/app/communication/services/edit/page.tsx
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ServiceEdit() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Editar Atendimento</h1>
        <Link href="/communication/services">Voltar</Link>
      </div>

      <Card>
       <CardHeader>
         <CardTitle>Informações do Atendimento</CardTitle>
       </CardHeader>
       <CardContent>
         <form className="space-y-6">
           <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
               <Label htmlFor="client">Cliente</Label>
               <Input id="client" placeholder="Selecione o cliente" />
             </div>

             <div className="space-y-2">
               <Label htmlFor="status">Status</Label>
               <Select>
                 <SelectTrigger>
                   <SelectValue placeholder="Selecione o status" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="ABERTO">ABERTO</SelectItem>
                   <SelectItem value="PROPOSTA">PROPOSTA</SelectItem>
                   <SelectItem value="NEGOCIACAO">NEGOCIAÇÃO</SelectItem>
                   <SelectItem value="FATURADO">FATURADO</SelectItem>
                   <SelectItem value="PERDIDO">PERDIDO</SelectItem>
                 </SelectContent>
               </Select>
             </div>

             <div className="space-y-2">
               <Label htmlFor="type">Tipo de Atendimento</Label>
               <Select>
                 <SelectTrigger>
                   <SelectValue placeholder="Selecione o tipo" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="PROPOSTA">Proposta</SelectItem>
                   <SelectItem value="NEGOCIACAO">Negociação</SelectItem>
                   <SelectItem value="SAC">SAC</SelectItem>
                 </SelectContent>
               </Select>
             </div>

             <div className="space-y-2">
               <Label htmlFor="date">Data de Abertura</Label>
               <Input type="date" id="date" />
             </div>

             <div className="space-y-2">
               <Label htmlFor="order">Pedido Relacionado</Label>
               <Input id="order" placeholder="Número do pedido" />
             </div>

             <div className="space-y-2">
               <Label htmlFor="sacType">Tipo de Solicitação SAC</Label>
               <Select>
                 <SelectTrigger>
                   <SelectValue placeholder="Selecione o tipo de SAC" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="TROCA">Troca</SelectItem>
                   <SelectItem value="REPOSICAO">Reposição</SelectItem>
                   <SelectItem value="RECLAMACAO">Reclamação</SelectItem>
                   <SelectItem value="SUGESTAO">Sugestão</SelectItem>
                 </SelectContent>
               </Select>
             </div>
           </div>

           <div className="space-y-2">
             <Label htmlFor="observation">Observação</Label>
             <Textarea 
               id="observation" 
               placeholder="Digite as observações do atendimento"
               className="min-h-[120px]"
             />
           </div>

           <div className="flex justify-end gap-4">
              <Link href="/communication/services">Cancelar</Link>
              <Button type="submit">Salvar Alterações</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}