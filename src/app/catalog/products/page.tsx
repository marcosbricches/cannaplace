// app/catalog/products/page.tsx
import { PlusCircle, Search, Filter, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProductsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
        <Button asChild>
          <a href="/catalog/products/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo Produto
          </a>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Catálogo de Produtos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar por nome, SKU, marca ou categoria..." 
                className="pl-8"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Marca</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Subcategoria</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1,2,3].map((item) => (
                <TableRow key={item}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/placeholder-product.png" alt="Produto" />
                        <AvatarFallback>PD</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium">Produto {item}</span>
                        <span className="text-xs text-muted-foreground">10mg/ml - 30ml</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-mono">PRD-{String(item).padStart(5, '0')}</span>
                  </TableCell>
                  <TableCell>Marca {item}</TableCell>
                  <TableCell>Categoria {item}</TableCell>
                  <TableCell>Subcategoria {item}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">R$ {(199.90 * item).toFixed(2)}</span>
                      <span className="text-xs text-muted-foreground">USD {(39.98 * item).toFixed(2)}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="success" className="bg-green-100 text-green-800 hover:bg-green-100">
                      {item === 2 ? 'Em Promoção' : 'Ativo'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <a href={`/catalog/products/${item}`}>Visualizar</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href={`/catalog/products/${item}/edit`}>Editar</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href={`/catalog/promotions/new?product=${item}`}>Criar Promoção</a>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}