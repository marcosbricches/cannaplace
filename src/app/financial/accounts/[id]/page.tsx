// src/app/financial/accounts/[id]/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ViewAccount() {
 return (
   <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
     <div className="flex items-center justify-between space-y-2">
       <div>
         <div className="flex items-center gap-2">
           <h2 className="text-2xl font-bold tracking-tight">FIN-123</h2>
           <Badge>A Pagar</Badge>
         </div>
         <p className="text-muted-foreground">
           Detalhes da conta
         </p>
       </div>
       <div className="flex items-center space-x-2">
         <a href="/financial/accounts">
           <Button variant="outline">Voltar</Button>
         </a>
         <a href="/financial/accounts/123/edit">
           <Button>Editar Conta</Button>
         </a>
       </div>
     </div>

     <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
       <Card>
         <CardHeader>
           <CardTitle>Informações Principais</CardTitle>
         </CardHeader>
         <CardContent className="space-y-6">
           <div className="flex justify-between py-3 border-b">
             <span className="text-muted-foreground">Tipo</span>
             <span className="font-medium">A Pagar</span>
           </div>
           
           <div className="flex justify-between py-3 border-b">
             <span className="text-muted-foreground">Valor</span>
             <span className="font-medium">R$ 1.234,00</span>
           </div>

           <div className="flex justify-between py-3 border-b">
             <span className="text-muted-foreground">Vencimento</span>
             <span className="font-medium">15/02/2025</span>
           </div>

           <div className="flex justify-between py-3 border-b">
             <span className="text-muted-foreground">Status</span>
             <Badge variant="outline">Pendente</Badge>
           </div>

           <div className="flex justify-between py-3 border-b">
             <span className="text-muted-foreground">Categoria</span>
             <span className="font-medium">Vendas</span>
           </div>

           <div className="flex justify-between py-3 border-b">
             <span className="text-muted-foreground">Subcategoria</span>
             <span className="font-medium">Produto</span>
           </div>
         </CardContent>
       </Card>

       <div className="space-y-8">
         <Card>
           <CardHeader>
             <CardTitle>Detalhes</CardTitle>
           </CardHeader>
           <CardContent className="space-y-6">
             <div>
               <h4 className="font-medium mb-2">Descrição</h4>
               <p className="text-sm text-muted-foreground">
                 Pagamento referente à comissão do consultor João Silva pela venda realizada em janeiro/2025.
               </p>
             </div>

             <Separator />

             <div>
               <h4 className="font-medium mb-2">Observações</h4>
               <p className="text-sm text-muted-foreground">
                 Pagamento aprovado pelo gestor financeiro.
               </p>
             </div>
           </CardContent>
         </Card>

         <Card>
           <CardHeader>
             <CardTitle>Documentos Anexos</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="space-y-4">
               <div className="flex items-center justify-between p-2 border rounded-md">
                 <div className="flex items-center space-x-2">
                   <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                   </svg>
                   <span className="text-sm">comprovante.pdf</span>
                 </div>
                 <Button variant="ghost" size="sm">Baixar</Button>
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
               <p className="text-sm font-medium">Conta criada</p>
               <p className="text-xs text-muted-foreground">01/02/2025 às 14:30</p>
             </div>
           </div>
           <div className="flex items-center gap-4">
             <div className="w-2 h-2 bg-blue-500 rounded-full" />
             <div className="flex-1">
               <p className="text-sm font-medium">Documento anexado</p>
               <p className="text-xs text-muted-foreground">01/02/2025 às 14:35</p>
             </div>
           </div>
         </div>
       </CardContent>
     </Card>
   </div>
 )
}