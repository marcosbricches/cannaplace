import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ChevronLeft, Percent, Save } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function EditCommissionPage() {
  return (
    <div className="p-6 space-y-6 max-w-3xl">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/people-management/commissions/COM-003" className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Voltar para Detalhes
          </Link>
        </Button>
      </div>

      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">Editar Comissão</h1>
          <Badge variant="secondary">João Silva</Badge>
        </div>
        <p className="text-muted-foreground">
          Atualize os percentuais e informações da comissão
        </p>
      </div>

      <Alert variant="info" className="bg-blue-50 text-blue-800 border-blue-200">
        <AlertDescription>
          As alterações serão aplicadas apenas para vendas futuras. Vendas já realizadas manterão os percentuais anteriores.
        </AlertDescription>
      </Alert>

      <form className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações Gerais</CardTitle>
            <CardDescription>Dados principais da configuração</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <label className="text-sm font-medium">ID</label>
              <Input disabled value="COM-003" />
              <p className="text-sm text-muted-foreground">
                O ID não pode ser alterado
              </p>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium">Tipo</label>
              <Select defaultValue="consultant">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consultant">Consultor</SelectItem>
                  <SelectItem value="advisory">Assessoria</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium">Profissional</label>
              <Input disabled value="João Silva" />
              <p className="text-sm text-muted-foreground">
                O profissional não pode ser alterado
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Percentuais de Comissão</CardTitle>
                <CardDescription>Atualize os percentuais por tipo de venda</CardDescription>
              </div>
              <Percent className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <label className="text-sm font-medium flex items-center gap-2">
                Venda Direta
                <Badge className="bg-green-100 text-green-800">Principal</Badge>
              </label>
              <div className="flex items-center gap-2">
                <Input type="number" defaultValue="15" className="w-32" />
                <span className="text-sm text-muted-foreground">%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Comissão para vendas realizadas integralmente
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <label className="text-sm font-medium flex items-center gap-2">
                Com Intervenção
                <Badge variant="outline">Parcial</Badge>
              </label>
              <div className="flex items-center gap-2">
                <Input type="number" defaultValue="10" className="w-32" />
                <span className="text-sm text-muted-foreground">%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Comissão para vendas com intervenção de outro consultor
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <label className="text-sm font-medium flex items-center gap-2">
                Captação
                <Badge variant="outline">Parcial</Badge>
              </label>
              <div className="flex items-center gap-2">
                <Input type="number" defaultValue="5" className="w-32" />
                <span className="text-sm text-muted-foreground">%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Comissão para captação de vendas finalizadas por outros
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Observações</CardTitle>
            <CardDescription>Informações adicionais sobre a comissão</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea 
              className="resize-none"
              rows={4}
              defaultValue="Consultor especializado em vendas corporativas com excelente histórico de performance. Responsável por grandes contas e com alta taxa de conversão em vendas diretas."
            />
          </CardContent>
        </Card>

        <Separator />

        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/people-management/commissions/COM-003">Cancelar</Link>
          </Button>
          <Button type="submit" className="gap-2">
            <Save className="h-4 w-4" />
            Salvar Alterações
          </Button>
        </div>
      </form>
    </div>
  )
}