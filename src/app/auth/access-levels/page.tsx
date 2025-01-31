import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AccessLevelsPage() {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Níveis de Acesso</h2>
          <p className="text-muted-foreground">
            Gerencie os níveis de acesso e suas permissões no sistema
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/auth/access-levels/new">
            <Button className="h-10">
              <Plus className="mr-2 h-4 w-4" />
              Novo Nível
            </Button>
          </Link>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome do nível..."
                className="pl-10 h-12"
              />
            </div>
          </div>
          <div className="w-[180px]">
            <Select defaultValue="active">
              <SelectTrigger className="h-12">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filtrar por status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os status</SelectItem>
                <SelectItem value="active">Somente ativos</SelectItem>
                <SelectItem value="inactive">Somente inativos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Nome do Nível</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead className="w-[100px]">Status</TableHead>
                  <TableHead className="w-[100px] text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Administrador Geral</TableCell>
                  <TableCell className="text-muted-foreground">
                    Acesso completo ao sistema com visualização total de todas marcas e usuários
                  </TableCell>
                  <TableCell>
                    <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600">
                      Ativo
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Link href="/auth/access-levels/1/edit" className="flex w-full">
                            Editar nível
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Assistente Administrativo</TableCell>
                  <TableCell className="text-muted-foreground">
                    Responsável por double-check e validação documental de pedidos
                  </TableCell>
                  <TableCell>
                    <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600">
                      Ativo
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Link href="/auth/access-levels/2/edit" className="flex w-full">
                            Editar nível
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fornecedor</TableCell>
                  <TableCell className="text-muted-foreground">
                    Acesso à gestão de usuários e dashboard com relatórios de produtos vendidos
                  </TableCell>
                  <TableCell>
                    <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600">
                      Ativo
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Link href="/auth/access-levels/3/edit" className="flex w-full">
                            Editar nível
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}