// app/catalog/products/[id]/edit/page.tsx
import { ArrowLeft, Upload, Save, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function EditProductPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <a href="/catalog/products/1">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </a>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Editar Produto</h1>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Excluir Produto
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
              <AlertDialogDescription>
                Esta ação não pode ser desfeita. O produto será permanentemente excluído.
                Histórico de vendas e dados relacionados serão mantidos para fins de relatório.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                Excluir
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-8">
              {/* Informações Básicas */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Informações Básicas</h2>
                <Separator />
                
                <div className="grid gap-6">
                  <div className="flex items-center gap-6">
                    <div className="relative w-40 h-40">
                      <img 
                        src="/placeholder-product.png" 
                        alt="Produto" 
                        className="w-40 h-40 rounded-lg object-cover"
                      />
                      <Button 
                        variant="ghost" 
                        className="absolute bottom-2 right-2 h-8 w-8 p-0 bg-background/80 backdrop-blur-sm"
                      >
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="status">Status</Label>
                        <Select defaultValue="active">
                          <SelectTrigger id="status">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Ativo</SelectItem>
                            <SelectItem value="inactive">Inativo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sku">SKU *</Label>
                        <Input id="sku" defaultValue="PRD-00001" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome do Produto *</Label>
                      <Input id="name" defaultValue="Produto Exemplo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brand">Marca *</Label>
                      <Select defaultValue="marca1">
                        <SelectTrigger id="brand">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="marca1">Marca 1</SelectItem>
                          <SelectItem value="marca2">Marca 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Categoria *</Label>
                      <Select defaultValue="cat1">
                        <SelectTrigger id="category">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cat1">Categoria 1</SelectItem>
                          <SelectItem value="cat2">Categoria 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subcategory">Subcategoria *</Label>
                      <Select defaultValue="sub1">
                        <SelectTrigger id="subcategory">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sub1">Subcategoria 1</SelectItem>
                          <SelectItem value="sub2">Subcategoria 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Especificações */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Especificações</h2>
                <Separator />
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="mg">Miligramas (mg)</Label>
                    <Input id="mg" type="number" defaultValue="10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ml">Mililitros (ml)</Label>
                    <Input id="ml" type="number" defaultValue="30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="drops">Gotas por Frasco</Label>
                    <Input id="drops" type="number" defaultValue="60" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight-net">Peso Líquido (g)</Label>
                    <Input id="weight-net" type="number" defaultValue="50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight-gross">Peso Bruto (g)</Label>
                    <Input id="weight-gross" type="number" defaultValue="75" />
                  </div>
                </div>
              </div>

              {/* Preços */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Preços</h2>
                <Separator />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price-brl">Preço (BRL) *</Label>
                    <Input id="price-brl" type="number" step="0.01" defaultValue="199.90" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price-usd">Preço (USD) *</Label>
                    <Input id="price-usd" type="number" step="0.01" defaultValue="39.98" />
                  </div>
                </div>
              </div>

              {/* Estoque */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Estoque</h2>
                <Separator />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="stock">Estoque Atual</Label>
                    <Input id="stock" type="number" defaultValue="150" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="min-stock">Estoque Mínimo *</Label>
                    <Input id="min-stock" type="number" defaultValue="50" />
                  </div>
                </div>
              </div>

              {/* Descrição */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Descrição</h2>
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="description">Descrição do Produto</Label>
                  <Textarea 
                    id="description"
                    className="min-h-[100px]"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline" asChild>
            <a href="/catalog/products/1">Cancelar</a>
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Salvar Alterações
          </Button>
        </div>
      </div>
    </div>
  )
}