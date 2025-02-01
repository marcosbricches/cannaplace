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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"

export default function NewQuotationPage() {
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
          <h1 className="text-3xl font-bold">Novo Orçamento</h1>
        </div>
        <div className="space-x-4">
          <Button variant="outline">
            <Mail className="h-4 w-4 mr-2" />
            Enviar por Email
          </Button>
          <Button variant="outline">
            <MessageSquare className="h-4 w-4 mr-2" />
            Enviar WhatsApp
          </Button>
          <Button>Gerar Orçamento</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="md:col-span-2 space-y-6">
          {/* Origin Section */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Origem do Orçamento*</Label>
                  <RadioGroup defaultValue="bitrix" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bitrix" id="bitrix" />
                      <Label htmlFor="bitrix">Sistema Bitrix</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="prescriber" id="prescriber" />
                      <Label htmlFor="prescriber">Prescritor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="prescription" id="prescription" />
                      <Label htmlFor="prescription">Gestão de Receitas</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Consultor*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o consultor" />
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

          {/* Patient Information */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Paciente*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Buscar por nome, CPF ou ID" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Maria Oliveira - CPF: 123.456.789-00</SelectItem>
                      <SelectItem value="2">João Santos - CPF: 987.654.321-00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Prescritor*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Buscar por ID, nome ou conselho" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Dr. Silva - CRM: 12345</SelectItem>
                      <SelectItem value="2">Dra. Santos - CRM: 67890</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-muted/50 flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Paciente possui orçamento em aberto</p>
                  <p className="text-sm text-muted-foreground">
                    Orçamento #OR12340 criado em 30/01/2025 no valor de R$ 1.500,00
                  </p>
                  <div className="flex space-x-2 mt-2">
                    <Button variant="outline" size="sm">
                      Cancelar Anterior
                    </Button>
                    <Button variant="outline" size="sm">
                      Ver Orçamento
                    </Button>
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
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecionar produto" />
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

          {/* Additional Info */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <Label>Observações</Label>
                <Textarea placeholder="Adicione observações sobre o orçamento..." />
              </div>

              <div className="space-y-2">
                <Label>Anexos</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-24">
                    <div className="flex flex-col items-center">
                      <Upload className="h-6 w-6 mb-2" />
                      <span>Anexar Receita Médica</span>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-24">
                    <div className="flex flex-col items-center">
                      <Upload className="h-6 w-6 mb-2" />
                      <span>Anexar Documentos Adicionais</span>
                    </div>
                  </Button>
                </div>
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
                  Validade do Orçamento: 7 dias
                </Badge>
                <p className="text-xs text-center text-muted-foreground">
                  Este orçamento é válido até 07/02/2025
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}