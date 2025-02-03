// src/app/dashboard/prescribers/page.tsx
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Search,
  UserPlus,
  Users,
  Activity,
  AlertCircle,
  TrendingUp,
  FileText,
  Filter
} from "lucide-react"

export default function Prescribers() {
  const data = {
    overview: {
      total: 245,
      new: 28,
      active: 180,
      inactive: 37,
      avgPrescriptions: 12.5
    },
    prescribers: [
      {
        id: "1",
        name: "Dra. Maria Santos",
        specialty: "Dermatologista",
        status: "active",
        lastPrescription: "2024-02-01",
        totalPrescriptions: 45,
        averageTicket: 850,
        recentPatients: 12
      },
      // ... mais prescritores
    ]
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Profissionais Prescritores</h1>
          <p className="text-muted-foreground">
            Gestão e análise de performance dos prescritores
          </p>
        </div>
        <div className="flex gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filtros Avançados
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filtros de Busca</SheetTitle>
              </SheetHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Especialidade</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dermatologia">Dermatologia</SelectItem>
                      <SelectItem value="endocrinologia">Endocrinologia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Ativos</SelectItem>
                      <SelectItem value="inactive">Inativos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Mais filtros */}
              </div>
            </SheetContent>
          </Sheet>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Novo Prescritor
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Cadastrado</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Novos (30d)</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{data.overview.new}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ativos</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{data.overview.active}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Inativos</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{data.overview.inactive}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Média Prescrições</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.avgPrescriptions}</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="active">Ativos</TabsTrigger>
          <TabsTrigger value="inactive">Inativos</TabsTrigger>
          <TabsTrigger value="new">Novos</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Lista de Prescritores</CardTitle>
                  <CardDescription>
                    Gerencie e acompanhe todos os profissionais cadastrados
                  </CardDescription>
                </div>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Search className="h-4 w-4 text-muted-foreground absolute ml-2" />
                  <Input className="pl-8" placeholder="Buscar por nome, especialidade..." />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="h-12 px-4 text-left align-middle font-medium">Profissional</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                      <th className="h-12 px-4 text-right align-middle font-medium">Prescrições</th>
                      <th className="h-12 px-4 text-right align-middle font-medium">Ticket Médio</th>
                      <th className="h-12 px-4 text-right align-middle font-medium">Última Atividade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.prescribers.map((prescriber) => (
                      <tr key={prescriber.id} className="border-b">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>{prescriber.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{prescriber.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {prescriber.specialty}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge 
                            variant={prescriber.status === 'active' ? 'default' : 'secondary'}
                          >
                            {prescriber.status === 'active' ? 'Ativo' : 'Inativo'}
                          </Badge>
                        </td>
                        <td className="p-4 text-right">{prescriber.totalPrescriptions}</td>
                        <td className="p-4 text-right">
                          R$ {prescriber.averageTicket.toLocaleString()}
                        </td>
                        <td className="p-4 text-right">
                          {new Date(prescriber.lastPrescription).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Outros TabsContent similares para other tabs */}
      </Tabs>
    </div>
  )
}