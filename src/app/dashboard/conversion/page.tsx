// src/app/dashboard/conversion/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Users,
  FileText,
  ShoppingCart,
  CreditCard,
  Download,
  ArrowRight,
  Calendar,
  TrendingUp,
  TrendingDown
} from "lucide-react"

export default function Conversion() {
  const data = {
    overview: {
      totalLeads: 1250,
      quotesGenerated: 850,
      ordersCreated: 425,
      salesCompleted: 320,
      conversionRate: 25.6
    },
    funnelStages: [
      {
        title: "Pacientes Cadastrados",
        count: 1250,
        percentage: 100,
        trend: 12,
        previousCount: 1120
      },
      {
        title: "Orçamentos Gerados",
        count: 850,
        percentage: 68,
        trend: 8,
        previousCount: 790
      },
      {
        title: "Pedidos Criados",
        count: 425,
        percentage: 34,
        trend: -3,
        previousCount: 438
      },
      {
        title: "Compras Finalizadas",
        count: 320,
        percentage: 25.6,
        trend: 15,
        previousCount: 278
      }
    ],
    topConversions: [
      {
        consultant: "Maria Silva",
        rate: 42,
        sales: 28,
        leads: 67
      },
      // ... mais consultores
    ]
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Funil de Conversão</h1>
          <p className="text-muted-foreground">
            Análise detalhada do processo de vendas
          </p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="30">
            <SelectTrigger className="w-[180px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Últimos 7 dias</SelectItem>
              <SelectItem value="30">Últimos 30 dias</SelectItem>
              <SelectItem value="90">Últimos 90 dias</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar Dados
          </Button>
        </div>
      </div>

      {/* Overview Card */}
      <Card>
        <CardHeader>
          <CardTitle>Taxa de Conversão Global</CardTitle>
          <CardDescription>
            De pacientes cadastrados até compras finalizadas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">{data.overview.conversionRate}%</span>
            <span className="text-sm text-green-500 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +2.4% vs período anterior
            </span>
          </div>
          <Progress value={data.overview.conversionRate} className="h-2" />
        </CardContent>
      </Card>

      {/* Funnel Visualization */}
      <div className="grid gap-4">
        {data.funnelStages.map((stage, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-primary/10" 
              style={{ width: `${stage.percentage}%` }}
            />
            <CardContent className="relative p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                <div className="space-y-1">
                  <div className="text-sm font-medium">{stage.title}</div>
                  <div className="text-2xl font-bold">{stage.count.toLocaleString()}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium">Taxa de Conversão</div>
                  <div className="text-xl font-bold">{stage.percentage}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium">vs Período Anterior</div>
                  <div className={`flex items-center justify-center gap-1 ${
                    stage.trend > 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {stage.trend > 0 ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    <span className="font-bold">{Math.abs(stage.trend)}%</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium">Período Anterior</div>
                  <div className="text-xl font-medium">{stage.previousCount.toLocaleString()}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        <div className="flex justify-center">
          {data.funnelStages.map((_, index) => index < data.funnelStages.length - 1 && (
            <ArrowRight key={index} className="h-6 w-6 text-muted-foreground" />
          ))}
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Conversões por Consultor</CardTitle>
            <CardDescription>
              Consultores com as melhores taxas de conversão
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.topConversions.map((consultant, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{consultant.consultant}</span>
                    <span className="font-bold">{consultant.rate}%</span>
                  </div>
                  <Progress value={consultant.rate} className="h-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{consultant.sales} vendas</span>
                    <span>{consultant.leads} leads</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Análise de Abandono</CardTitle>
            <CardDescription>
              Principais pontos de desistência no funil
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="orçamentos">
                <AccordionTrigger>
                  Orçamentos não convertidos
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Taxa de abandono</span>
                      <span className="font-medium">32%</span>
                    </div>
                    <Progress value={32} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      Principal motivo: Valor acima do esperado
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="pedidos">
                <AccordionTrigger>
                  Pedidos não finalizados
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Taxa de abandono</span>
                      <span className="font-medium">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      Principal motivo: Dúvidas sobre pagamento
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}