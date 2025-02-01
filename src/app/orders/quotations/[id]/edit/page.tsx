import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  ArrowLeft,
  Plus,
  Trash2,
  DollarSign,
  Percent,
  Upload,
  Mail,
  MessageSquare,
  AlertCircle,
  History,
  FileText,
} from "lucide-react"

export default function EditQuotationPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/orders/quotations/12345">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Editar Orçamento #OR12345</h1>
            <p className="text-muted-foreground">Última atualização: 31/01/2025 às 16:45</p>
          </div>
        </div>
        <div className="space-x-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">
                <History className="h-4 w-4 mr-2" />
                Histórico de Versões
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Histórico de Versões</AlertDialogTitle>
                <AlertDialogDescription>
                  <div className="space-y-4 mt-2">
                    <div className="flex justify-between items-start p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Versão 2 (Atual)</p>
                        <p className="text-sm text-muted-foreground">31/01/2025 16:45</p>
                        <p className="text-sm mt-1">Alterado valor do produto A</p>
                      </div>
                      <Badge>Atual</Badge>
                    </div>
                    <div className="flex justify-between items-start p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Versão 1</p>
                        <p className="text-sm text-muted-foreground">31/01/2025 14:30</p>
                        <p className="text-sm mt-1">Criação do orçamento</p>
                      </div>
                      <Button variant="outline" size="sm">Restaurar</Button>
                    </div>
                  </div>
                </AlertDialogDescription>
                <AlertDialogFooter>
                  <AlertDialogCancel>Fechar</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
          <Button variant="outline">
            <Mail className="h-4 w-4 mr-2" />
            Enviar por Email
          </Button>
          <Button variant="outline">
            <MessageSquare className="h-4 w-4 mr-2" />
            Enviar WhatsApp
          </Button>
          <Button>Salvar Alterações</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="md:col-span-2 space-y-6">
          {/* Alert */}
          <div className="p-4 border rounded-lg bg-muted/50 flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm font-medium">Orçamento em período de validade</p>
              <p className="text-sm text-muted-foreground">
                As alterações gerarão uma nova versão do orçamento e precisarão ser enviadas novamente ao cliente.
              </p>
            </div>
          </div>

          {/* Origin Info */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Origem do Orçamento</Label>
                  <div className="h-10 px-3 py-2 border rounded-md bg-muted/50">
                    <span className="text-muted-foreground">Sistema Bitrix</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Consultor</Label>
                  <Select defaultValue="1">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">João Silva</SelectItem>
                      <SelectItem value="2">Maria Santos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Patient Info */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Paciente</Label>
                  <div className="h-10 px-3 py-2 border rounded-md bg-muted/50">
                    <span className="text-muted-foreground">Maria Oliveira</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Prescritor</Label>
                  <div className="h-10 px-3 py-2 border rounded-md bg-muted/50">
                    <span className="text-muted-foreground">Dr. Silva - CRM: 12345</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Products */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-lg">Produtos</Label>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Produto
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%]">Produto</TableHead>
                    <TableHead>Quantidade</TableHead>
                    <TableHead>Valor Unit.</TableHead>
                    <TableHead>Desconto</TableHead>
                    <TableHead>Subtotal</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Select defaultValue="1">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Produto A</SelectItem>
                          <SelectItem value="2">Produto B</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Input type="number" className="w-20" defaultValue="1" />
                    </TableCell>
                    <TableCell>R$ 1.250,00</TableCell>
                    <TableCell>
                      <div className="flex space-x-2 items-center">
                        <Input type="number" className="w-20" defaultValue="0" />
                        <Select defaultValue="percentage">
                          <SelectTrigger className="w-24">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="percentage">
                              <Percent className="h-4 w-4" />
                            </SelectItem>
                            <SelectItem value="amount">
                              <DollarSign className="h-4 w-4" />
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TableCell>
                    <TableCell>R$ 1.250,00</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Documents */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <Label className="text-lg">Documentos Anexados</Label>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Receita Médica</p>
                      <p className="text-sm text-muted-foreground">Anexado em 31/01/2025</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <Upload className="h-4 w-4 mr-2" />
                Anexar Novo Documento
              </Button>
            </CardContent>
          </Card>

          {/* Notes */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <Label>Observações</Label>
                <Textarea 
                  defaultValue="Observações adicionadas ao orçamento..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <h3 className="text-lg font-semibold">Resumo do Orçamento</h3>
              
              <div className="space-y-2">
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
              </div>

              <div className="pt-4 space-y-2">
                <Badge variant="outline" className="w-full justify-center py-2">
                  Validade do Orçamento: 6 dias
                </Badge>
                <p className="text-xs text-center text-muted-foreground">
                  Este orçamento é válido até 06/02/2025
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}