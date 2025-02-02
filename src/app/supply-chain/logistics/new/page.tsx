// src/app/supply-chain/logistics/new/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function LogisticsNew() {
 return (
   <div className="container mx-auto py-8 max-w-5xl">
     <div className="flex justify-between items-center mb-8">
       <div>
         <h1 className="text-3xl font-bold">Nova Empresa Logística</h1>
         <p className="text-muted-foreground mt-1">Cadastre uma nova empresa no sistema</p>
       </div>
       <div className="space-x-2">
         <Link href="/supply-chain/logistics">
           <Button variant="outline">Cancelar</Button>
         </Link>
         <Button>Salvar</Button>
       </div>
     </div>

     <div className="grid gap-6">
       <Card>
         <CardHeader>
           <CardTitle>Informações da Empresa</CardTitle>
         </CardHeader>
         <CardContent>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
               <Label>Status</Label>
               <Select>
                 <SelectTrigger>
                   <SelectValue placeholder="Selecione o status" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="ativo">Ativo</SelectItem>
                   <SelectItem value="inativo">Inativo</SelectItem>
                 </SelectContent>
               </Select>
             </div>

             <div className="space-y-2">
               <Label>CNPJ/EIN</Label>
               <Input placeholder="Digite o CNPJ/EIN" />
             </div>

             <div className="space-y-2">
               <Label>Razão Social</Label>
               <Input placeholder="Digite a razão social" />
             </div>

             <div className="space-y-2">
               <Label>Representante Legal</Label>
               <Input placeholder="Digite o nome do representante" />
             </div>

             <div className="space-y-2">
               <Label>Data de Contratação</Label>
               <Input type="date" />
             </div>

             <div className="space-y-2">
               <Label>Email</Label>
               <Input type="email" placeholder="Digite o email" />
             </div>
           </div>
         </CardContent>
       </Card>

       <Card>
         <CardHeader>
           <CardTitle>Endereço</CardTitle>
         </CardHeader>
         <CardContent>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
               <Label>CEP</Label>
               <Input placeholder="Digite o CEP" />
             </div>

             <div className="space-y-2">
               <Label>Logradouro</Label>
               <Input placeholder="Digite o logradouro" />
             </div>

             <div className="space-y-2">
               <Label>Número</Label>
               <Input placeholder="Digite o número" />
             </div>

             <div className="space-y-2">
               <Label>Complemento</Label>
               <Input placeholder="Digite o complemento" />
             </div>

             <div className="space-y-2">
               <Label>Bairro</Label>
               <Input placeholder="Digite o bairro" />
             </div>

             <div className="space-y-2">
               <Label>Cidade</Label>
               <Input placeholder="Digite a cidade" />
             </div>

             <div className="space-y-2">
               <Label>Estado</Label>
               <Input placeholder="Digite o estado" />
             </div>

             <div className="space-y-2">
               <Label>País</Label>
               <Input placeholder="Digite o país" />
             </div>
           </div>
         </CardContent>
       </Card>

       <Card>
         <CardHeader>
           <CardTitle>Informações Financeiras</CardTitle>
         </CardHeader>
         <CardContent>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
               <Label>Banco</Label>
               <Input placeholder="Digite o banco" />
             </div>

             <div className="space-y-2">
               <Label>Agência</Label>
               <Input placeholder="Digite a agência" />
             </div>

             <div className="space-y-2">
               <Label>Conta</Label>
               <Input placeholder="Digite a conta" />
             </div>

             <div className="space-y-2">
               <Label>Chave PIX</Label>
               <Input placeholder="Digite a chave PIX" />
             </div>

             <div className="space-y-2">
               <Label>Valor Variável por Frete (%)</Label>
               <Input type="number" placeholder="Digite o valor" />
             </div>

             <div className="space-y-2">
               <Label>Spread do Frete (%)</Label>
               <Input type="number" placeholder="Digite o spread" />
             </div>
           </div>
         </CardContent>
       </Card>

       <Card>
         <CardHeader>
           <CardTitle>Observações</CardTitle>
         </CardHeader>
         <CardContent>
           <Textarea 
             placeholder="Digite observações adicionais"
             className="min-h-[100px]"
           />
         </CardContent>
       </Card>
     </div>
   </div>
 )
}