import Link from "next/link"
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  PlusCircle, 
  Download, 
  Upload,
  Users 
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function ConsultantGroupsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Equipes de Consultores</h1>
          <p className="text-muted-foreground">
            Gerencie equipes e seus consultores vinculados
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar
          </Button>
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" />
            Importar
          </Button>
          <Button asChild>
            <Link href="/people-management/consultant-groups/new" className="gap-2">
              <PlusCircle className="h-4 w-4" />
              Nova Equipe
            </Link>
          </Button>
        </div>
      </div>

      <Separator />

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar por nome da equipe, consultores ou gestão..." className="pl-8" />
          </div>
        </div>
        <Select defaultValue="active">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Ativos</SelectItem>
            <SelectItem value="inactive">Inativos</SelectItem>
            <SelectItem value="all">Todos</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome da Equipe</TableHead>
              <TableHead>Consultores</TableHead>
              <TableHead>Gestão Responsável</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Equipe São Paulo</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="gap-1">
                    <Users className="h-3 w-3" />
                    12
                  </Badge>
                  <span className="text-muted-foreground">João Silva, Maria Santos, +10</span>
                </div>
              </TableCell>
              <TableCell>Carlos Oliveira</TableCell>
              <TableCell>
                <Badge variant="success" className="bg-green-100 text-green-800">
                  Ativo
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/people-management/consultant-groups/1">Ver</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/people-management/consultant-groups/1/edit">Editar</Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">Equipe Rio de Janeiro</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="gap-1">
                    <Users className="h-3 w-3" />
                    8
                  </Badge>
                  <span className="text-muted-foreground">Pedro Costa, Ana Paula, +6</span>
                </div>
              </TableCell>
              <TableCell>Mariana Silva</TableCell>
              <TableCell>
                <Badge variant="success" className="bg-green-100 text-green-800">
                  Ativo
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/people-management/consultant-groups/2">Ver</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/people-management/consultant-groups/2/edit">Editar</Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}