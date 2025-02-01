// src/app/financial/commissions/[id]/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ViewCommission() {
 return (
   <div className="container mx-auto py-10">
     <div className="flex justify-between items-center mb-6">
       <h1 className="text-2xl font-bold">Detalhes da Comissão</h1>
       <div className="space-x-2">
         <a href="/financial/commissions">
           <Button variant="outline">Voltar</Button>
         </a>
         <a href="/financial/commissions/123/edit">
           <Button>Editar</Button>
         </a>
       </div>
     </div>

     <Card>
       <CardHeader>
         <CardTitle>Informações da Comissão</CardTitle>
       </CardHeader>
       <CardContent className="space-y-6">
         <div className="grid gap-4">
           <div>
             <h3 className="font-medium mb-1">Tipo de Comissão</h3>
             <p className="text-muted-foreground">Consultor</p>
           </div>

           <div>
             <h3 className="font-medium mb-1">Tipo de Venda</h3>
             <p className="text-muted-foreground">Venda com Intervenção</p>
           </div>

           <Separator />

           <div>
             <h3 className="font-medium mb-1">Comissão Principal</h3>
             <p className="text-muted-foreground">15%</p>
             <span className="text-sm text-muted-foreground">
               Aplicada em vendas diretas e consultor principal
             </span>
           </div>

           <div>
             <h3 className="font-medium mb-1">Comissão Secundária</h3>
             <p className="text-muted-foreground">5%</p>
             <span className="text-sm text-muted-foreground">
               Aplicada em vendas com intervenção e consultor secundário
             </span>
           </div>

           <div>
             <h3 className="font-medium mb-1">Status</h3>
             <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
               Ativo
             </span>
           </div>
         </div>

         <Separator />

         <div className="grid gap-2">
           <h3 className="font-medium mb-1">Exemplo de Cálculo</h3>
           <div className="text-sm text-muted-foreground space-y-1">
             <p>Venda: R$ 1.000,00</p>
             <p>Desconto: R$ 100,00</p>
             <p>Frete: R$ 140,00</p>
             <p>Base para Comissão: R$ 900,00</p>
             <p className="font-medium text-foreground mt-2">
               Comissão Total: R$ 45,00 (5% de R$ 900,00)
             </p>
           </div>
         </div>
       </CardContent>
     </Card>
   </div>
 )
}