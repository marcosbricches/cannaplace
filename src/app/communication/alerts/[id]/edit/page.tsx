// src/app/communication/alerts/[action]/page.tsx
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"

export default function AlertForm() {
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
            <h2 className="text-xl">Editar Alerta</h2>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 p-6">
        <div className="max-w-[1000px] mx-auto space-y-6">
          {/* Informações Básicas */}
          <Card>
            <CardHeader>
              <CardTitle>Informações do Alerta</CardTitle>
              <CardDescription>Configure as informações básicas do alerta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Nome do Alerta</Label>
                  <Input placeholder="Digite um nome para identificar o alerta" />
                </div>
                <div className="space-y-2">
                  <Label>Tipo de Alerta</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vencimento">Vencimento</SelectItem>
                      <SelectItem value="estoque">Estoque</SelectItem>
                      <SelectItem value="documentos">Documentos</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Descrição</Label>
                <Textarea 
                  placeholder="Descreva o objetivo deste alerta"
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Condições */}
          <Card>
            <CardHeader>
              <CardTitle>Condições de Disparo</CardTitle>
              <CardDescription>Configure quando este alerta deve ser disparado</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 items-start">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o campo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="estoque">Estoque</SelectItem>
                        <SelectItem value="data">Data</SelectItem>
                        <SelectItem value="status">Status</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Condição" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="igual">Igual a</SelectItem>
                        <SelectItem value="menor">Menor que</SelectItem>
                        <SelectItem value="maior">Maior que</SelectItem>
                      </SelectContent>
                    </Select>

                    <Input placeholder="Valor" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Canais de Notificação */}
          <Card>
            <CardHeader>
              <CardTitle>Canais de Notificação</CardTitle>
              <CardDescription>Selecione onde este alerta será exibido</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Sistema</Label>
                    <div className="text-sm text-muted-foreground">
                      Exibe o alerta no sino de notificações
                    </div>
                  </div>
                  <Switch />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>E-mail</Label>
                    <div className="text-sm text-muted-foreground">
                      Envia o alerta por e-mail
                    </div>
                  </div>
                  <Switch />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>WhatsApp</Label>
                    <div className="text-sm text-muted-foreground">
                      Envia o alerta via WhatsApp
                    </div>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ações */}
          <div className="flex items-center justify-end gap-4">
            <Link href="/communication/alerts">
              <Button variant="outline">Cancelar</Button>
            </Link>
            <Button>Salvar Alterações</Button>
          </div>
        </div>
      </div>
    </div>
  )
}