// src/app/financial/accounts/new/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export default function NewAccount() {
 return (
   <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
     <div className="flex items-center justify-between space-y-2">
       <div>
         <h2 className="text-2xl font-bold tracking-tight">Nova Conta</h2>
         <p className="text-muted-foreground">
           Adicione uma nova conta ao sistema
         </p>
       </div>
       <div className="flex items-center space-x-2">
         <a href="/financial/accounts">
           <Button variant="outline">Cancelar</Button>
         </a>
         <a href="/financial/accounts">
           <Button>Salvar Conta</Button>
         </a>
       </div>
     </div>

     <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
       <Card>
         <CardHeader>
           <CardTitle>Informações Principais</CardTitle>
         </CardHeader>
         <CardContent className="space-y-6">
           <div className="grid gap-2">
             <Label htmlFor="type">Tipo da Conta</Label>
             <Select>
               <SelectTrigger>
                 <SelectValue placeholder="Selecione o tipo" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="receber">A Receber</SelectItem>
                 <SelectItem value="pagar">A Pagar</SelectItem>
               </SelectContent>
             </Select>
           </div>

           <div className="grid gap-2">
             <Label htmlFor="category">Categoria</Label>
             <Select>
               <SelectTrigger>
                 <SelectValue placeholder="Selecione a categoria" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="vendas">Vendas</SelectItem>
                 <SelectItem value="marketing">Marketing</SelectItem>
                 <SelectItem value="operacional">Operacional</SelectItem>
               </SelectContent>
             </Select>
           </div>

           <div className="grid gap-2">
             <Label htmlFor="subcategory">Subcategoria</Label>
             <Select>
               <SelectTrigger>
                 <SelectValue placeholder="Selecione a subcategoria" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="produto">Produto</SelectItem>
                 <SelectItem value="servico">Serviço</SelectItem>
               </SelectContent>
             </Select>
           </div>

           <div className="grid gap-2">
             <Label htmlFor="value">Valor</Label>
             <Input 
               id="value" 
               type="number" 
               placeholder="0,00"
               className="text-right"
             />
           </div>

           <div className="grid gap-2">
             <Label htmlFor="dueDate">Data de Vencimento</Label>
             <Input 
               id="dueDate" 
               type="date"
             />
           </div>
         </CardContent>
       </Card>

       <Card>
         <CardHeader>
           <CardTitle>Informações Adicionais</CardTitle>
         </CardHeader>
         <CardContent className="space-y-6">
           <div className="grid gap-2">
             <Label htmlFor="description">Descrição</Label>
             <Textarea 
               id="description"
               placeholder="Descreva os detalhes da conta..."
               className="min-h-[100px]"
             />
           </div>

           <div className="grid gap-2">
             <Label htmlFor="status">Status</Label>
             <Select defaultValue="pendente">
               <SelectTrigger>
                 <SelectValue placeholder="Selecione o status" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="pendente">Pendente</SelectItem>
                 <SelectItem value="pago">Pago</SelectItem>
                 <SelectItem value="cancelado">Cancelado</SelectItem>
               </SelectContent>
             </Select>
           </div>

           <Separator />

           <div className="grid gap-2">
             <Label htmlFor="attachments">Anexos</Label>
             <Input 
               id="attachments" 
               type="file"
             />
             <span className="text-sm text-muted-foreground">
               Arquivos permitidos: PDF, PNG, JPG (máx. 5MB)
             </span>
           </div>

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