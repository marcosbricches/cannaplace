// src/app/financial/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function FinancialDashboard() {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
      {/* Header Section */}
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Financeiro</h2>
          <p className="text-muted-foreground">
            Gerencie comissões, contas e notas fiscais do sistema
          </p>
        </div>
      </div>

      {/* Módulos Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Comissões */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium">Comissões</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Gerencie as comissões de consultores e assessorias
            </p>
            <div className="mt-2">
              <a href="/financial/commissions">
                <Button>Acessar Comissões</Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Contas */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium">Contas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Gerencie contas a pagar e receber
            </p>
            <div className="mt-2">
              <a href="/financial/accounts">
                <Button>Acessar Contas</Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Notas Fiscais */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium">Notas Fiscais</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Gerencie notas fiscais de serviço
            </p>
            <div className="mt-2">
              <a href="/financial/invoices">
                <Button>Acessar Notas</Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resumos */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total em Comissões
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 45.231,89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Contas a Receber
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 12.432,00</div>
            <p className="text-xs text-muted-foreground">
              23 contas pendentes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Contas a Pagar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 8.234,00</div>
            <p className="text-xs text-muted-foreground">
              15 contas pendentes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Notas Emitidas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">
              Último mês
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}