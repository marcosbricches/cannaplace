// app/catalog/categories/[id]/page.tsx
import { ArrowLeft, Edit } from "lucide-react"
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

export default function CategoryDetailsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <a href="/catalog/categories">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </a>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Detalhes da Categoria</h1>
        </div>
        <Button asChild>
          <a href="/catalog/categories/1/edit">
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </a>
        </Button>
      </div>

      <Tabs defaultValue="details" className="space-y-6">
        <TabsList>
          <TabsTrigger value="details">Detalhes</TabsTrigger>
          <TabsTrigger value="products">Produtos</TabsTrigger>
          <TabsTrigger value="history">Histórico</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-8">
                {/* Informações Básicas */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Informações da Categoria</h2>
                    <Badge variant="success" className="bg-green-100 text-green-800">
                      Ativo
                    </Badge>
                  </div>
                  <Separator />
                  
                  <dl className="grid gap-4">
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Nome da Categoria</dt>
                      <dd className="text-sm mt-1">Categoria Exemplo</dd>
                    </div>
                  </dl>
                </div>

                {/* Subcategorias */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Subcategorias</h2>
                  <Separator />
                  
                  <div className="grid gap-4">
                    {[1, 2, 3].map((index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Subcategoria {index}</h3>
                            <p className="text-sm text-muted-foreground">10 produtos vinculados</p>
                          </div>
                          <Badge variant="success" className="bg-green-100 text-green-800">
                            Ativo
                          </Badge>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Observações */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Observações</h2>
                  <Separator />
                  
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      Observações adicionais sobre a categoria...
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Produtos Vinculados</h2>
                <Separator />
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Produto</TableHead>
                      <TableHead>Subcategoria</TableHead>
                      <TableHead>Marca</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[1, 2, 3].map((index) => (
                      <TableRow key={index}>
                        <TableCell>Produto {index}</TableCell>
                        <TableCell>Subcategoria {index}</TableCell>
                        <TableCell>Marca {index}</TableCell>
                        <TableCell>
                          <Badge variant="success" className="bg-green-100 text-green-800">
                            Ativo
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
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
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-32 text-sm text-muted-foreground">
                        01/01/2025
                      </div>
                      <div>
                        <p className="text-sm">Alteração no campo "Nome" de "Categoria Antiga" para "Categoria Nova"</p>
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