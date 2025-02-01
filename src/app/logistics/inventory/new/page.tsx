// src/app/logistics/inventory/new/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Upload, Plus } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function NewInventoryPage() {
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
              <h1 className="text-3xl font-bold text-gray-900">Nova Movimentação</h1>
              <p className="text-gray-500 mt-1">Registre uma nova entrada ou saída no estoque</p>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <form className="space-y-6">
              {/* Seção: Informações Básicas */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Tipo de Movimentação*</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entrada">Entrada</SelectItem>
                        <SelectItem value="saida">Saída</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Motivo*</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o motivo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compra">Compra</SelectItem>
                        <SelectItem value="fabricacao">Fabricação</SelectItem>
                        <SelectItem value="ajuste">Ajuste</SelectItem>
                        <SelectItem value="cancelamento">Cancelamento</SelectItem>
                        <SelectItem value="reposicao">Reposição Cliente</SelectItem>
                        <SelectItem value="venda">Venda</SelectItem>
                        <SelectItem value="descarte">Descarte</SelectItem>
                        <SelectItem value="perda">Perda</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="col-span-2">
                    <Alert>
                      <AlertDescription>
                        O sistema registrará automaticamente o usuário logado e a data atual para esta movimentação.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </div>

              {/* Seção: Produto e Custos */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Produto*</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o produto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="prod1">Produto A</SelectItem>
                        <SelectItem value="prod2">Produto B</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Quantidade*</Label>
                    <Input type="number" placeholder="0" />
                  </div>

                  <div className="col-span-2 space-y-2">
                    <Label>Custo do Produto*</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Tipo</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Tipo de custo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fixo">Valor Fixo</SelectItem>
                            <SelectItem value="percentual">Percentual</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Valor</Label>
                        <Input type="number" placeholder="0,00" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seção: Datas e Lotes */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Data de Fabricação*</Label>
                    <Input type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label>Data de Validade*</Label>
                    <Input type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label>Lote*</Label>
                    <Input placeholder="Número do lote" />
                  </div>

                  <div className="space-y-2">
                    <Label>Batch*</Label>
                    <Input placeholder="Número do batch" />
                  </div>
                </div>
              </div>

              {/* Seção: Localidade e COA */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Localidade do Estoque*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a localidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="courier">Brasil Courrier</SelectItem>
                      <SelectItem value="fazenda">Fazenda</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Certificado de Análise (COA)*</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer">
                    <Input type="file" className="hidden" id="coa-upload" accept=".pdf" />
                    <Label htmlFor="coa-upload" className="cursor-pointer">
                      <Upload className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm text-gray-500">
                        Clique para fazer upload ou arraste o arquivo
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        PDF até 10MB
                      </div>
                    </Label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button variant="outline" asChild>
                  <Link href="/logistics">Cancelar</Link>
                </Button>
                <Button type="submit" className="flex items-center gap-2">
                  <Plus size={16} />
                  Criar Movimentação
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}