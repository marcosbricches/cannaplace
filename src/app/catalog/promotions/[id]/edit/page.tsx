// app/catalog/promotions/[id]/edit/page.tsx
import { ArrowLeft, Save, Trash2 } from "lucide-react"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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

export default function EditPromotionPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <a href="/catalog/promotions/1">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </a>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Editar Promoção</h1>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Excluir Promoção
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
              <AlertDialogDescription>
                Esta ação não pode ser desfeita. Isso excluirá permanentemente a promoção.
                O histórico de vendas será mantido para fins de relatório.
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
              {/* Tipo de Promoção */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Tipo de Promoção</h2>
                <Separator />
                
                <RadioGroup defaultValue="product" className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="product" id="product" />
                    <Label htmlFor="product">Desconto em Produtos</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="shipping" id="shipping" />
                    <Label htmlFor="shipping">Desconto no Frete</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Informações Básicas */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Informações Básicas</h2>
                <Separator />
                
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome da Promoção *</Label>
                      <Input id="name" defaultValue="Promoção de Natal" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Tipo de Desconto *</Label>
                      <Select defaultValue="percentage">
                        <SelectTrigger id="type">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="percentage">Porcentagem (%)</SelectItem>
                          <SelectItem value="fixed">Valor Fixo (R$)</SelectItem>
                          <SelectItem value="buy-take">Leve X, Pague Y</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Data de Início *</Label>
                      <Input type="date" id="startDate" defaultValue="2024-12-01" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate">Data de Término *</Label>
                      <Input type="date" id="endDate" defaultValue="2025-01-31" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="discount">Valor do Desconto *</Label>
                      <Input id="discount" type="number" defaultValue="20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="minValue">Valor Mínimo da Compra</Label>
                      <Input id="minValue" type="number" defaultValue="300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Produtos */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Produtos Participantes</h2>
                  <Button variant="outline">Gerenciar Produtos</Button>
                </div>
                <Separator />
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">
                        <Checkbox checked />
                      </TableHead>
                      <TableHead>Produto</TableHead>
                      <TableHead>SKU</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Preço Original</TableHead>
                      <TableHead>Preço Promocional</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[1,2,3].map((item) => (
                      <TableRow key={item}>
                        <TableCell>
                          <Checkbox checked />
                        </TableCell>
                        <TableCell>Produto {item}</TableCell>
                        <TableCell>
                          <span className="font-mono">PRD-{String(item).padStart(5, '0')}</span>
                        </TableCell>
                        <TableCell>Categoria {item}</TableCell>
                        <TableCell>R$ {(199.90).toFixed(2)}</TableCell>
                        <TableCell>R$ {(159.92).toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Regras */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Regras da Promoção</h2>
                <Separator />
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="rule1" />
                      <Label htmlFor="rule1">
                        Permitir combinação com outras promoções
                      </Label>
                    </div>
                    <div className="pl-6 space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Se ativado, esta promoção poderá ser combinada com outras promoções ativas
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="rule2" checked />
                      <Label htmlFor="rule2">
                        Limitar quantidade por cliente
                      </Label>
                    </div>
                    <div className="pl-6 space-y-2">
                      <Label htmlFor="limit">Limite por cliente</Label>
                      <Input id="limit" type="number" defaultValue="3" className="max-w-[200px]" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="rule3" />
                      <Label htmlFor="rule3">
                        Exigir cupom de desconto
                      </Label>
                    </div>
                    <div className="pl-6 space-y-2">
                      <Label htmlFor="coupon">Código do cupom</Label>
                      <Input id="coupon" placeholder="Ex: NATAL20" className="max-w-[200px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline" asChild>
            <a href="/catalog/promotions/1">Cancelar</a>
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