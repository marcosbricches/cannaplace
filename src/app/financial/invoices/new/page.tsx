// src/app/financial/invoices/new/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export default function NewInvoice() {
 return (
   <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
     <div className="flex items-center justify-between space-y-2">
       <div>
         <h2 className="text-2xl font-bold tracking-tight">Emitir Nota Fiscal</h2>
         <p className="text-muted-foreground">
           Preencha os dados para emissão da nota fiscal
         </p>
       </div>
       <div className="flex items-center space-x-2">
         <a href="/financial/invoices">
           <Button variant="outline">Cancelar</Button>
         </a>
         <Button>Emitir Nota</Button>
       </div>
     </div>

     <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
       <Card>
         <CardHeader>
           <CardTitle>Dados do Cliente</CardTitle>
         </CardHeader>
         <CardContent className="space-y-6">
           <div className="grid gap-2">
             <Label htmlFor="clientType">Tipo de Cliente</Label>
             <Select>
               <SelectTrigger>
                 <SelectValue placeholder="Selecione o tipo" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="pf">Pessoa Física</SelectItem>
                 <SelectItem value="pj">Pessoa Jurídica</SelectItem>
               </SelectContent>
             </Select>
           </div>

           <div className="grid gap-2">
             <Label htmlFor="document">CPF/CNPJ</Label>
             <Input 
               id="document" 
               placeholder="Digite o documento"
             />
           </div>

           <div className="grid gap-2">
             <Label htmlFor="name">Nome/Razão Social</Label>
             <Input 
               id="name" 
               placeholder="Digite o nome completo"
             />
           </div>

           <div className="grid gap-2">
             <Label htmlFor="email">E-mail</Label>
             <Input 
               id="email" 
               type="email"
               placeholder="Digite o e-mail"
             />
           </div>

           <Separator />

           <div className="grid gap-2">
             <Label htmlFor="cep">CEP</Label>
             <Input 
               id="cep"
               placeholder="00000-000"
             />
           </div>

           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
             <div className="grid gap-2">
               <Label htmlFor="city">Cidade</Label>
               <Input id="city" placeholder="Cidade" />
             </div>
             <div className="grid gap-2">
               <Label htmlFor="state">Estado</Label>
               <Input id="state" placeholder="UF" />
             </div>
           </div>

           <div className="grid gap-2">
             <Label htmlFor="address">Endereço</Label>
             <Input id="address" placeholder="Logradouro, número" />
           </div>
         </CardContent>
       </Card>

       <Card>
         <CardHeader>
           <CardTitle>Dados do Serviço</CardTitle>
         </CardHeader>
         <CardContent className="space-y-6">
           <div className="grid gap-2">
             <Label htmlFor="service">Tipo de Serviço</Label>
             <Select>
               <SelectTrigger>
                 <SelectValue placeholder="Selecione o serviço" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="consultoria">Consultoria</SelectItem>
                 <SelectItem value="assessoria">Assessoria</SelectItem>
               </SelectContent>
             </Select>
           </div>

           <div className="grid gap-2">
             <Label htmlFor="description">Descrição do Serviço</Label>
             <Textarea 
               id="description"
               placeholder="Descreva os detalhes do serviço..."
               className="min-h-[100px]"
             />
           </div>

           <Separator />

           <div className="grid gap-2">
             <Label htmlFor="value">Valor do Serviço</Label>
             <Input 
               id="value" 
               type="number" 
               placeholder="0,00"
               className="text-right"
             />
           </div>

           <div className="grid gap-2">
             <Label htmlFor="aliquota">Alíquota ISS (%)</Label>
             <Input 
               id="aliquota" 
               type="number" 
               placeholder="0,00"
               className="text-right"
             />
           </div>

           <div className="grid gap-2">
             <Label>Retenções</Label>
             <div className="grid grid-cols-2 gap-4">
               <div className="flex items-center space-x-2">
                 <Input type="checkbox" id="pis" />
                 <Label htmlFor="pis">PIS</Label>
               </div>
               <div className="flex items-center space-x-2">
                 <Input type="checkbox" id="cofins" />
                 <Label htmlFor="cofins">COFINS</Label>
               </div>
               <div className="flex items-center space-x-2">
                 <Input type="checkbox" id="csll" />
                 <Label htmlFor="csll">CSLL</Label>
               </div>
               <div className="flex items-center space-x-2">
                 <Input type="checkbox" id="irrf" />
                 <Label htmlFor="irrf">IRRF</Label>
               </div>
             </div>
           </div>

           <Separator />

           <div className="grid gap-2">
             <Label htmlFor="observations">Observações</Label>
             <Textarea 
               id="observations"
               placeholder="Observações adicionais..."
               className="min-h-[100px]"
             />
           </div>
         </CardContent>
       </Card>
     </div>
   </div>
 )
}