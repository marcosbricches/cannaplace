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
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ChevronLeft, X, Users, Save } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function EditConsultantGroupPage() {
  return (
    <div className="p-6 space-y-6 max-w-3xl">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/people-management/consultant-groups/EQP-003" className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Voltar para Detalhes
          </Link>
        </Button>
      </div>

      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Editar Equipe São Paulo</h1>
        <p className="text-muted-foreground">
          Atualize as informações da equipe conforme necessário
        </p>
      </div>

      <Alert variant="info" className="bg-blue-50 text-blue-800 border-blue-200">
        <AlertDescription>
          Alterações na equipe podem afetar relatórios e análises de performance dos consultores
        </AlertDescription>
      </Alert>

      <form className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações da Equipe</CardTitle>
            <CardDescription>Dados principais da equipe</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <label className="text-sm font-medium">ID</label>
              <Input disabled value="EQP-003" />
              <p className="text-sm text-muted-foreground">
                O ID da equipe não pode ser alterado
              </p>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium">Nome da Equipe</label>
              <Input defaultValue="Equipe São Paulo" />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium">Status</label>
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
            <CardTitle>Gestão e Consultores</CardTitle>
            <CardDescription>Atualize a gestão e membros da equipe</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <label className="text-sm font-medium">Gestão Responsável</label>
              <Select defaultValue="carlos">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o gestor ou assessoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="carlos">Carlos Oliveira</SelectItem>
                  <SelectItem value="mariana">Mariana Silva</SelectItem>
                  <SelectItem value="roberto">Roberto Santos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium">Consultores</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Adicionar consultores à equipe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ana">Ana Beatriz</SelectItem>
                  <SelectItem value="paulo">Paulo Souza</SelectItem>
                  <SelectItem value="lucia">Lucia Ferreira</SelectItem>
                </SelectContent>
              </Select>

              <div className="pt-2">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="gap-1">
                    <Users className="h-3 w-3" />
                    12
                  </Badge>
                  <span className="text-sm text-muted-foreground">consultores na equipe</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "João Silva",
                    "Maria Santos",
                    "Pedro Oliveira",
                    "Ana Clara",
                    "Lucas Mendes",
                    "Carla Souza",
                    "Roberto Alves",
                    "Patricia Lima",
                    "Fernando Costa",
                    "Juliana Martins",
                    "Ricardo Santos",
                    "Beatriz Oliveira"
                  ].map((consultor) => (
                    <Badge key={consultor} variant="secondary" className="flex justify-between items-center p-2">
                      {consultor}
                      <button type="button" className="hover:opacity-75">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Observações</CardTitle>
            <CardDescription>Informações adicionais sobre a equipe</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea 
              className="resize-none"
              rows={4}
              defaultValue="Equipe responsável pela região metropolitana de São Paulo, especializada em vendas corporativas e grandes contas. Equipe com alto desempenho e experiência no segmento de saúde."
            />
          </CardContent>
        </Card>

        <Separator />

        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/people-management/consultant-groups/EQP-003">Cancelar</Link>
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