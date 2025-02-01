// src/app/logistics/companies/[id]/edit/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save } from "lucide-react"

export default function EditCompanyPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto p-8">
        <div className="mb-8">
          <Link href={`/logistics/companies/${params.id}`} className="text-gray-500 flex items-center gap-2 mb-4">
            <ArrowLeft size={16} />
            Voltar
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Editar Empresa</h1>
          <p className="text-gray-500 mt-1">Altere os dados da empresa logística</p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <form className="space-y-8">
              {/* Informações Básicas */}
              <div className="space-y-6">
                <h2 className="text-lg font-semibold">Informações Básicas</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 space-y-2">
                    <Label>Status*</Label>
                    <Select defaultValue="ativo">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ativo">Ativo</SelectItem>
                        <SelectItem value="inativo">Inativo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="col-span-2 space-y-2">
                    <Label>Razão Social*</Label>
                    <Input defaultValue="Transportadora XYZ LTDA" />
                  </div>

                  <div className="space-y-2">
                    <Label>CNPJ/EIN*</Label>
                    <Input defaultValue="12.345.678/0001-90" />
                  </div>

                  <div className="space-y-2">
                    <Label>Data de Contratação*</Label>
                    <Input type="date" defaultValue="2025-01-01" />
                  </div>
                </div>
              </div>

              {/* Representante Legal */}
              <div className="space-y-6">
                <h2 className="text-lg font-semibold">Representante Legal</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Nome do Representante*</Label>
                    <Input defaultValue="Maria Santos" />
                  </div>

                  <div className="space-y-2">
                    <Label>CPF do Representante*</Label>
                    <Input defaultValue="123.456.789-00" />
                  </div>
                </div>
              </div>

              {/* Contato */}
              <div className="space-y-6">
                <h2 className="text-lg font-semibold">Contato</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>E-mail*</Label>
                    <Input type="email" defaultValue="contato@transportadoraxyz.com" />
                  </div>

                  <div className="space-y-2">
                    <Label>Telefone/WhatsApp*</Label>
                    <Input defaultValue="+55 (11) 99999-9999" />
                  </div>
                </div>
              </div>

              {/* Endereço */}
              <div className="space-y-6">
                <h2 className="text-lg font-semibold">Endereço</h2>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-2">
                    <Label>CEP*</Label>
                    <Input defaultValue="01234-567" />
                  </div>

                  <div className="col-span-4">
                    <Label>Logradouro*</Label>
                    <Input defaultValue="Rua Exemplo" />
                  </div>

                  <div className="col-span-2">
                    <Label>Número*</Label>
                    <Input defaultValue="123" />
                  </div>

                  <div className="col-span-4">
                    <Label>Complemento</Label>
                    <Input defaultValue="Sala 456" />
                  </div>

                  <div className="col-span-2">
                    <Label>Bairro*</Label>
                    <Input defaultValue="Centro" />
                  </div>

                  <div className="col-span-2">
                    <Label>Cidade*</Label>
                    <Input defaultValue="São Paulo" />
                  </div>

                  <div className="col-span-2">
                    <Label>Estado*</Label>
                    <Input defaultValue="SP" />
                  </div>
                </div>
              </div>

              {/* Dados Bancários */}
              <div className="space-y-6">
                <h2 className="text-lg font-semibold">Dados Bancários</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Banco*</Label>
                    <Input defaultValue="Banco XYZ (999)" />
                  </div>

                  <div className="space-y-2">
                    <Label>Agência*</Label>
                    <Input defaultValue="1234" />
                  </div>

                  <div className="space-y-2">
                    <Label>Conta*</Label>
                    <Input defaultValue="12345-6" />
                  </div>

                  <div className="space-y-2">
                    <Label>Chave PIX</Label>
                    <Input defaultValue="12.345.678/0001-90" />
                  </div>
                </div>
              </div>

              {/* Valores */}
              <div className="space-y-6">
                <h2 className="text-lg font-semibold">Valores</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Valor Variável por Frete*</Label>
                    <Input type="number" defaultValue="15" />
                  </div>

                  <div className="space-y-2">
                    <Label>Spread do Frete (%)*</Label>
                    <Input type="number" defaultValue="10" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-6">
                <Button variant="outline" asChild>
                  <Link href={`/logistics/companies/${params.id}`}>Cancelar</Link>
                </Button>
                <Button type="submit" className="flex items-center gap-2">
                  <Save size={16} />
                  Salvar Alterações
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}