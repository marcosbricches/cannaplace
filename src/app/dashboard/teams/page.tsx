// src/app/dashboard/teams/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import { 
  Search, 
  Users, 
  TrendingUp, 
  Target,
  ArrowUpRight,
  ArrowDownRight,
  BarChart 
} from "lucide-react"

export default function Teams() {
  const teamsData = {
    overview: {
      totalTeams: 8,
      totalConsultants: 96,
      averageSales: 985000,
      growthRate: 15.5
    },
    teams: [
      {
        id: "1",
        name: "São Paulo Capital",
        leader: "Ana Silva",
        consultants: 12,
        monthlySales: 1250000,
        performance: 115,
        status: "high-performing"
      },
      {
        id: "2",
        name: "Rio de Janeiro",
        leader: "Carlos Santos",
        consultants: 10,
        monthlySales: 980000,
        performance: 98,
        status: "stable"
      },
      // Mais times aqui...
    ]
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Equipes Comerciais</h1>
          <p className="text-muted-foreground">
            Gerencie e acompanhe o desempenho das equipes
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Exportar Relatório</Button>
          <Button>Nova Equipe</Button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar equipe..." className="pl-8" />
        </div>
        <Select defaultValue="month">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Período" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Última Semana</SelectItem>
            <SelectItem value="month">Último Mês</SelectItem>
            <SelectItem value="quarter">Último Trimestre</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Equipes
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamsData.overview.totalTeams}</div>
            <p className="text-xs text-muted-foreground">
              {teamsData.overview.totalConsultants} consultores ativos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Média de Vendas
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {teamsData.overview.averageSales.toLocaleString()}
            </div>
            <div className="flex items-center gap-1 text-xs">
              <ArrowUpRight className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+{teamsData.overview.growthRate}%</span>
              <span className="text-muted-foreground">vs. mês anterior</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Teams Table */}
      <Card>
        <CardHeader>
          <CardTitle>Visão Geral das Equipes</CardTitle>
          <CardDescription>
            Acompanhe o desempenho e métricas de cada equipe
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-12 px-4 text-left align-middle font-medium">Equipe</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Líder</th>
                  <th className="h-12 px-4 text-right align-middle font-medium">Consultores</th>
                  <th className="h-12 px-4 text-right align-middle font-medium">Vendas Mensais</th>
                  <th className="h-12 px-4 text-center align-middle font-medium">Status</th>
                  <th className="h-12 px-4 text-right align-middle font-medium">Ações</th>
                </tr>
              </thead>
              <tbody>
                {teamsData.teams.map((team) => (
                  <tr key={team.id} className="border-b">
                    <td className="p-4">
                      <Link href={`/dashboard/teams/${team.id}`} className="hover:underline font-medium">
                        {team.name}
                      </Link>
                    </td>
                    <td className="p-4">{team.leader}</td>
                    <td className="p-4 text-right">{team.consultants}</td>
                    <td className="p-4 text-right">
                      R$ {team.monthlySales.toLocaleString()}
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center">
                        <Badge 
                          variant={team.status === 'high-performing' ? 'default' : 'secondary'}
                        >
                          {team.performance}% Meta
                        </Badge>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <Link href={`/dashboard/teams/${team.id}`}>
                        <Button variant="ghost" size="sm">
                          Ver Detalhes
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}