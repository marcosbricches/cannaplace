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
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Plus,
  Search,
  FileText,
  Clock,
  CheckCircle2,
  Truck,
  XCircle,
  Package
} from "lucide-react"
import Link from "next/link"

export default function OrdersPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestão de Pedidos</h1>
        <Link href="/orders/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Novo Pedido
          </Button>
        </Link>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Em Validação</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Aguardando Pagamento</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Em Transporte</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Entregues</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          placeholder="Buscar por cliente, pedido ou vendedor..."
          className="max-w-sm"
          type="search"
        />
        <Tabs defaultValue="all" className="w-fit">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="validation">Em Validação</TabsTrigger>
            <TabsTrigger value="payment">Aguardando Pagamento</TabsTrigger>
            <TabsTrigger value="transport">Em Transporte</TabsTrigger>
            <TabsTrigger value="delivered">Entregues</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelados</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Orders Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pedido</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Origem</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">#12345</TableCell>
              <TableCell>João Silva</TableCell>
              <TableCell>31/01/2025</TableCell>
              <TableCell>R$ 1.250,00</TableCell>
              <TableCell>
                <Badge variant="secondary">
                  <Clock className="w-3 h-3 mr-1" />
                  Em Validação
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline">Venda Balcão</Badge>
              </TableCell>
              <TableCell>
                <Link href="/orders/12345">
                  <Button variant="ghost" size="sm">
                    Ver detalhes
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#12344</TableCell>
              <TableCell>Maria Santos</TableCell>
              <TableCell>31/01/2025</TableCell>
              <TableCell>R$ 2.800,00</TableCell>
              <TableCell>
                <Badge variant="secondary">
                  <Truck className="w-3 h-3 mr-1" />
                  Em Transporte
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline">Venda Judicial</Badge>
              </TableCell>
              <TableCell>
                <Link href="/orders/12344">
                  <Button variant="ghost" size="sm">
                    Ver detalhes
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}