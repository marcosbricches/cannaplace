// src/app/dashboard/teams/[teamId]/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { 
  LineChart, 
  BarChart, 
  ArrowUpRight, 
  Users, 
  DollarSign, 
  Trophy,
  ArrowLeft
} from "lucide-react"

export default function TeamDetails({ params }: { params: any }) {
  const teamData = {
    name: "Time Comercial São Paulo",
    leader: "Ana Silva",
    totalSales: 1250000,
    consultantCount: 12,
    averageSales: 104166,
    goalProgress: 85,
    monthlyGrowth: 12.5,
    topConsultants: [
      { name: "João Silva", sales: 150000, avatar: "/avatars/joao.png", conversion: 68 },
      { name: "Maria Santos", sales: 125000, avatar: "/avatars/maria.png", conversion: 72 },
      { name: "Pedro Costa", sales: 98000, avatar: "/avatars/pedro.png", conversion: 65 }
    ],
    metrics: {
      repurchaseRate: 75,
      avgTicket: 3200,
      newCustomers: 45,
      activePrescribers: 28
    }
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Link href="/dashboard/teams">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">{teamData.name}</h1>
          </div>
          <p className="text-muted-foreground">Liderado por {teamData.leader}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Exportar Dados</Button>
          <Button>Gerenciar Time</Button>
        </div>
      </div>

      {/* Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total em Vendas
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {teamData.totalSales.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +{teamData.monthlyGrowth}% em relação ao mês anterior
            </p>
            <Progress value={teamData.goalProgress} className="mt-3" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Consultores Ativos
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamData.consultantCount}</div>
            <p className="text-xs text-muted-foreground">
              Média de R$ {teamData.averageSales.toLocaleString()} por consultor
            </p>
          </CardContent>
        </Card>

        {/* Similar cards for other main metrics */}
      </div>

      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="consultants">Consultores</TabsTrigger>
          <TabsTrigger value="metrics">Métricas Detalhadas</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Top Consultores</CardTitle>
                <CardDescription>Ranking por volume de vendas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {teamData.topConsultants.map((consultant, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={consultant.avatar} />
                        <AvatarFallback>{consultant.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">{consultant.name}</p>
                          <span className="text-sm">R$ {consultant.sales.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <Progress value={consultant.conversion} className="flex-1 mr-4" />
                          <span className="text-xs text-muted-foreground">
                            {consultant.conversion}% conversão
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Evolução Mensal</CardTitle>
                <CardDescription>Comparativo de vendas últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Placeholder para gráfico - em um protótipo real usaríamos recharts ou similar */}
                <div className="h-[300px] flex items-center justify-center border rounded-md">
                  <LineChart className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="consultants">
          {/* Content for consultants tab */}
        </TabsContent>

        <TabsContent value="metrics">
          {/* Content for detailed metrics tab */}
        </TabsContent>
      </Tabs>
    </div>
  )
}