import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
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
import { ChevronLeft, X, Save } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function EditTeamPage() {
  return (
    <div className="p-6 space-y-6 max-w-3xl">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/people-management/teams/TRM-003" className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Voltar para Detalhes
          </Link>
        </Button>
      </div>

      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Editar Turma TRM-003</h1>
        <p className="text-muted-foreground">
          Atualize as informações da turma conforme necessário
        </p>
      </div>

      <Alert variant="info" className="bg-blue-50 text-blue-800 border-blue-200">
        <AlertDescription>
          Alterações na turma afetarão os relatórios e análises de performance
        </AlertDescription>
      </Alert>

      <form className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações Básicas</CardTitle>
            <CardDescription>Dados principais da turma</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <label className="text-sm font-medium">
                ID
              </label>
              <Input value="TRM-003" disabled />
              <p className="text-sm text-muted-foreground">
                O ID da turma não pode ser alterado
              </p>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium">
                Status
              </label>
              <Select defaultValue="active">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Ativo</SelectItem>
                  <SelectItem value="inactive">Inativo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Consultores</CardTitle>
            <CardDescription>Gerencie os consultores vinculados à turma</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Adicionar consultores" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rafael">Rafael Silva</SelectItem>
                <SelectItem value="amanda">Amanda Souza</SelectItem>
                <SelectItem value="bruno">Bruno Santos</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="secondary" className="flex gap-1 items-center">
                João Silva
                <button type="button" className="hover:opacity-75">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
              <Badge variant="secondary" className="flex gap-1 items-center">
                Maria Santos
                <button type="button" className="hover:opacity-75">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
              <Badge variant="secondary" className="flex gap-1 items-center">
                Pedro Oliveira
                <button type="button" className="hover:opacity-75">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Observações</CardTitle>
            <CardDescription>Informações adicionais sobre a turma</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea 
              placeholder="Digite observações relevantes sobre a turma..."
              className="resize-none"
              rows={4}
              defaultValue="Turma especializada em vendas de produtos ortopédicos de alta complexidade. Grupo com excelente performance e histórico de vendas consistente. Consultores com certificações específicas em produtos especializados."
            />
          </CardContent>
        </Card>

        <Separator />

        <div className="flex justify-between">
          <Button type="button" variant="outline" asChild>
            <Link href="/people-management/teams/TRM-003">Cancelar</Link>
          </Button>
          <div className="flex gap-3">
            <Button type="submit" className="gap-2">
              <Save className="h-4 w-4" />
              Salvar Alterações
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}