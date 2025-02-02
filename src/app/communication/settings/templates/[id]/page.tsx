// src/app/communication/settings/templates/[id]/page.tsx
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function TemplateEdit() {
  return (
    <div className="flex flex-col h-full">
      {/* Header Principal */}
      <div className="border-b">
        <div className="flex h-16 items-center px-4 gap-4">
          <div className="flex items-center gap-2 flex-1">
            <h1 className="text-xl font-semibold">Comunicação</h1>
            <Separator orientation="vertical" className="h-6" />
            <Link href="/communication/settings" className="text-xl text-muted-foreground hover:text-primary">
              Configurações
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <h2 className="text-xl">Editar Template</h2>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/communication/settings">
              <Button variant="outline">Cancelar</Button>
            </Link>
            <Button>Salvar Template</Button>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 p-6">
        <div className="max-w-[1000px] mx-auto space-y-6">
          {/* Informações Básicas */}
          <Card>
            <CardHeader>
              <CardTitle>Informações do Template</CardTitle>
              <CardDescription>Configure as informações básicas do template</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Nome do Template</Label>
                  <Input placeholder="Ex: Confirmação de Pedido" />
                </div>
                <div className="space-y-2">
                  <Label>Tipo de Comunicação</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="email">E-mail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Descrição</Label>
                <Textarea 
                  placeholder="Descreva o objetivo deste template"
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Conteúdo do Template */}
          <Card>
            <CardHeader>
              <CardTitle>Conteúdo do Template</CardTitle>
              <CardDescription>Configure o conteúdo e as variáveis do template</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 border rounded-md bg-muted/40">
                  <p className="text-sm font-medium mb-2">Variáveis Disponíveis</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      '{nome_cliente}',
                      '{numero_pedido}',
                      '{data_vencimento}',
                      '{valor_total}',
                      '{status_pedido}'
                    ].map((variavel, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer">
                        {variavel}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Assunto (apenas para e-mail)</Label>
                  <Input placeholder="Ex: Seu pedido {numero_pedido} foi confirmado" />
                </div>

                <div className="space-y-2">
                  <Label>Corpo da Mensagem</Label>
                  <Textarea 
                    className="min-h-[300px] font-mono"
                    placeholder="Digite o conteúdo do seu template aqui..."
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>Visualize como sua mensagem será exibida</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 border rounded-md bg-muted/40">
                <div className="space-y-2">
                  <p className="font-medium">Exemplo de Visualização:</p>
                  <p className="text-sm text-muted-foreground">
                    Olá João,<br/><br/>
                    Seu pedido #12345 foi confirmado com sucesso!<br/>
                    Valor total: R$ 150,00<br/><br/>
                    Obrigado por sua compra.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}