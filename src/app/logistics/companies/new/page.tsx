// src/app/logistics/companies/new/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function NewLogisticsCompanyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto p-8">
        <div className="mb-8">
          <Link href="/logistics" className="text-gray-500 flex items-center gap-2 mb-4">
            <ArrowLeft size={16} />
            Voltar
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Nova Empresa Logística</h1>
          <p className="text-gray-500 mt-1">Cadastre uma nova empresa de logística</p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 space-y-2">
                  <Label>Razão Social</Label>
                  <Input placeholder="Nome da empresa" />
                </div>

                <div className="space-y-2">
                  <Label>CNPJ/EIN</Label>
                  <Input placeholder="00.000.000/0000-00" />
                </div>

                <div className="space-y-2">
                  <Label>Data de Contratação</Label>
                  <Input type="date" />
                </div>

                <div className="space-y-2">
                  <Label>Nome do Representante Legal</Label>
                  <Input placeholder="Nome completo" />
                </div>

                <div className="space-y-2">
                  <Label>CPF do Representante</Label>
                  <Input placeholder="000.000.000-00" />
                </div>

                <div className="space-y-2">
                  <Label>E-mail</Label>
                  <Input type="email" placeholder="email@empresa.com" />
                </div>

                <div className="space-y-2">
                  <Label>Telefone/WhatsApp</Label>
                  <Input placeholder="+55 (00) 00000-0000" />
                </div>

                <div className="col-span-2 space-y-4">
                  <Label>Endereço</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <Input placeholder="CEP" />
                    <Input className="col-span-2" placeholder="Logradouro" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Input placeholder="Número" />
                    <Input className="col-span-2" placeholder="Complemento" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Input placeholder="Bairro" />
                    <Input placeholder="Cidade" />
                    <Input placeholder="Estado" />
                  </div>
                </div>

                <div className="col-span-2 space-y-2">
                  <Label>Dados Bancários</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Banco" />
                    <Input placeholder="Agência" />
                    <Input placeholder="Conta" />
                    <Input placeholder="Chave PIX" />
                  </div>
                </div>

                <div className="col-span-2 space-y-2">
                  <Label>Valores</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Valor variável por frete" type="number" />
                    <Input placeholder="Spread do Frete (%)" type="number" />
                  </div>
                </div>

                <div className="col-span-2 space-y-2">
                  <Label>Observações</Label>
                  <textarea 
                    className="w-full h-24 px-3 py-2 rounded-md border" 
                    placeholder="Informações adicionais..."
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="outline" asChild>
                  <Link href="/logistics">Cancelar</Link>
                </Button>
                <Button type="submit">Salvar Empresa</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}