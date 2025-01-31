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
  Percent,
  CalendarDays,
  ClipboardList,
  Pencil,
  ArrowLeft,
  ArrowRight,
  History,
  TrendingUp
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function CommissionDetailsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/people-management/commissions" className="flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              Voltar para Comissões
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/people-management/commissions/COM-002" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Anterior
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/people-management/commissions/COM-004" className="flex items-center gap-1">
              Próximo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">João Silva</h1>
            <Badge variant="secondary">Consultor</Badge>
          </div>
          <p className="text-muted-foreground">ID: COM-003</p>
        </div>
        <Button asChild>
          <Link href="/people-management/commissions/COM-003/edit" className="flex items-center gap-2">
            <Pencil className="h-4 w-4" />
            Editar Comissão
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Venda Direta</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-bold">15%</p>
              <Badge className="w-fit bg-green-100 text-green-800 border-green-200">Principal</Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Com Intervenção</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-bold">10%</p>
              <Badge variant="outline" className="w-fit">Parcial</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Captação</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-bold">5%</p>
              <Badge variant="outline" className="w-fit">Parcial</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Última Atualização</CardTitle>
            <History className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">15/01/24</p>
            <p className="text-xs text-muted-foreground">há 15 dias</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Histórico de Performance</CardTitle>
              <CardDescription>Resultados dos últimos 3 meses</CardDescription>
            </div>
            <TrendingUp className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-2 p-4 border rounded-lg">
              <span className="text-sm text-muted-foreground">Vendas Diretas</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">32</span>
                <span className="text-sm text-muted-foreground">vendas</span>
              </div>
              <Badge variant="success" className="w-fit bg-green-100 text-green-800">
                R$ 128.500,00
              </Badge>
            </div>

            <div className="flex flex-col gap-2 p-4 border rounded-lg">
              <span className="text-sm text-muted-foreground">Com Intervenção</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">15</span>
                <span className="text-sm text-muted-foreground">vendas</span>
              </div>
              <Badge variant="success" className="w-fit bg-green-100 text-green-800">
                R$ 45.800,00
              </Badge>
            </div>

            <div className="flex flex-col gap-2 p-4 border rounded-lg">
              <span className="text-sm text-muted-foreground">Captações</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">8</span>
                <span className="text-sm text-muted-foreground">vendas</span>
              </div>
              <Badge variant="success" className="w-fit bg-green-100 text-green-800">
                R$ 22.300,00
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Observações</CardTitle>
            <CardDescription>Informações adicionais sobre a comissão</CardDescription>
          </div>
          <ClipboardList className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Consultor especializado em vendas corporativas com excelente histórico de performance.
            Responsável por grandes contas e com alta taxa de conversão em vendas diretas.
          </p>
        </CardContent>
      </Card>

      <Separator />

      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href="/people-management/commissions">Voltar para Lista</Link>
        </Button>
      </div>
    </div>
  )
}