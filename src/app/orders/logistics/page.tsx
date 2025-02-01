import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Truck,
  Package,
  AlertTriangle,
  CheckCircle2,
  Search,
  ExternalLink,
  MapPin,
  Clock,
  Calendar,
} from "lucide-react"

export default function LogisticsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Logística e Entregas</h1>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Em Separação</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Em Trânsito</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Entregue</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Atrasos</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          placeholder="Buscar por pedido, cliente ou código de rastreio..."
          className="max-w-sm"
          type="search"
        />
        <Tabs defaultValue="all" className="w-fit">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="preparation">Em Separação</TabsTrigger>
            <TabsTrigger value="transit">Em Trânsito</TabsTrigger>
            <TabsTrigger value="delivered">Entregues</TabsTrigger>
            <TabsTrigger value="delayed">Atrasos</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Shipments Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pedido</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Origem</TableHead>
              <TableHead>Destino</TableHead>
              <TableHead>Prazo</TableHead>
              <TableHead>Transportadora</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Rastreio</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Link href="/orders/12345" className="text-primary hover:underline font-medium">
                  #12345
                </Link>
              </TableCell>
              <TableCell>Maria Oliveira</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Miami, USA</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>São Paulo, BR</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>05/02/2025</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">UPS Express</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">
                  <Truck className="w-3 h-3 mr-1" />
                  Em Trânsito
                </Badge>
              </TableCell>
              <TableCell>
                <span className="font-mono text-sm">1Z999AA1234567890</span>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Rastrear
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Link href="/orders/12346" className="text-primary hover:underline font-medium">
                  #12346
                </Link>
              </TableCell>
              <TableCell>João Santos</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Miami, USA</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Rio de Janeiro, BR</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-red-500" />
                  <span className="text-red-500">Atrasado 2 dias</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">Courier Prime</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Atrasado
                </Badge>
              </TableCell>
              <TableCell>
                <span className="font-mono text-sm">CP987654321BR</span>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Rastrear
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Link href="/orders/12347" className="text-primary hover:underline font-medium">
                  #12347
                </Link>
              </TableCell>
              <TableCell>Ana Souza</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Miami, USA</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Curitiba, BR</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <span>Em Separação</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">UPS Express</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">
                  <Package className="w-3 h-3 mr-1" />
                  Em Separação
                </Badge>
              </TableCell>
              <TableCell>
                <span className="font-mono text-sm">Aguardando</span>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm" disabled>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Rastrear
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}