// src/app/logistics/inventory/[id]/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, Edit } from "lucide-react"

export default function InventoryDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-8">
        <div className="mb-8">
          <Link href="/logistics" className="text-gray-500 flex items-center gap-2 mb-4">
            <ArrowLeft size={16} />
            Voltar
          </Link>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Movimentação #{params.id}</h1>
              <p className="text-gray-500 mt-1">Detalhes da movimentação de estoque</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link href={`/logistics/inventory/${params.id}/edit`} className="flex items-center gap-2">
                  <Edit size={16} />
                  Editar
                </Link>
              </Button>
              <Badge className="bg-green-100 text-green-800">Concluído</Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Informações Básicas</h3>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">Tipo</div>
                <div className="font-medium">Entrada</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Data</div>
                <div className="font-medium">01/02/2025</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Usuário</div>
                <div className="font-medium">João Silva</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Motivo</div>
                <div className="font-medium">Compra</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Produto</h3>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">Nome</div>
                <div className="font-medium">Produto A</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">SKU</div>
                <div className="font-medium">SKU123</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Custo</div>
                <div className="font-medium">R$ 100,00</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Quantidade</div>
                <div className="font-medium">50 unidades</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Datas</h3>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">Fabricação</div>
                <div className="font-medium">01/01/2025</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Validade</div>
                <div className="font-medium">01/01/2026</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Lote</div>
                <div className="font-medium">LOT123</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Batch</div>
                <div className="font-medium">BAT456</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Localização</h3>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">Localidade</div>
                <div className="font-medium">Brasil Courrier</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Depósito</div>
                <div className="font-medium">Hub de Distribuição</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Certificado de Análise (COA)</h3>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <FileText size={24} className="text-gray-400" />
              <div className="flex-1">
                <div className="font-medium">COA_Produto_A_Lote123.pdf</div>
                <div className="text-sm text-gray-500">PDF • 2.5 MB</div>
              </div>
              <Button variant="outline" size="sm">Download</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}