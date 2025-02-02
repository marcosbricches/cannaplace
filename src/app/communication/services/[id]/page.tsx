// src/app/communication/services/[id]/page.tsx
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ServiceDetails() {
 return (
   <div className="container mx-auto py-10 space-y-8">
     {/* Header */}
     <div className="flex items-center justify-between">
       <div className="space-y-1">
         <div className="flex items-center gap-4">
           <h1 className="text-3xl font-bold tracking-tight">Atendimento #123</h1>
           <Badge>ABERTO</Badge>
         </div>
         <p className="text-muted-foreground">
           Visualização detalhada do atendimento
         </p>
       </div>
       <div className="flex items-center gap-4">
         <Link
           href="/communication/services/edit"
           className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
         >
           Editar
         </Link>
         <Link
           href="/communication/services"
           className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
         >
           Voltar para lista
         </Link>
       </div>
     </div>

     <div className="grid grid-cols-3 gap-6">
       {/* Informações Principais */}
       <Card className="col-span-2">
         <CardHeader>
           <CardTitle>Detalhes do Atendimento</CardTitle>
           <CardDescription>Informações gerais sobre o atendimento</CardDescription>
         </CardHeader>
         <CardContent className="space-y-6">
           <div className="grid grid-cols-2 gap-6">
             <div>
               <p className="text-sm font-medium text-muted-foreground">Cliente</p>
               <p className="text-lg">João Silva</p>
             </div>
             <div>
               <p className="text-sm font-medium text-muted-foreground">Data de Abertura</p>
               <p className="text-lg">01/02/2025</p>
             </div>
           </div>

           <Separator />

           <div className="grid grid-cols-2 gap-6">
             <div>
               <p className="text-sm font-medium text-muted-foreground">Tipo de Atendimento</p>
               <p className="text-lg">Proposta</p>
             </div>
             <div>
               <p className="text-sm font-medium text-muted-foreground">Pedido Relacionado</p>
               <p className="text-lg">#456789</p>
             </div>
           </div>

           <Separator />

           <div>
             <p className="text-sm font-medium text-muted-foreground mb-2">Observações</p>
             <p className="text-base">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             </p>
           </div>
         </CardContent>
       </Card>

       {/* Card Lateral */}
       <Card>
         <CardHeader>
           <CardTitle>Informações SAC</CardTitle>
           <CardDescription>Detalhes da solicitação SAC</CardDescription>
         </CardHeader>
         <CardContent className="space-y-6">
           <div>
             <p className="text-sm font-medium text-muted-foreground">Tipo de Solicitação</p>
             <p className="text-lg">Troca</p>
           </div>

           <Separator />

           <div>
             <p className="text-sm font-medium text-muted-foreground">Status do Atendimento</p>
             <Badge className="mt-2">ABERTO</Badge>
           </div>

           <Separator />

           <div>
             <p className="text-sm font-medium text-muted-foreground">Data Última Atualização</p>
             <p className="text-lg">01/02/2025</p>
           </div>
         </CardContent>
       </Card>
     </div>
   </div>
 )
}