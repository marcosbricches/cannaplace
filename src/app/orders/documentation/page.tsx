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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  FileText,
  Search,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Download,
  Eye,
} from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Validação de Documentos</h1>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Aguardando Análise</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Aprovados</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Reprovados</CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Para Vencer</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          placeholder="Buscar por paciente, pedido ou prescritor..."
          className="max-w-sm"
          type="search"
        />
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tipo de Documento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="prescription">Receita Médica</SelectItem>
            <SelectItem value="anvisa">Autorização ANVISA</SelectItem>
            <SelectItem value="report">Laudo Médico</SelectItem>
          </SelectContent>
        </Select>
        <Tabs defaultValue="all" className="w-fit">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="pending">Aguardando Análise</TabsTrigger>
            <TabsTrigger value="approved">Aprovados</TabsTrigger>
            <TabsTrigger value="rejected">Reprovados</TabsTrigger>
            <TabsTrigger value="expiring">Para Vencer</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Documents Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Documento</TableHead>
              <TableHead>Paciente</TableHead>
              <TableHead>Prescritor</TableHead>
              <TableHead>Data Upload</TableHead>
              <TableHead>Validade</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Pedido</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Receita Médica</p>
                    <p className="text-sm text-muted-foreground">PDF • 2.5MB</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>Maria Oliveira</TableCell>
              <TableCell>Dr. Silva - CRM: 12345</TableCell>
              <TableCell>31/01/2025</TableCell>
              <TableCell>30/07/2025</TableCell>
              <TableCell>
                <Badge variant="secondary">
                  <Clock className="w-3 h-3 mr-1" />
                  Aguardando Análise
                </Badge>
              </TableCell>
              <TableCell>
                <Link href="/orders/12345" className="text-primary hover:underline">
                  #12345
                </Link>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Autorização ANVISA</p>
                    <p className="text-sm text-muted-foreground">PDF • 1.8MB</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>João Santos</TableCell>
              <TableCell>Dra. Paula - CRM: 67890</TableCell>
              <TableCell>31/01/2025</TableCell>
              <TableCell>30/04/2025</TableCell>
              <TableCell>
                <Badge variant="secondary">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Vence em 20 dias
                </Badge>
              </TableCell>
              <TableCell>
                <Link href="/orders/12346" className="text-primary hover:underline">
                  #12346
                </Link>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Laudo Médico</p>
                    <p className="text-sm text-muted-foreground">PDF • 3.1MB</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>Ana Souza</TableCell>
              <TableCell>Dr. Marcos - CRM: 54321</TableCell>
              <TableCell>30/01/2025</TableCell>
              <TableCell>29/01/2026</TableCell>
              <TableCell>
                <Badge variant="secondary">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Aprovado
                </Badge>
              </TableCell>
              <TableCell>
                <Link href="/orders/12347" className="text-primary hover:underline">
                  #12347
                </Link>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}