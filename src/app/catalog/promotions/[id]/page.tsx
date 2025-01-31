// app/catalog/promotions/[id]/page.tsx
import { ArrowLeft, Edit, Timer, Tag, Package, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function PromotionDetailsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <a href="/catalog/promotions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </a>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Detalhes da Promoção</h1>
        </div>
        <Button asChild>
          <a href="/catalog/promotions/1/edit">
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold">Promoção de Natal</h2>
                  <p className="text-muted-foreground mt-1">20% de desconto em produtos selecionados</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Ativa</Badge>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Timer className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Período</p>
                      <p className="font-medium">01/12/2024</p>
                      <p className="text-sm text-muted-foreground">até 31/01/2025</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Tag className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Desconto</p>
                      <p className="font-medium">20%</p>
                      <p className="text-sm text-muted-foreground">Porcentagem</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Package className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Produtos</p>
                      <p className="font-medium">15</p>
                      <p className="text-sm text-muted-foreground">participantes</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="products" className="mt-6">
                <TabsList>
                  <TabsTrigger value="products">Produtos</TabsTrigger>
                  <TabsTrigger value="rules">Regras</TabsTrigger>
                  <TabsTrigger value="history">Histórico</TabsTrigger>
                </TabsList>

                <TabsContent value="products" className="mt-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Produto</TableHead>
                        <TableHead>SKU</TableHead>
                        <TableHead>Preço Original</TableHead>
                        <TableHead>Desconto</TableHead>
                        <TableHead>Preço Final</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[1,2,3].map((item) => (
                        <TableRow key={item}>
                          <TableCell>Produto {item}</TableCell>
                          <TableCell>
                            <span className="font-mono">PRD-{String(item).padStart(5, '0')}</span>
                          </TableCell>
                          <TableCell>R$ {(199.90).toFixed(2)}</TableCell>
                          <TableCell>
                            <Badge variant="outline">20%</Badge>
                          </TableCell>
                          <TableCell>R$ {(159.92).toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="rules" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <h4 className="font-medium">Combinação com outras promoções</h4>
                        <p className="text-sm text-muted-foreground">Não permite combinação com outras promoções ativas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <h4 className="font-medium">Limite por cliente</h4>
                        <p className="text-sm text-muted-foreground">Máximo de 3 produtos por cliente</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <h4 className="font-medium">Valor mínimo</h4>
                        <p className="text-sm text-muted-foreground">Compras acima de R$ 300,00</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="history" className="mt-6">
                  <div className="space-y-4">
                    {[1,2,3].map((item) => (
                      <div key={item} className="flex gap-4 items-start">
                        <div className="w-32 text-sm text-muted-foreground">01/01/2025</div>
                        <div>
                          <p className="text-sm">Alteração no desconto de 15% para 20%</p>
                          <p className="text-sm text-muted-foreground">Por: Usuário Exemplo</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Métricas</h3>
              <Separator className="mb-4" />
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Vendas Realizadas</p>
                  <p className="text-2xl font-semibold">158</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Valor Total em Vendas</p>
                  <p className="text-2xl font-semibold">R$ 25.284,20</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Desconto Total Aplicado</p>
                  <p className="text-2xl font-semibold">R$ 6.321,05</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Top Produtos</h3>
              <Separator className="mb-4" />
              
              <div className="space-y-4">
                {[1,2,3].map((item) => (
                  <div key={item} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Produto {item}</p>
                      <p className="text-sm text-muted-foreground">52 vendas</p>
                    </div>
                    <p className="font-medium">R$ 8.394,80</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}