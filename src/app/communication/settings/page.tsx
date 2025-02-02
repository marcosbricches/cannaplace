// src/app/communication/settings/page.tsx
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CommunicationSettings() {
  return (
    <div className="flex flex-col h-full">
      {/* Header Principal */}
      <div className="border-b">
        <div className="flex h-16 items-center px-4 gap-4">
          <div className="flex items-center gap-2 flex-1">
            <h1 className="text-xl font-semibold">Comunicação</h1>
            <Separator orientation="vertical" className="h-6" />
            <h2 className="text-xl">Configurações</h2>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 p-6">
        <div className="max-w-[1000px] mx-auto">
          <Tabs defaultValue="whatsapp" className="space-y-6">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
              <TabsTrigger value="email">E-mail</TabsTrigger>
            </TabsList>

            {/* Configurações WhatsApp */}
            <TabsContent value="whatsapp" className="space-y-6">
            <Card>
  <CardHeader>
    <div className="flex items-center justify-between">
      <div>
        <CardTitle>Templates de Mensagem</CardTitle>
        <CardDescription>Gerencie os modelos de mensagem aprovados</CardDescription>
      </div>
      <Link href="/communication/settings/templates/new">
        <Button variant="outline">Novo Template</Button>
      </Link>
    </div>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      {[
        { id: 1, nome: 'Vencimento de Receita', status: 'Aprovado' },
        { id: 2, nome: 'Confirmação de Pedido', status: 'Aprovado' },
        { id: 3, nome: 'Atualização de Status', status: 'Em Análise' }
      ].map((template) => (
        <div key={template.id} className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <p className="font-medium">{template.nome}</p>
            <p className="text-sm text-muted-foreground">Template ID: {template.id}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={template.status === 'Aprovado' ? 'default' : 'secondary'}>
              {template.status}
            </Badge>
            <Link href={`/communication/settings/templates/${template.id}`}>
              <Button variant="ghost">Editar</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </CardContent>
</Card>

              <Card>
                <CardHeader>
                  <CardTitle>Templates de Mensagem</CardTitle>
                  <CardDescription>Gerencie os modelos de mensagem aprovados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { nome: 'Vencimento de Receita', status: 'Aprovado' },
                      { nome: 'Confirmação de Pedido', status: 'Aprovado' },
                      { nome: 'Atualização de Status', status: 'Em Análise' }
                    ].map((template, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{template.nome}</p>
                          <p className="text-sm text-muted-foreground">Template ID: {index + 1}</p>
                        </div>
                        <Badge variant={template.status === 'Aprovado' ? 'default' : 'secondary'}>
                          {template.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Configurações E-mail */}
            <TabsContent value="email" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Configurações de E-mail</CardTitle>
                      <CardDescription>Configure suas credenciais de envio de e-mail</CardDescription>
                    </div>
                    <Badge variant="outline">Configurado</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>E-mail Remetente</Label>
                      <Input type="email" placeholder="email@exemplo.com" />
                    </div>
                    <div className="space-y-2">
                      <Label>Nome Remetente</Label>
                      <Input placeholder="Nome que aparecerá nos e-mails" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Servidor SMTP</Label>
                      <Input placeholder="smtp.exemplo.com" />
                    </div>
                    <div className="space-y-2">
                      <Label>Porta</Label>
                      <Input placeholder="587" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Usuário</Label>
                      <Input placeholder="Usuário SMTP" />
                    </div>
                    <div className="space-y-2">
                      <Label>Senha</Label>
                      <Input type="password" placeholder="Senha SMTP" />
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-4">
                    <Button variant="outline">Testar Conexão</Button>
                    <Button>Salvar Alterações</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Templates de E-mail</CardTitle>
                  <CardDescription>Gerencie os modelos de e-mail disponíveis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { nome: 'Boas-vindas', tipo: 'Transacional' },
                      { nome: 'Confirmação de Pedido', tipo: 'Transacional' },
                      { nome: 'Alerta de Vencimento', tipo: 'Notificação' }
                    ].map((template, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{template.nome}</p>
                          <p className="text-sm text-muted-foreground">Tipo: {template.tipo}</p>
                        </div>
                        <Button variant="ghost">Editar Template</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}