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
  Building2,
  CalendarDays,
  ClipboardList,
  Pencil,
  ArrowLeft,
  ArrowRight,
  Download
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function ConsultantGroupDetailsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/people-management/consultant-groups" className="flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              Voltar para Equipes
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/people-management/consultant-groups/EQP-002" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Equipe Anterior
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/people-management/consultant-groups/EQP-004" className="flex items-center gap-1">
              Próxima Equipe
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Equipe São Paulo</h1>
            <Badge variant="success" className="bg-green-100 text-green-800">
              Ativo
            </Badge>
          </div>
          <p className="text-muted-foreground">ID: EQP-003</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar Dados
          </Button>
          <Button asChild>
            <Link href="/people-management/consultant-groups/EQP-003/edit" className="flex items-center gap-2">
              <Pencil className="h-4 w-4" />
              Editar Equipe
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total de Consultores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs text-muted-foreground">consultores ativos</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Gestão Responsável</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Carlos Oliveira</p>
            <p className="text-xs text-muted-foreground">gestor principal</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Data de Criação</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">15/01/2024</p>
            <p className="text-xs text-muted-foreground">há 15 dias</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Consultores da Equipe</CardTitle>
          <CardDescription>Lista completa de consultores vinculados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
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
              <div key={consultor} className="flex items-center p-3 border rounded-lg gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">{consultor}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Observações</CardTitle>
            <CardDescription>Informações adicionais sobre a equipe</CardDescription>
          </div>
          <ClipboardList className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Equipe responsável pela região metropolitana de São Paulo, especializada em vendas corporativas 
            e grandes contas. Equipe com alto desempenho e experiência no segmento de saúde.
          </p>
        </CardContent>
      </Card>

      <Separator />

      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href="/people-management/consultant-groups">Voltar para Lista</Link>
        </Button>
        <Button variant="destructive">Desativar Equipe</Button>
      </div>
    </div>
  )
}