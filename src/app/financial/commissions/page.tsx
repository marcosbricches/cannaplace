// src/app/financial/commissions/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CommissionsList() {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
      {/* Header Section */}
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Comissões</h2>
          <p className="text-muted-foreground">
            Gerencie as comissões de consultores e assessorias do sistema
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <a href="/financial/commissions/new">
            <Button>Adicionar Comissão</Button>
          </a>
        </div>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <Input
              placeholder="Buscar comissões..."
              className="h-8 w-[300px]"
            />
            <Select>
              <SelectTrigger className="h-8 w-[200px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os tipos</SelectItem>
                <SelectItem value="consultor">Consultor</SelectItem>
                <SelectItem value="assessoria">Assessoria</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-8 w-[200px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os status</SelectItem>
                <SelectItem value="ativo">Ativo</SelectItem>
                <SelectItem value="inativo">Inativo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex-1 text-sm text-muted-foreground">
          Mostrando 10 de 20 resultados
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Responsável</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Modalidade</TableHead>
              <TableHead className="text-right">Principal</TableHead>
              <TableHead className="text-right">Secundária</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3].map((item, i) => (
              <TableRow key={i} className="hover:bg-muted/50">
                <TableCell className="font-medium">COM-{item}23</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">João Silva</span>
                    <span className="text-xs text-muted-foreground">joao.silva@email.com</span>
                  </div>
                </TableCell>
                <TableCell>Consultor</TableCell>
                <TableCell>Venda Direta</TableCell>
                <TableCell className="text-right">15%</TableCell>
                <TableCell className="text-right">5%</TableCell>
                <TableCell>
                  <div className="flex w-[100px] items-center">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                    Ativo
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <a href={`/financial/commissions/${item}`}>
                      <Button variant="ghost" size="sm">
                        Visualizar
                      </Button>
                    </a>
                    <a href={`/financial/commissions/${item}/edit`}>
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
            Página 1 de 2
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