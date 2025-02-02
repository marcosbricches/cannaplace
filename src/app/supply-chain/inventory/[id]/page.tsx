// src/app/supply-chain/inventory/[id]/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InventoryView({ params }: any) {
  return (
    <div className="container mx-auto py-8 max-w-5xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Detalhes do Produto em Estoque</h1>
          <p className="text-muted-foreground mt-1">Visualize as informações completas do produto</p>
        </div>
        <div className="space-x-2">
          <Link href="/supply-chain/inventory">
            <Button variant="outline">Voltar</Button>
          </Link>
          <Link href={`/supply-chain/inventory/${params.id}/edit`}>
            <Button>Editar</Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações do Produto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Produto</h3>
                <p className="text-lg">Produto ABC</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">SKU</h3>
                <p className="text-lg">PRD-001</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Quantidade</h3>
                <p className="text-lg">150 unidades</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Custo Unitário</h3>
                <p className="text-lg">R$ 25,00</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Localidade</h3>
                <p className="text-lg">Brasil Courrier</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Status</h3>
                <p className="text-lg">Disponível</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informações do Lote</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Número do Lote</h3>
                <p className="text-lg">LOT-2024-001</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Data de Fabricação</h3>
                <p className="text-lg">01/01/2024</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Data de Validade</h3>
                <p className="text-lg">01/01/2025</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Certificado de Análise (COA)</h3>
                <p className="text-lg">
                  <Link href="#" className="text-primary hover:underline">
                    Visualizar COA
                  </Link>
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Batch</h3>
                <p className="text-lg">BCH-001</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Movimentações Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Entrada por Compra</p>
                  <p className="text-sm text-muted-foreground">15/02/2024 - 100 unidades</p>
                </div>
                <span className="text-green-600">+ R$ 2.500,00</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Saída por Venda</p>
                  <p className="text-sm text-muted-foreground">10/02/2024 - 50 unidades</p>
                </div>
                <span className="text-red-600">- R$ 1.250,00</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}