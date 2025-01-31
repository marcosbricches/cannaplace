// app/catalog/brands/page.tsx
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BrandsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Marcas</h1>
        <Button asChild>
          <a href="/catalog/brands/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Nova Marca
          </a>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gerenciamento de Marcas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar por razão social, CNPJ ou responsável..." 
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
                <TableHead>Marca</TableHead>
                <TableHead>Razão Social</TableHead>
                <TableHead>CNPJ</TableHead>
                <TableHead>Representante</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1,2,3].map((item) => (
                <TableRow key={item}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder-logo.png" alt="Logo" />
                        <AvatarFallback>LG</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">Nome Marca {item}</span>
                    </div>
                  </TableCell>
                  <TableCell>Razão Social Ltda {item}</TableCell>
                  <TableCell>12.345.678/0001-{item}0</TableCell>
                  <TableCell>João Silva {item}</TableCell>
                  <TableCell>
                    <Badge variant="success" className="bg-green-100 text-green-800 hover:bg-green-100">
                      Ativo
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
                          <a href={`/catalog/brands/${item}`}>Visualizar</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href={`/catalog/brands/${item}/edit`}>Editar</a>
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