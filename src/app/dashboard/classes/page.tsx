// src/app/dashboard/classes/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import {
  Users,
  GraduationCap,
  Target,
  TrendingUp,
  MoreVertical,
  Calendar,
  Search
} from "lucide-react"

export default function Classes() {
  const data = {
    overview: {
      activeClasses: 5,
      totalStudents: 124,
      avgRetention: 92,
      avgPerformance: 85
    },
    classes: [
      {
        id: "1",
        name: "Turma 2024.1",
        startDate: "2024-01-15",
        status: "active",
        consultants: 28,
        retention: 95,
        avgSales: 45000,
        progress: 65,
        instructor: "Ricardo Mendes",
        topPerformers: [
          { name: "Ana Silva", sales: 68000 },
          { name: "João Costa", sales: 62000 }
        ]
      },
      // ... mais turmas
    ]
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Turmas</h1>
          <p className="text-muted-foreground">
            Acompanhamento das turmas de consultores
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Cronograma
          </Button>
          <Button>
            <GraduationCap className="mr-2 h-4 w-4" />
            Nova Turma
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Turmas Ativas</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.activeClasses}</div>
            <p className="text-xs text-muted-foreground">
              Em andamento
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total de Consultores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.totalStudents}</div>
            <p className="text-xs text-muted-foreground">
              Em treinamento
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Retenção</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.avgRetention}%</div>
            <Progress value={data.overview.avgRetention} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Performance Média</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.avgPerformance}%</div>
            <Progress value={data.overview.avgPerformance} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Main Content - Classes List */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar turma..." className="pl-8 w-[300px]" />
            </div>
            <Select defaultValue="active">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="active">Ativas</SelectItem>
                <SelectItem value="completed">Concluídas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {data.classes.map((classItem) => (
          <Card key={classItem.id}>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Class Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Link href={`/dashboard/classes/${classItem.id}`}>
                      <h3 className="text-lg font-semibold hover:underline">
                        {classItem.name}
                      </h3>
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Exportar Dados</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={classItem.status === 'active' ? 'default' : 'secondary'}>
                      {classItem.status === 'active' ? 'Em Andamento' : 'Concluída'}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Início: {new Date(classItem.startDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Instrutor: {classItem.instructor}
                  </div>
                </div>

                {/* Class Stats */}
                <div className="space-y-2">
                  <div className="text-sm font-medium">Consultores Ativos</div>
                  <div className="text-2xl font-bold">{classItem.consultants}</div>
                  <div className="text-sm text-muted-foreground">
                    Retenção: {classItem.retention}%
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="text-sm font-medium">Progresso do Treinamento</div>
                  <Progress value={classItem.progress} className="h-2" />
                  <div className="text-sm text-muted-foreground">
                    {classItem.progress}% concluído
                  </div>
                </div>

                {/* Top Performers */}
                <div className="space-y-2">
                  <div className="text-sm font-medium">Top Performers</div>
                  {classItem.topPerformers.map((performer, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback>{performer.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{performer.name}</span>
                      </div>
                      <span className="text-sm font-medium">
                        R$ {performer.sales.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}