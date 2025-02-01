// src/app/logistics/inventory/[id]/edit/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Upload, Save } from "lucide-react"

export default function EditInventoryPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto p-8">
        <div className="mb-8">
          <Link href={`/logistics/inventory/${params.id}`} className="text-gray-500 flex items-center gap-2 mb-4">
            <ArrowLeft size={16} />
            Voltar
          </Link>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Editar Movimentação #{params.id}</h1>
              <p className="text-gray-500 mt-1">Altere os dados da movimentação de estoque</p>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Tipo de Movimentação</Label>
                  <Select defaultValue="entrada">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entrada">Entrada</SelectItem>
                      <SelectItem value="saida">Saída</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Motivo</Label>
                  <Select defaultValue="compra">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="compra">Compra</SelectItem>
                      <SelectItem value="fabricacao">Fabricação</SelectItem>
                      <SelectItem value="ajuste">Ajuste</SelectItem>
                      <SelectItem value="cancelamento">Cancelamento</SelectItem>
                      <SelectItem value="reposicao">Reposição</SelectItem>
                      <SelectItem value="venda">Venda</SelectItem>
                      <SelectItem value="descarte">Descarte</SelectItem>
                      <SelectItem value="perda">Perda</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Produto</Label>
                  <Select defaultValue="prod1">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="prod1">Produto A</SelectItem>
                      <SelectItem value="prod2">Produto B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Custo do Produto</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Tipo</Label>
                      <Select defaultValue="fixo">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fixo">Valor Fixo</SelectItem>
                          <SelectItem value="percentual">Percentual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Valor</Label>
                      <Input type="number" defaultValue="100" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Data de Fabricação</Label>
                  <Input type="date" defaultValue="2025-01-01" />
                </div>

                <div className="space-y-2">
                  <Label>Data de Validade</Label>
                  <Input type="date" defaultValue="2026-01-01" />
                </div>

                <div className="space-y-2">
                  <Label>Lote</Label>
                  <Input defaultValue="LOT123" />
                </div>

                <div className="space-y-2">
                  <Label>Batch</Label>
                  <Input defaultValue="BAT456" />
                </div>

                <div className="col-span-2 space-y-2">
                  <Label>Localidade do Estoque</Label>
                  <Select defaultValue="courier">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="courier">Brasil Courrier</SelectItem>
                      <SelectItem value="fazenda">Fazenda</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="col-span-2 space-y-2">
                  <Label>Certificado de Análise (COA)</Label>
                  <div className="border-2 border-dashed rounded-lg p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="font-medium">COA_Produto_A_Lote123.pdf</div>
                        <div className="text-sm text-gray-500">PDF • 2.5 MB</div>
                      </div>
                      <Button variant="outline" size="sm" type="button">Alterar</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button variant="outline" asChild>
                  <Link href={`/logistics/inventory/${params.id}`}>Cancelar</Link>
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