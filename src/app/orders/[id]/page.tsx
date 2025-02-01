import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  ArrowLeft,
  Clock,
  FileText,
  Printer,
  Download,
  User,
  Calendar,
  DollarSign,
  Truck,
  AlertCircle,
  CheckCircle2,
  Package,
} from "lucide-react"

export default function OrderDetailsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/orders">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Pedido #12345</h1>
            <p className="text-muted-foreground">Criado em 31/01/2025 às 14:30</p>
          </div>
        </div>
        <div className="space-x-2">
          <Button variant="outline">
            <Printer className="h-4 w-4 mr-2" />
            Imprimir
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Editar
          </Button>
        </div>
      </div>

      {/* Status Timeline */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-primary text-primary-foreground p-2">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <p className="text-sm mt-2">Criado</p>
              <p className="text-xs text-muted-foreground">31/01 14:30</p>
            </div>
            <div className="h-px bg-primary flex-1 mx-2" />
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-primary text-primary-foreground p-2">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <p className="text-sm mt-2">Validação</p>
              <p className="text-xs text-muted-foreground">31/01 15:00</p>
            </div>
            <div className="h-px bg-muted flex-1 mx-2" />
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-muted p-2">
                <Clock className="h-4 w-4" />
              </div>
              <p className="text-sm mt-2">Pagamento</p>
              <p className="text-xs text-muted-foreground">Pendente</p>
            </div>
            <div className="h-px bg-muted flex-1 mx-2" />
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-muted p-2">
                <Truck className="h-4 w-4" />
              </div>
              <p className="text-sm mt-2">Transporte</p>
              <p className="text-xs text-muted-foreground">-</p>
            </div>
            <div className="h-px bg-muted flex-1 mx-2" />
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-muted p-2">
                <Package className="h-4 w-4" />
              </div>
              <p className="text-sm mt-2">Entregue</p>
              <p className="text-xs text-muted-foreground">-</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <Tabs defaultValue="details">
            <TabsList>
              <TabsTrigger value="details">Detalhes</TabsTrigger>
              <TabsTrigger value="documents">Documentos</TabsTrigger>
              <TabsTrigger value="history">Histórico</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-6">
              {/* Order Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Informações do Pedido</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Origem</p>
                    <p className="font-medium">Venda Balcão</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Consultor</p>
                    <p className="font-medium">João Silva</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge variant="secondary">
                      <Clock className="w-3 h-3 mr-1" />
                      Aguardando Pagamento
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Data de Criação</p>
                    <p className="font-medium">31/01/2025 14:30</p>
                  </div>
                </CardContent>
              </Card>

              {/* Products */}
              <Card>
                <CardHeader>
                  <CardTitle>Produtos</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Produto</TableHead>
                        <TableHead>Quantidade</TableHead>
                        <TableHead>Valor Unit.</TableHead>
                        <TableHead>Subtotal</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Produto A</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>R$ 1.250,00</TableCell>
                        <TableCell>R$ 1.250,00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Observações</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Observações adicionadas ao pedido...
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <FileText className="h-8 w-8 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Receita Médica</p>
                          <p className="text-sm text-muted-foreground">PDF • 2.5MB</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <FileText className="h-8 w-8 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Procuração ANVISA</p>
                          <p className="text-sm text-muted-foreground">PDF • 1.8MB</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {/* Timeline items */}
                    <div className="flex space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="rounded-full bg-primary/20 p-2">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 w-px bg-border my-2" />
                      </div>
                      <div>
                        <p className="font-medium">Pedido aguardando pagamento</p>
                        <p className="text-sm text-muted-foreground">31/01/2025 15:00</p>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="rounded-full bg-primary/20 p-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 w-px bg-border my-2" />
                      </div>
                      <div>
                        <p className="font-medium">Documentação validada</p>
                        <p className="text-sm text-muted-foreground">31/01/2025 14:45</p>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="rounded-full bg-primary/20 p-2">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">Pedido criado</p>
                        <p className="text-sm text-muted-foreground">31/01/2025 14:30</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Customer Info */}
          <Card>
            <CardHeader>
              <CardTitle>Informações do Cliente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Nome</p>
                <p className="font-medium">Maria Oliveira</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">CPF</p>
                <p className="font-medium">123.456.789-00</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Prescritor</p>
                <p className="font-medium">Dr. Silva - CRM: 12345</p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Resumo do Pagamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal:</span>
                <span>R$ 1.250,00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Desconto:</span>
                <span>- R$ 0,00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Frete:</span>
                <span>R$ 25,00</span>
              </div>
              <div className="pt-4 border-t">
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>R$ 1.275,00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}