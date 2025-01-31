// app/catalog/products/[id]/page.tsx
import { ArrowLeft, Edit, ChevronRight, Package, DollarSign, Box } from "lucide-react"
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

export default function ProductDetailsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <a href="/catalog/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </a>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Detalhes do Produto</h1>
        </div>
        <Button asChild>
          <a href="/catalog/products/1/edit">
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </a>
        </Button>
      </div>

      <Tabs defaultValue="details" className="space-y-6">
        <TabsList>
          <TabsTrigger value="details">Detalhes</TabsTrigger>
          <TabsTrigger value="sales">Vendas</TabsTrigger>
          <TabsTrigger value="promotions">Promoções</TabsTrigger>
          <TabsTrigger value="history">Histórico</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <div className="grid gap-6 grid-cols-3">
            <div className="col-span-2 space-y-6">
              {/* Informações Principais */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <img 
                      src="/placeholder-product.png" 
                      alt="Produto" 
                      className="w-40 h-40 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-2xl font-semibold">Produto Exemplo</h2>
                          <p className="text-muted-foreground">SKU: PRD-00001</p>
                        </div>
                        <Badge variant="success" className="bg-green-100 text-green-800">
                          Ativo
                        </Badge>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Marca</p>
                          <p className="font-medium">Marca Exemplo</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Categoria</p>
                          <p className="font-medium">Categoria <ChevronRight className="inline-block h-4 w-4" /> Subcategoria</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Especificações */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Especificações</h3>
                  <Separator className="mb-4" />

                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Miligramas (mg)</p>
                      <p className="font-medium">10mg</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Mililitros (ml)</p>
                      <p className="font-medium">30ml</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Gotas por Frasco</p>
                      <p className="font-medium">60 gotas</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Peso Líquido</p>
                      <p className="font-medium">50g</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Peso Bruto</p>
                      <p className="font-medium">75g</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Descrição */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Descrição do Produto</h3>
                  <Separator className="mb-4" />
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Cards Laterais */}
            <div className="space-y-6">
              {/* Preços */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="h-5 w-5 text-muted-foreground" />
                    <h3 className="text-lg font-semibold">Preços</h3>
                  </div>
                  <Separator className="mb-4" />
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Preço (BRL)</p>
                      <p className="text-2xl font-semibold">R$ 199,90</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Preço (USD)</p>
                      <p className="text-2xl font-semibold">$ 39.98</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Estoque */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Package className="h-5 w-5 text-muted-foreground" />
                    <h3 className="text-lg font-semibold">Estoque</h3>
                  </div>
                  <Separator className="mb-4" />
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Estoque Atual</p>
                      <p className="text-2xl font-semibold">150</p>
                      <p className="text-sm text-muted-foreground">Mínimo: 50 unidades</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vendas */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Box className="h-5 w-5 text-muted-foreground" />
                    <h3 className="text-lg font-semibold">Vendas</h3>
                  </div>
                  <Separator className="mb-4" />
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Vendido</p>
                      <p className="text-2xl font-semibold">1.234</p>
                      <p className="text-sm text-muted-foreground">Últimos 30 dias</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sales">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Histórico de Vendas</h2>
              <Separator className="mb-4" />
              
              <div className="space-y-4">
                {[1,2,3].map((item) => (
                  <div key={item} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Pedido #{String(item).padStart(6, '0')}</p>
                      <p className="text-sm text-muted-foreground">Cliente: João Silva</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">R$ 199,90</p>
                      <p className="text-sm text-muted-foreground">01/01/2025</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="promotions">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Promoções Ativas</h2>
                <Button asChild>
                  <a href="/catalog/promotions/new">Nova Promoção</a>
                </Button>
              </div>
              <Separator className="mb-4" />
              
              <div className="space-y-4">
                {[1,2].map((item) => (
                  <div key={item} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Promoção de {item === 1 ? 'Natal' : 'Verão'}</p>
                      <p className="text-sm text-muted-foreground">
                        {item === 1 ? '20% de desconto' : 'Compre 2, Leve 3'}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge variant="success" className="bg-green-100 text-green-800">
                        Ativa
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">Até 31/01/2025</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Histórico de Alterações</h2>
              <Separator className="mb-4" />
              
              <div className="space-y-4">
                {[1,2,3].map((item) => (
                  <div key={item} className="flex gap-4 items-start">
                    <div className="w-32 text-sm text-muted-foreground">01/01/2025</div>
                    <div>
                      <p className="text-sm">Alteração no campo "Preço" de R$ 179,90 para R$ 199,90</p>
                      <p className="text-sm text-muted-foreground">Por: Usuário Exemplo</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}