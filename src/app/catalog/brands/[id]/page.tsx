// app/catalog/brands/[id]/page.tsx
import { ArrowLeft, Edit, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function BrandDetailsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <a href="/catalog/brands">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </a>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Detalhes da Marca</h1>
        </div>
        <Button asChild>
          <a href="/catalog/brands/1/edit">
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </a>
        </Button>
      </div>

      <Tabs defaultValue="details" className="space-y-6">
        <TabsList>
          <TabsTrigger value="details">Detalhes</TabsTrigger>
          <TabsTrigger value="documents">Documentos</TabsTrigger>
          <TabsTrigger value="history">Histórico</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-8">
                  {/* Informações Básicas */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold">Informações Básicas</h2>
                      <Badge variant="success" className="bg-green-100 text-green-800">Ativo</Badge>
                    </div>
                    <Separator />
                    
                    <div className="grid gap-6">
                      <div className="flex gap-8">
                        <div className="w-32 h-32 border rounded-lg flex items-center justify-center bg-gray-50">
                          <img src="/placeholder-logo.png" alt="Logo" className="max-w-full max-h-full p-2" />
                        </div>
                        <div className="flex-1">
                          <dl className="grid grid-cols-2 gap-4">
                            <div>
                              <dt className="text-sm font-medium text-muted-foreground">Razão Social</dt>
                              <dd className="text-sm mt-1">Empresa Exemplo LTDA</dd>
                            </div>
                            <div>
                              <dt className="text-sm font-medium text-muted-foreground">CNPJ</dt>
                              <dd className="text-sm mt-1">12.345.678/0001-90</dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Representante Legal */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Representante Legal</h2>
                    <Separator />
                    
                    <dl className="grid grid-cols-2 gap-4">
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Nome</dt>
                        <dd className="text-sm mt-1">João da Silva</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">CPF</dt>
                        <dd className="text-sm mt-1">123.456.789-00</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Contato */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Contato</h2>
                    <Separator />
                    
                    <dl className="grid grid-cols-2 gap-4">
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Telefone/WhatsApp</dt>
                        <dd className="text-sm mt-1">+55 (11) 99999-9999</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">E-mail</dt>
                        <dd className="text-sm mt-1">contato@empresa.com</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Endereço */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Endereço</h2>
                    <Separator />
                    
                    <dl className="grid grid-cols-2 gap-4">
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Endereço Completo</dt>
                        <dd className="text-sm mt-1">
                          Rua Exemplo, 123 - Bairro<br />
                          São Paulo - SP<br />
                          CEP: 01234-567
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* Dados Comerciais */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Dados Comerciais</h2>
                    <Separator />
                    
                    <dl className="grid grid-cols-2 gap-4">
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Take Rate</dt>
                        <dd className="text-sm mt-1">15%</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Subsídio de Frete</dt>
                        <dd className="text-sm mt-1">10% para compras acima de R$ 500,00</dd>
                      </div>
                      <div className="col-span-2">
                        <dt className="text-sm font-medium text-muted-foreground">Observações</dt>
                        <dd className="text-sm mt-1">Informações adicionais sobre a marca...</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Documentos</h2>
                <Separator />
                
                <div className="grid grid-cols-2 gap-4">
                  {['Cartão CNPJ', 'Documentos Pessoais', 'Comprovante de Endereço', 'Contrato'].map((doc) => (
                    <Card key={doc} className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{doc}</h3>
                          <p className="text-sm text-muted-foreground">Atualizado em 01/01/2025</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Visualizar
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Histórico de Alterações</h2>
                <Separator />
                
                <div className="space-y-4">
                  {[1,2,3].map((item) => (
                    <div key={item} className="flex gap-4 items-start">
                      <div className="w-32 text-sm text-muted-foreground">01/01/2025</div>
                      <div>
                        <p className="text-sm">Alteração no campo "Razão Social" de "Antiga LTDA" para "Nova LTDA"</p>
                        <p className="text-sm text-muted-foreground">Por: Usuário Exemplo</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}