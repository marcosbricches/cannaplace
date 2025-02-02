// src/app/supply-chain/logistics/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LogisticsList() {
  return (
    <div className="container mx-auto py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Empresas Logísticas</h1>
          <p className="text-muted-foreground mt-1">Gerencie as empresas cadastradas no sistema</p>
        </div>
        <Link href="/supply-chain/logistics/new">
          <Button>Nova Empresa</Button>
        </Link>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Buscar</label>
              <Input placeholder="CNPJ, Razão Social..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Todos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="ativo">Ativo</SelectItem>
                  <SelectItem value="inativo">Inativo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Data de Contratação</label>
              <Input type="date" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Razão Social</TableHead>
                <TableHead>CNPJ/EIN</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Representante</TableHead>
                <TableHead>Contratação</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Logística ABC Ltda</TableCell>
                <TableCell>12.345.678/0001-90</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-50 text-green-700">
                    Ativo
                  </span>
                </TableCell>
                <TableCell>João Silva</TableCell>
                <TableCell>01/01/2024</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link href="/supply-chain/logistics/123">
                      <Button variant="outline" size="sm">Ver</Button>
                    </Link>
                    <Link href="/supply-chain/logistics/123/edit">
                      <Button variant="outline" size="sm">Editar</Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>XYZ Transportes</TableCell>
                <TableCell>98.765.432/0001-10</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-red-50 text-red-700">
                    Inativo
                  </span>
                </TableCell>
                <TableCell>Maria Santos</TableCell>
                <TableCell>15/02/2024</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link href="/supply-chain/logistics/456">
                      <Button variant="outline" size="sm">Ver</Button>
                    </Link>
                    <Link href="/supply-chain/logistics/456/edit">
                      <Button variant="outline" size="sm">Editar</Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}