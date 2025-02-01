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
  ArrowLeft,
  Clock,
  Mail,
  MessageSquare,
  FileText,
  User,
  Calendar,
  Printer,
  Download,
  CheckCircle2,
  AlertCircle,
  XCircle,
} from "lucide-react"

export default function QuotationDetailsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/orders/quotations">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Orçamento #OR12345</h1>
            <p className="text-muted-foreground">Criado em 31/01/2025 às 14:30</p>
          </div>
        </div>
        <div className="space-x-2">
          <Button variant="outline">
            <Mail className="h-4 w-4 mr-2" />
            Email
          </Button>
          <Button variant="outline">
            <MessageSquare className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
          <Button variant="outline">
            <Printer className="h-4 w-4 mr-2" />
            Imprimir
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Gerar PDF
          </Button>
        </div>
      </div>

      {/* Status Alert */}
      <div className="bg-muted/50 border rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="font-medium">Aguardando Aprovação do Cliente</p>
            <p className="text-sm text-muted-foreground">
              Orçamento enviado há 2 horas. Expira em 6 dias.
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <XCircle className="h-4 w-4 mr-2" />
            Marcar como Perdido
          </Button>
          <Button size="sm">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Aprovar e Gerar Pedido
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          {/* Quotation Info */}
          <Card>
            <CardHeader>
              <CardTitle>Informações do Orçamento</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Origem</p>
                <Badge variant="outline" className="mt-1">
                  Sistema Bitrix
                </Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Consultor</p>
                <p className="font-medium">João Silva</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Data de Validade</p>
                <p className="font-medium">07/02/2025</p>
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
                    <TableHead>Desconto</TableHead>
                    <TableHead>Subtotal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Produto A</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>R$ 1.250,00</TableCell>
                    <TableCell>0%</TableCell>
                    <TableCell>R$ 1.250,00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* History */}
          <Card>
            <CardHeader>
              <CardTitle>Histórico</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-primary/20 p-2">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 w-px bg-border my-2" />
                  </div>
                  <div>
                    <p className="font-medium">Orçamento enviado por email</p>
                    <p className="text-sm text-muted-foreground">31/01/2025 15:00</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Enviado para: joao.silva@email.com
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-primary/20 p-2">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Orçamento criado</p>
                    <p className="text-sm text-muted-foreground">31/01/2025 14:30</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">maria.oliveira@email.com</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefone</p>
                <p className="font-medium">(11) 98765-4321</p>
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Resumo de Valores</CardTitle>
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

          {/* Documents */}
          <Card>
            <CardHeader>
              <CardTitle>Documentos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <FileText className="h-5 w-5 text-muted-foreground" />
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}