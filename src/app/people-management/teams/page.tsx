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
  PlusCircle, 
  Search,
  ChevronLeft 
} from "lucide-react"
import Link from "next/link"

export default function TeamsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Link href="/people-management" className="flex items-center gap-2 text-sm text-muted-foreground">
  <ChevronLeft className="h-4 w-4" />
  Gestão de Pessoas
</Link>
        <span>/</span>
        <span className="text-foreground">Turmas de Consultores</span>
      </div>

      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Turmas de Consultores</h1>
          <p className="text-muted-foreground">
            Gerencie as turmas dos consultores para análise de performance de vendas
          </p>
        </div>
        <Button asChild>
  <Link href="/people-management/teams/new" className="flex items-center gap-2">
    <PlusCircle className="h-5 w-5" />
    Nova Turma
  </Link>
</Button>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por ID..."
              className="pl-8"
            />
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
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Consultores</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Observação</TableHead>
              <TableHead className="w-[100px]">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>TRM-001</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">João Silva</Badge>
                  <Badge variant="secondary">Maria Santos</Badge>
                  <Badge variant="secondary">Carlos Oliveira</Badge>
                  <Badge variant="secondary">Ana Beatriz</Badge>
                  <Badge variant="secondary">Pedro Lima</Badge>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="success" className="bg-green-100 text-green-800">
                  Ativo
                </Badge>
              </TableCell>
              <TableCell className="max-w-[300px] truncate">
                Turma principal de consultores especializados em próteses
              </TableCell>
              <TableCell>
  <div className="flex gap-2">
    <Button variant="outline" size="sm" asChild>
      <Link href="/people-management/teams/TRM-001">Ver</Link>
    </Button>
    <Button variant="outline" size="sm" asChild>
      <Link href="/people-management/teams/TRM-001/edit">Editar</Link>
    </Button>
  </div>
</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>TRM-002</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">Pedro Costa</Badge>
                  <Badge variant="secondary">Ana Paula</Badge>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  Inativo
                </Badge>
              </TableCell>
              <TableCell className="max-w-[300px] truncate">
                Turma secundária focada em vendas corporativas
              </TableCell>
              <TableCell>
  <div className="flex gap-2">
    <Button variant="outline" size="sm" asChild>
      <Link href="/people-management/teams/TRM-001">Ver</Link>
    </Button>
    <Button variant="outline" size="sm" asChild>
      <Link href="/people-management/teams/TRM-001/edit">Editar</Link>
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