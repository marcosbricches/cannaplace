// src/app/financial/accounts/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export default function AccountsList() {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
      {/* Header */}
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Contas</h2>
          <p className="text-muted-foreground">
            Gerencie todas as contas do sistema
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <a href="/financial/accounts/payable">
            <Button variant="outline">Contas a Pagar</Button>
          </a>
          <a href="/financial/accounts/receivable">
            <Button variant="outline">Contas a Receber</Button>
          </a>
          <a href="/financial/accounts/new">
            <Button>Nova Conta</Button>
          </a>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">A Receber</span>
            <span className="text-2xl font-bold">R$ 12.432,00</span>
            <span className="text-xs text-muted-foreground">23 contas pendentes</span>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">A Pagar</span>
            <span className="text-2xl font-bold">R$ 8.234,00</span>
            <span className="text-xs text-muted-foreground">15 contas pendentes</span>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">Saldo</span>
            <span className="text-2xl font-bold text-green-600">R$ 4.198,00</span>
            <span className="text-xs text-muted-foreground">Diferença</span>
          </div>
        </Card>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col space-y-4">
        <div className="flex flex-wrap gap-4">
          <Input
            placeholder="Buscar contas..."
            className="h-8 w-[300px]"
          />
          <Select>
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="receber">A Receber</SelectItem>
              <SelectItem value="pagar">A Pagar</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todas</SelectItem>
              <SelectItem value="vendas">Vendas</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="operacional">Operacional</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="pendente">Pendente</SelectItem>
              <SelectItem value="pago">Pago</SelectItem>
              <SelectItem value="cancelado">Cancelado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 text-sm text-muted-foreground">
          Mostrando 10 de 38 resultados
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead className="text-right">Valor</TableHead>
              <TableHead>Vencimento</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3].map((item, i) => (
              <TableRow key={i} className="hover:bg-muted/50">
                <TableCell className="font-medium">FIN-{item}23</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">Pagamento de Comissão</span>
                    <span className="text-xs text-muted-foreground">João Silva</span>
                  </div>
                </TableCell>
                <TableCell>Vendas</TableCell>
                <TableCell>
                  <Badge variant={i % 2 === 0 ? "default" : "secondary"}>
                    {i % 2 === 0 ? "A Pagar" : "A Receber"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-medium">
                  R$ 1.234,00
                </TableCell>
                <TableCell>15/02/2025</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      i === 0 ? "default" : 
                      i === 1 ? "secondary" : 
                      "destructive"
                    }
                  >
                    {i === 0 ? "Pendente" : i === 1 ? "Pago" : "Cancelado"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <a href={`/financial/accounts/${item}`}>
                      <Button variant="ghost" size="sm">
                        Visualizar
                      </Button>
                    </a>
                    <a href={`/financial/accounts/${item}/edit`}>
                      <Button variant="ghost" size="sm">
                        Editar
                      </Button>
                    </a>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-4 border-t">
          <div className="text-sm text-muted-foreground">
            Página 1 de 4
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              Anterior
            </Button>
            <Button variant="outline" size="sm">
              Próxima
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}