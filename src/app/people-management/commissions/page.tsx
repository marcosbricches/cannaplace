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
  Users,
  Percent 
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription 
} from "@/components/ui/card"

export default function CommissionsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Comissões</h1>
          <p className="text-muted-foreground">
            Gerencie as comissões de consultores e assessorias
          </p>
        </div>
        <Button asChild>
          <Link href="/people-management/commissions/new" className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Nova Comissão
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Consultores Ativos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold">28</p>
              <p className="text-sm text-muted-foreground">com comissão configurada</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Assessorias Ativas</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-muted-foreground">com comissão configurada</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Média de Comissão</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold">12.5%</p>
              <p className="text-sm text-muted-foreground">entre consultores e assessorias</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar por consultor ou assessoria..." className="pl-8" />
          </div>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="consultant">Consultores</SelectItem>
            <SelectItem value="advisory">Assessorias</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Venda Direta</TableHead>
              <TableHead>Com Intervenção</TableHead>
              <TableHead>Captação</TableHead>
              <TableHead className="w-[100px]">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">João Silva</TableCell>
              <TableCell>
                <Badge variant="secondary">Consultor</Badge>
              </TableCell>
              <TableCell>15%</TableCell>
              <TableCell>10%</TableCell>
              <TableCell>5%</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/people-management/commissions/1">Ver</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/people-management/commissions/1/edit">Editar</Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">Prime Assessoria</TableCell>
              <TableCell>
                <Badge variant="outline">Assessoria</Badge>
              </TableCell>
              <TableCell>20%</TableCell>
              <TableCell>15%</TableCell>
              <TableCell>8%</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/people-management/commissions/2">Ver</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/people-management/commissions/2/edit">Editar</Link>
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