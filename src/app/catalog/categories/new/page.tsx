// app/catalog/categories/new/page.tsx
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Trash2 } from "lucide-react"

export default function NewCategoryPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <a href="/catalog/categories">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </a>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Nova Categoria</h1>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-8">
              {/* Informações Básicas */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Informações da Categoria</h2>
                <Separator />
                
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Nome da Categoria *</Label>
                    <Input id="name" placeholder="Digite o nome da categoria" />
                  </div>
                </div>
              </div>

              {/* Subcategorias */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Subcategorias</h2>
                  <Button variant="outline">Adicionar Subcategoria</Button>
                </div>
                <Separator />
                
                <div className="space-y-4">
                  {[1, 2, 3].map((index) => (
                    <Card key={index} className="p-4">
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Subcategoria {index}</h3>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`subcategory-${index}`}>Nome da Subcategoria *</Label>
                            <Input 
                              id={`subcategory-${index}`} 
                              placeholder="Digite o nome da subcategoria" 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`subcategory-status-${index}`}>Status</Label>
                            <Select>
                              <SelectTrigger id={`subcategory-status-${index}`}>
                                <SelectValue placeholder="Selecione" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="active">Ativo</SelectItem>
                                <SelectItem value="inactive">Inativo</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Observações */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Observações</h2>
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="observations">Observações Gerais</Label>
                  <textarea 
                    id="observations"
                    className="min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Digite observações adicionais..."
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline" asChild>
            <a href="/catalog/categories">Cancelar</a>
          </Button>
          <Button>Salvar</Button>
        </div>
      </div>
    </div>
  )
}