// src/app/logistics/settings/courier/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch" 
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, AlertCircle } from "lucide-react"

export default function CourierSettingsPage() {
 return (
   <div className="min-h-screen bg-gray-50">
     <div className="max-w-3xl mx-auto p-8">
       <div className="mb-8">
         <Link href="/logistics" className="text-gray-500 flex items-center gap-2 mb-4">
           <ArrowLeft size={16} />
           Voltar
         </Link>
         <div className="flex justify-between items-start">
           <div>
             <h1 className="text-3xl font-bold text-gray-900">Configuração Courier</h1>
             <p className="text-gray-500 mt-1">Configure a integração com a API da Courier</p>
           </div>
           <Badge className="bg-green-100 text-green-800">Online</Badge>
         </div>
       </div>

       <div className="space-y-6">
         <Card>
           <CardHeader>
             <h3 className="text-lg font-semibold">Status da Integração</h3>
           </CardHeader>
           <CardContent>
             <div className="flex items-center justify-between">
               <div className="space-y-1">
                 <div className="font-medium">API Courier</div>
                 <div className="text-sm text-gray-500">Última sincronização: há 5 minutos</div>
               </div>
               <Switch checked />
             </div>
           </CardContent>
         </Card>

         <Card>
           <CardHeader>
             <h3 className="text-lg font-semibold">Credenciais da API</h3>
           </CardHeader>
           <CardContent>
             <div className="space-y-4">
               <div className="space-y-2">
                 <Label>API Key</Label>
                 <Input type="password" value="****************" />
               </div>
               <div className="space-y-2">
                 <Label>API Secret</Label>
                 <Input type="password" value="****************" />
               </div>
               <div className="space-y-2">
                 <Label>Ambiente</Label>
                 <div className="grid grid-cols-2 gap-4">
                   <Button variant="outline" className="justify-center">Homologação</Button>
                   <Button variant="outline" className="justify-center bg-gray-100">Produção</Button>
                 </div>
               </div>
             </div>
           </CardContent>
         </Card>

         <Card>
           <CardHeader>
             <h3 className="text-lg font-semibold">Webhooks</h3>
           </CardHeader>
           <CardContent>
             <div className="space-y-4">
               <div className="space-y-2">
                 <Label>URL de Callback</Label>
                 <Input value="https://api.example.com/webhooks/courier" />
               </div>
               <div className="p-4 bg-amber-50 rounded-lg flex gap-2">
                 <AlertCircle className="text-amber-500 w-5 h-5 flex-shrink-0" />
                 <p className="text-sm text-amber-800">
                   Certifique-se de que esta URL está acessível e pode receber requisições POST.
                 </p>
               </div>
             </div>
           </CardContent>
         </Card>

         <Card>
           <CardHeader>
             <h3 className="text-lg font-semibold">Configurações de Frete</h3>
           </CardHeader>
           <CardContent>
             <div className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <Label>Valor Mínimo (R$)</Label>
                   <Input type="number" placeholder="0,00" />
                 </div>
                 <div className="space-y-2">
                   <Label>Prazo Adicional (dias)</Label>
                   <Input type="number" placeholder="0" />
                 </div>
               </div>
               <div className="space-y-2">
                 <div className="flex items-center justify-between">
                   <Label>Frete Grátis Ativo</Label>
                   <Switch />
                 </div>
                 <Input placeholder="Valor mínimo para frete grátis" type="number" />
               </div>
             </div>
           </CardContent>
         </Card>

         <div className="flex justify-end gap-4">
           <Button variant="outline" asChild>
             <Link href="/logistics">Cancelar</Link>
           </Button>
           <Button type="submit">Salvar Configurações</Button>
         </div>
       </div>
     </div>
   </div>
 )
}