// app/catalog/categories/page.tsx
import { PlusCircle, Search, Filter, ChevronRight, MoreHorizontal } from "lucide-react"
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function CategoriesPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Categorias</h1>
        <Button asChild>
          <a href="/catalog/categories/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Nova Categoria
          </a>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gerenciamento de Categorias</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar por nome de categoria..." 
                className="pl-8"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </div>

          <Accordion type="multiple" className="space-y-4">
            {[1, 2, 3].map((category) => (
              <AccordionItem value={`category-${category}`} key={category} className="border rounded-lg px-4">
                <div className="flex items-center justify-between">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div>
                        <h3 className="font-medium text-left">Categoria {category}</h3>
                        <p className="text-sm text-muted-foreground text-left">
                          {3} subcategorias
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Badge variant="success" className="bg-green-100 text-green-800">
                      Ativo
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <a href={`/catalog/categories/${category}`}>Visualizar</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href={`/catalog/categories/${category}/edit`}>Editar</a>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <AccordionContent>
                  <div className="mt-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Subcategoria</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[1, 2, 3].map((subcategory) => (
                          <TableRow key={subcategory}>
                            <TableCell>Subcategoria {subcategory}</TableCell>
                            <TableCell>
                              <Badge variant="success" className="bg-green-100 text-green-800">
                                Ativo
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}