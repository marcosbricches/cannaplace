// src/app/communication/alerts/[id]/page.tsx
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"

export default function AlertDetails() {
 return (
   <div className="flex flex-col h-full">
     {/* Header Principal */}
     <div className="border-b">
       <div className="flex h-16 items-center px-4 gap-4">
         <div className="flex items-center gap-2 flex-1">
           <h1 className="text-xl font-semibold">Comunicação</h1>
           <Separator orientation="vertical" className="h-6" />
           <Link href="/communication/alerts" className="text-xl text-muted-foreground hover:text-primary">
             Alertas
           </Link>
           <Separator orientation="vertical" className="h-6" />
           <h2 className="text-xl">Alerta de Estoque Mínimo</h2>
         </div>
         <div className="flex items-center gap-2">
           <Link href="/communication/alerts/edit">
             <Button variant="outline">Editar</Button>
           </Link>
           <Button variant="default">Ativar/Desativar</Button>
         </div>
       </div>
     </div>

     {/* Conteúdo Principal */}
     <div className="flex-1 p-6">
       <div className="max-w-[1000px] mx-auto space-y-6">
         {/* Status do Alerta */}
         <div className="flex items-center justify-between p-4 rounded-lg border bg-background">
           <div className="space-y-1">
             <p className="text-sm font-medium text-muted-foreground">Status do Alerta</p>
             <Badge variant="default" className="text-base">ATIVO</Badge>
           </div>
           <div className="flex items-center gap-8">
             <div className="text-right">
               <p className="text-sm font-medium text-muted-foreground">Criado em</p>
               <p className="text-sm">01/02/2025</p>
             </div>
             <div className="text-right">
               <p className="text-sm font-medium text-muted-foreground">Última execução</p>
               <p className="text-sm">01/02/2025 13:45</p>
             </div>
           </div>
         </div>

         {/* Informações do Alerta */}
         <Card>
           <CardHeader>
             <CardTitle>Informações do Alerta</CardTitle>
           </CardHeader>
           <CardContent className="space-y-6">
             <div className="grid grid-cols-2 gap-6">
               <div className="space-y-1">
                 <p className="text-sm font-medium text-muted-foreground">Nome</p>
                 <p>Alerta de Estoque Mínimo</p>
               </div>
               <div className="space-y-1">
                 <p className="text-sm font-medium text-muted-foreground">Tipo</p>
                 <p>Estoque</p>
               </div>
             </div>

             <Separator />

             <div className="space-y-1">
               <p className="text-sm font-medium text-muted-foreground">Descrição</p>
               <p>Alerta quando o estoque de qualquer produto atingir o mínimo estabelecido</p>
             </div>
           </CardContent>
         </Card>

         {/* Condições */}
         <Card>
           <CardHeader>
             <CardTitle>Condições de Disparo</CardTitle>
           </CardHeader>
           <CardContent className="space-y-4">
             {[
               { campo: 'Estoque Atual', condicao: 'Menor que', valor: 'Estoque Mínimo' },
               { campo: 'Status do Produto', condicao: 'Igual a', valor: 'Ativo' }
             ].map((condicao, index) => (
               <div key={index} className="flex items-center gap-2 p-3 rounded-md border bg-muted/40">
                 <Badge variant="outline" className="font-normal">{condicao.campo}</Badge>
                 <span className="text-muted-foreground">{condicao.condicao}</span>
                 <Badge variant="outline" className="font-normal">{condicao.valor}</Badge>
               </div>
             ))}
           </CardContent>
         </Card>

         {/* Canais de Notificação */}
         <Card>
           <CardHeader>
             <CardTitle>Canais de Notificação</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="space-y-4">
               <div className="flex items-center justify-between">
                 <div className="space-y-0.5">
                   <p className="font-medium">Sistema</p>
                   <p className="text-sm text-muted-foreground">Exibe no sino de notificações</p>
                 </div>
                 <Switch checked={true} disabled />
               </div>

               <Separator />

               <div className="flex items-center justify-between">
                 <div className="space-y-0.5">
                   <p className="font-medium">E-mail</p>
                   <p className="text-sm text-muted-foreground">Envia por e-mail</p>
                 </div>
                 <Switch checked={false} disabled />
               </div>

               <Separator />

               <div className="flex items-center justify-between">
                 <div className="space-y-0.5">
                   <p className="font-medium">WhatsApp</p>
                   <p className="text-sm text-muted-foreground">Envia via WhatsApp</p>
                 </div>
                 <Switch checked={true} disabled />
               </div>
             </div>
           </CardContent>
         </Card>
       </div>
     </div>
   </div>
 )
}