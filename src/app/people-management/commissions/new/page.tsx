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
import { ChevronLeft, Percent } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function NewCommissionPage() {
  return (
    <div className="p-6 space-y-6 max-w-3xl">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/people-management/commissions" className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Voltar para Comissões
          </Link>
        </Button>
      </div>

      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Nova Comissão</h1>
        <p className="text-muted-foreground">
          Configure as comissões para consultores ou assessorias
        </p>
      </div>

      <Alert variant="info" className="bg-blue-50 text-blue-800 border-blue-200">
        <AlertDescription>
          A comissão será calculada sobre o valor total da venda, excluindo frete e descontos
        </AlertDescription>
      </Alert>

      <form className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações Gerais</CardTitle>
            <CardDescription>Dados principais da configuração de comissão</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <label className="text-sm font-medium">Tipo</label>
              <Select>
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
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o profissional" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="joao">João Silva</SelectItem>
                  <SelectItem value="maria">Maria Santos</SelectItem>
                  <SelectItem value="prime">Prime Assessoria</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Percentuais de Comissão</CardTitle>
                <CardDescription>Configure os percentuais para cada tipo de venda</CardDescription>
              </div>
              <Percent className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <label className="text-sm font-medium">
                Venda Direta
                <Badge variant="secondary" className="ml-2">Principal</Badge>
              </label>
              <div className="flex items-center gap-2">
                <Input type="number" placeholder="0" className="w-32" />
                <span className="text-sm text-muted-foreground">%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Comissão para vendas realizadas integralmente pelo profissional
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <label className="text-sm font-medium">
                Com Intervenção
                <Badge variant="outline" className="ml-2">Parcial</Badge>
              </label>
              <div className="flex items-center gap-2">
                <Input type="number" placeholder="0" className="w-32" />
                <span className="text-sm text-muted-foreground">%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Comissão para vendas com intervenção de outro consultor
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <label className="text-sm font-medium">
                Captação
                <Badge variant="outline" className="ml-2">Parcial</Badge>
              </label>
              <div className="flex items-center gap-2">
                <Input type="number" placeholder="0" className="w-32" />
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
              placeholder="Digite observações relevantes sobre a configuração de comissão..."
              className="resize-none"
              rows={4}
            />
          </CardContent>
        </Card>

        <Separator />

        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/people-management/commissions">Cancelar</Link>
          </Button>
          <Button type="submit">Criar Comissão</Button>
        </div>
      </form>
    </div>
  )
}