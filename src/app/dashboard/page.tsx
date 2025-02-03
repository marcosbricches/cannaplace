// src/app/dashboard/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import {
  Users,
  TrendingUp,
  Target,
  GraduationCap,
  UserPlus,
  FileText,
  ArrowRight,
  Calendar,
  DollarSign,
  LineChart,
} from "lucide-react"

export default function Dashboard() {
  const data = {
    overview: {
      totalSales: 2850000,
      monthlyGrowth: 15.5,
      goalProgress: 85,
      activeTeams: 8,
      totalConsultants: 96,
      avgRetention: 92
    },
    quickStats: {
      newPrescribers: 28,
      activeClasses: 5,
      conversionRate: 25.6,
      avgTicket: 3500
    },
    teams: [
      {
        name: "São Paulo Capital",
        performance: 115,
        consultants: 12,
        sales: 850000
      },
      // ... mais times
    ],
    recentActivity: [
      {
        type: "sale",
        description: "Nova venda finalizada",
        value: "R$ 12.500",
        time: "há 5 minutos"
      },
      // ... mais atividades
    ]
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Visão geral do desempenho comercial
          </p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="month">
            <SelectTrigger className="w-[180px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Esta Semana</SelectItem>
              <SelectItem value="month">Este Mês</SelectItem>
              <SelectItem value="quarter">Este Trimestre</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid gap-6">
        <Card className="relative overflow-hidden">
          <div 
            className="absolute inset-y-0 left-0 bg-primary/10" 
            style={{ width: `${data.overview.goalProgress}%` }}
          />
          <CardContent className="relative p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">
                  Total em Vendas
                </div>
                <div className="text-3xl font-bold">
                  R$ {data.overview.totalSales.toLocaleString()}
                </div>
                <div className="flex items-center text-sm text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +{data.overview.monthlyGrowth}% vs mês anterior
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">
                  Progresso da Meta
                </div>
                <div className="text-3xl font-bold">
                  {data.overview.goalProgress}%
                </div>
                <Progress value={data.overview.goalProgress} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">
                  Ticket Médio
                </div>
                <div className="text-3xl font-bold">
                  R$ {data.quickStats.avgTicket.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">
                  por venda finalizada
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/dashboard/teams">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardContent className="p-6 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Times</div>
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {data.overview.activeTeams}
                </div>
                <p className="text-xs text-muted-foreground">
                  Times ativos
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/prescribers">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardContent className="p-6 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Prescritores</div>
                <UserPlus className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {data.quickStats.newPrescribers}
                </div>
                <p className="text-xs text-muted-foreground">
                  Novos este mês
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/classes">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardContent className="p-6 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Turmas</div>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {data.quickStats.activeClasses}
                </div>
                <p className="text-xs text-muted-foreground">
                  Em treinamento
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/conversion">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardContent className="p-6 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Conversão</div>
                <Target className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {data.quickStats.conversionRate}%
                </div>
                <p className="text-xs text-muted-foreground">
                  Taxa global
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Team Performance & Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance das Equipes</CardTitle>
            <CardDescription>
              Top times por volume de vendas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {data.teams.map((team, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{team.name}</span>
                    <span className="font-bold">
                      {team.performance}% da meta
                    </span>
                  </div>
                  <Progress value={team.performance} className="h-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{team.consultants} consultores</span>
                    <span>R$ {team.sales.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
            <CardDescription>
              Últimas atualizações do sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {data.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">
                      {activity.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                  <div className="font-medium">
                    {activity.value}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}