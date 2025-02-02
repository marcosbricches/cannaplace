// src/app/financial/invoices/[id]/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ViewInvoice() {
 return (
   <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
     <div className="flex items-center justify-between space-y-2">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight">NFS-123</h2>
            <Badge>Emitida</Badge>
          </div>
          <p className="text-muted-foreground">
            Detalhes da nota fiscal
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <a href="/financial/invoices">
            <Button variant="outline">Voltar</Button>
          </a>
          <Button variant="outline">Download PDF</Button>
          <Button variant="outline">Enviar por E-mail</Button>
          <Button variant="destructive">Cancelar NFS</Button>
        </div>
      </div>

     <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
       <Card>
         <CardHeader>
           <CardTitle>Informações da Nota</CardTitle>
         </CardHeader>
         <CardContent className="space-y-6">
           <div className="flex justify-between py-3 border-b">
             <span className="text-muted-foreground">Número</span>
             <span className="font-medium">NFS-123</span>
           </div>
           
           <div className="flex justify-between py-3 border-b">
             <span className="text-muted-foreground">Data de Emissão</span>
             <span className="font-medium">01/02/2025 às 14:30</span>
           </div>

           <div className="flex justify-between py-3 border-b">
             <span className="text-muted-foreground">Status</span>
             <Badge variant="outline">Emitida</Badge>
           </div>

           <div className="flex justify-between py-3 border-b">
             <span className="text-muted-foreground">Valor do Serviço</span>
             <span className="font-medium">R$ 4.567,89</span>
           </div>

           <div className="flex justify-between py-3 border-b">
             <span className="text-muted-foreground">ISS (5%)</span>
             <span className="font-medium">R$ 228,39</span>
           </div>

           <div className="flex justify-between py-3 border-b">
             <span className="text-muted-foreground">Valor Líquido</span>
             <span className="font-medium text-xl">R$ 4.339,50</span>
           </div>
         </CardContent>
       </Card>

       <div className="space-y-8">
         <Card>
           <CardHeader>
             <CardTitle>Dados do Cliente</CardTitle>
           </CardHeader>
           <CardContent className="space-y-4">
             <div className="space-y-1">
               <span className="text-sm text-muted-foreground">Nome/Razão Social</span>
               <p className="font-medium">João Silva</p>
             </div>

             <div className="space-y-1">
               <span className="text-sm text-muted-foreground">CPF/CNPJ</span>
               <p className="font-medium">123.456.789-00</p>
             </div>

             <div className="space-y-1">
               <span className="text-sm text-muted-foreground">E-mail</span>
               <p className="font-medium">joao.silva@email.com</p>
             </div>

             <Separator />

             <div className="space-y-1">
               <span className="text-sm text-muted-foreground">Endereço</span>
               <p className="font-medium">Rua Example, 123</p>
               <p className="text-sm text-muted-foreground">São Paulo - SP</p>
               <p className="text-sm text-muted-foreground">CEP: 00000-000</p>
             </div>
           </CardContent>
         </Card>

         <Card>
           <CardHeader>
             <CardTitle>Detalhes do Serviço</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="space-y-4">
               <div className="space-y-1">
                 <span className="text-sm text-muted-foreground">Tipo de Serviço</span>
                 <p className="font-medium">Consultoria</p>
               </div>

               <div className="space-y-1">
                 <span className="text-sm text-muted-foreground">Descrição</span>
                 <p className="font-medium">
                   Prestação de serviços de consultoria referente ao mês de Janeiro/2025.
                 </p>
               </div>

               <Separator />

               <div className="space-y-1">
                 <span className="text-sm text-muted-foreground">Retenções</span>
                 <div className="grid grid-cols-2 gap-2 mt-2">
                   <div>
                     <span className="text-sm text-muted-foreground">PIS</span>
                     <p className="font-medium">R$ 45,67</p>
                   </div>
                   <div>
                     <span className="text-sm text-muted-foreground">COFINS</span>
                     <p className="font-medium">R$ 91,34</p>
                   </div>
                   <div>
                     <span className="text-sm text-muted-foreground">CSLL</span>
                     <p className="font-medium">R$ 68,51</p>
                   </div>
                   <div>
                     <span className="text-sm text-muted-foreground">IRRF</span>
                     <p className="font-medium">R$ 137,02</p>
                   </div>
                 </div>
               </div>
             </div>
           </CardContent>
         </Card>
       </div>
     </div>

     <Card>
       <CardHeader>
         <CardTitle>Histórico</CardTitle>
       </CardHeader>
       <CardContent>
         <div className="space-y-4">
           <div className="flex items-center gap-4">
             <div className="w-2 h-2 bg-green-500 rounded-full" />
             <div className="flex-1">
               <p className="text-sm font-medium">Nota fiscal emitida</p>
               <p className="text-xs text-muted-foreground">01/02/2025 às 14:30</p>
             </div>
           </div>
           <div className="flex items-center gap-4">
             <div className="w-2 h-2 bg-blue-500 rounded-full" />
             <div className="flex-1">
               <p className="text-sm font-medium">E-mail enviado para o cliente</p>
               <p className="text-xs text-muted-foreground">01/02/2025 às 14:31</p>
             </div>
           </div>
         </div>
       </CardContent>
     </Card>
   </div>
 )
}