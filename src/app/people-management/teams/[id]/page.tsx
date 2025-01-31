import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card"
import { 
  ChevronLeft, 
  Users, 
  CalendarDays, 
  ClipboardList,
  Pencil,
  ArrowLeft,
  ArrowRight
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function TeamDetailsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/people-management/teams" className="flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              Voltar para Turmas
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/people-management/teams/TRM-002" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Turma Anterior
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/people-management/teams/TRM-004" className="flex items-center gap-1">
              Próxima Turma
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Turma TRM-003</h1>
          <p className="text-muted-foreground">
            Detalhes e informações da turma
          </p>
        </div>
        <Button asChild>
          <Link href="/people-management/teams/TRM-003/edit" className="flex items-center gap-2">
            <Pencil className="h-4 w-4" />
            Editar Turma
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Badge variant="success" className="bg-green-100 text-green-800">Ativo</Badge>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Data de Criação</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">15/01/2024</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total de Consultores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Consultores da Turma</CardTitle>
          <CardDescription>Lista de consultores vinculados a esta turma</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">João Silva</Badge>
            <Badge variant="secondary">Maria Santos</Badge>
            <Badge variant="secondary">Pedro Oliveira</Badge>
            <Badge variant="secondary">Ana Clara</Badge>
            <Badge variant="secondary">Lucas Mendes</Badge>
            <Badge variant="secondary">Carla Souza</Badge>
            <Badge variant="secondary">Roberto Alves</Badge>
            <Badge variant="secondary">Patricia Lima</Badge>
            <Badge variant="secondary">Fernando Costa</Badge>
            <Badge variant="secondary">Juliana Martins</Badge>
            <Badge variant="secondary">Ricardo Santos</Badge>
            <Badge variant="secondary">Beatriz Oliveira</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Observações</CardTitle>
            <CardDescription>Informações adicionais sobre a turma</CardDescription>
          </div>
          <ClipboardList className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Turma especializada em vendas de produtos ortopédicos de alta complexidade.
            Grupo com excelente performance e histórico de vendas consistente.
            Consultores com certificações específicas em produtos especializados.
          </p>
        </CardContent>
      </Card>

      <Separator />

      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href="/people-management/teams">Voltar para Lista</Link>
        </Button>
        <Button variant="destructive">Desativar Turma</Button>
      </div>
    </div>
  )
}