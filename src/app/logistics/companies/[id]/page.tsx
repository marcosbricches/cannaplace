// src/app/logistics/companies/[id]/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ArrowLeft, Building, Edit, MapPin, Phone, Mail, FileText, DollarSign } from "lucide-react"

export default function CompanyDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-8">
        <div className="mb-8">
          <Link href="/logistics" className="text-gray-500 flex items-center gap-2 mb-4">
            <ArrowLeft size={16} />
            Voltar
          </Link>
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <Building size={32} className="text-gray-500" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Transportadora XYZ</h1>
                <p className="text-gray-500 mt-1">CNPJ: 12.345.678/0001-90</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link href={`/logistics/companies/${params.id}/edit`} className="flex items-center gap-2">
                  <Edit size={16} />
                  Editar
                </Link>
              </Button>
              <Badge className="bg-green-100 text-green-800">Ativo</Badge>
            </div>
          </div>
        </div>

        <Tabs defaultValue="info" className="space-y-6">
          <TabsList>
            <TabsTrigger value="info">Informações</TabsTrigger>
            <TabsTrigger value="financial">Dados Financeiros</TabsTrigger>
            <TabsTrigger value="documents">Documentos</TabsTrigger>
          </TabsList>

          <TabsContent value="info">
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Dados da Empresa</h3>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div>
                    <div className="text-sm text-gray-500">Razão Social</div>
                    <div className="font-medium">Transportadora XYZ LTDA</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Data de Contratação</div>
                    <div className="font-medium">01/01/2025</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Representante Legal</div>
                    <div className="font-medium">Maria Santos</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">CPF do Representante</div>
                    <div className="font-medium">123.456.789-00</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Contato</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <div>
                      <div className="font-medium">+55 (11) 99999-9999</div>
                      <div className="text-sm text-gray-500">Principal</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <div>
                      <div className="font-medium">contato@transportadoraxyz.com</div>
                      <div className="text-sm text-gray-500">E-mail comercial</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium">Rua Exemplo, 123</div>
                      <div className="text-sm text-gray-500">
                        Bairro Centro, São Paulo - SP
                        <br />
                        CEP: 01234-567
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="financial">
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Dados Bancários</h3>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div>
                    <div className="text-sm text-gray-500">Banco</div>
                    <div className="font-medium">Banco XYZ (999)</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Agência</div>
                    <div className="font-medium">1234</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Conta</div>
                    <div className="font-medium">12345-6</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Chave PIX</div>
                    <div className="font-medium">12.345.678/0001-90</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Valores de Frete</h3>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div>
                    <div className="text-sm text-gray-500">Valor Variável por Frete</div>
                    <div className="font-medium">R$ 15,00 por KG</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Spread do Frete</div>
                    <div className="font-medium">10%</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Documentos</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <FileText size={24} className="text-gray-400" />
                    <div className="flex-1">
                      <div className="font-medium">Contrato de Prestação de Serviços</div>
                      <div className="text-sm text-gray-500">PDF • 1.2 MB</div>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <FileText size={24} className="text-gray-400" />
                    <div className="flex-1">
                      <div className="font-medium">Procuração</div>
                      <div className="text-sm text-gray-500">PDF • 800 KB</div>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}