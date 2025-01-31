// app/catalog/products/new/page.tsx
import { ArrowLeft, Upload } from "lucide-react"
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

export default function NewProductPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <a href="/catalog/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </a>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Novo Produto</h1>
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
                    <div className="w-40 h-40 border-2 border-dashed rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                        <span className="text-sm text-muted-foreground mt-2 block">
                          Foto Principal
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="status">Status</Label>
                        <Select>
                          <SelectTrigger id="status">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Ativo</SelectItem>
                            <SelectItem value="inactive">Inativo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sku">SKU *</Label>
                        <Input id="sku" placeholder="Digite o SKU do produto" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome do Produto *</Label>
                      <Input id="name" placeholder="Digite o nome do produto" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brand">Marca *</Label>
                      <Select>
                        <SelectTrigger id="brand">
                          <SelectValue placeholder="Selecione a marca" />
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
                      <Select>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Selecione a categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cat1">Categoria 1</SelectItem>
                          <SelectItem value="cat2">Categoria 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subcategory">Subcategoria *</Label>
                      <Select>
                        <SelectTrigger id="subcategory">
                          <SelectValue placeholder="Selecione a subcategoria" />
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
                    <Input id="mg" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ml">Mililitros (ml)</Label>
                    <Input id="ml" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="drops">Gotas por Frasco</Label>
                    <Input id="drops" type="number" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight-net">Peso Líquido (g)</Label>
                    <Input id="weight-net" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight-gross">Peso Bruto (g)</Label>
                    <Input id="weight-gross" type="number" />
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
                    <Input id="price-brl" type="number" step="0.01" placeholder="R$" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price-usd">Preço (USD) *</Label>
                    <Input id="price-usd" type="number" step="0.01" placeholder="$" />
                  </div>
                </div>
              </div>

              {/* Estoque */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Estoque</h2>
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="min-stock">Estoque Mínimo *</Label>
                  <Input id="min-stock" type="number" />
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
                    placeholder="Digite uma descrição detalhada do produto..."
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline" asChild>
            <a href="/catalog/products">Cancelar</a>
          </Button>
          <Button>Salvar</Button>
        </div>
      </div>
    </div>
  )
}