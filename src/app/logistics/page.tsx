// src/app/logistics/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  Search, 
  Filter,
  Plus,
  Package,
  Truck,
  Settings,
  Building,
  FileText,
  MoreVertical,
  Eye,
  Edit,
  Trash
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

export default function LogisticsPage() {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-8">
          {/* Header - Ajustado */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Logística e Estoque</h1>
                <p className="text-gray-500 mt-1">Gestão de estoque, empresas logísticas e integrações</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" asChild>
                  <Link href="/logistics/companies/new" className="flex items-center gap-2">
                    <Plus size={16} />
                    Nova Empresa
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/logistics/inventory/new" className="flex items-center gap-2">
                    <Plus size={16} />
                    Nova Movimentação
                  </Link>
                </Button>
              </div>
            </div>
          </div>
  
          {/* Tabs Container */}
          <Card className="bg-white shadow-sm">
            <Tabs defaultValue="inventory" className="w-full">
              {/* Tabs Header - Mantido */}
              <CardHeader className="border-b">
                <TabsList className="grid grid-cols-3 gap-4 w-full max-w-2xl">
                  <TabsTrigger value="inventory" className="flex items-center gap-2">
                    <Package size={16} />
                    Gestão de Estoque
                  </TabsTrigger>
                  <TabsTrigger value="logistics" className="flex items-center gap-2">
                    <Building size={16} />
                    Empresas Logísticas
                  </TabsTrigger>
                  <TabsTrigger value="shipping" className="flex items-center gap-2">
                    <Truck size={16} />
                    Integrações
                  </TabsTrigger>
                </TabsList>
              </CardHeader>
  
              <CardContent className="pt-6">
                {/* Gestão de Estoque - Ajustado */}
                <TabsContent value="inventory">
                  <div className="space-y-6">
                    {/* Filtros */}
                    <div className="flex gap-4 bg-gray-50 p-4 rounded-lg">
                      <div className="flex-1 max-w-md">
                        <div className="relative">
                          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Buscar por produto, SKU ou ID" 
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Tipo de Movimentação" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entrada">Entrada</SelectItem>
                          <SelectItem value="saida">Saída</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Calendar size={16} />
                        Período
                      </Button>
                    </div>
  
                    {/* Tabela de Movimentações */}
                    <div className="border rounded-lg overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-gray-50">
                            <TableCell className="font-semibold">ID</TableCell>
                            <TableCell className="font-semibold">Data</TableCell>
                            <TableCell className="font-semibold">Tipo</TableCell>
                            <TableCell className="font-semibold">Produto</TableCell>
                            <TableCell className="font-semibold">Lote</TableCell>
                            <TableCell className="font-semibold">Localidade</TableCell>
                            <TableCell className="font-semibold">Motivo</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="hover:bg-gray-50">
                            <TableCell>#123</TableCell>
                            <TableCell>01/02/2025</TableCell>
                            <TableCell>
                              <Badge variant="secondary">Entrada</Badge>
                            </TableCell>
                            <TableCell>Produto A</TableCell>
                            <TableCell>LOT123</TableCell>
                            <TableCell>Brasil Courrier</TableCell>
                            <TableCell>Compra</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreVertical size={16} />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem asChild>
                                    <Link href="/logistics/inventory/123" className="flex items-center gap-2">
                                      <Eye size={16} />
                                      Visualizar
                                    </Link>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem asChild>
                                    <Link href="/logistics/inventory/123/edit" className="flex items-center gap-2">
                                      <Edit size={16} />
                                      Editar
                                    </Link>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                                    <Trash size={16} />
                                    Excluir
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </TabsContent>
  
                {/* Empresas Logísticas - Ajustado */}
                <TabsContent value="logistics">
                  <div className="space-y-6">
                    {/* Filtros */}
                    <div className="flex gap-4 bg-gray-50 p-4 rounded-lg">
                      <div className="flex-1 max-w-md">
                        <div className="relative">
                          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Buscar por CNPJ ou Razão Social" 
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ativo">Ativo</SelectItem>
                          <SelectItem value="inativo">Inativo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
  
                    {/* Tabela de Empresas */}
                    <div className="border rounded-lg overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-gray-50">
                            <TableCell className="font-semibold">Empresa</TableCell>
                            <TableCell className="font-semibold">CNPJ/EIN</TableCell>
                            <TableCell className="font-semibold">Representante</TableCell>
                            <TableCell className="font-semibold">Status</TableCell>
                            <TableCell className="font-semibold">Contratação</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="hover:bg-gray-50">
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                  <Building size={20} className="text-gray-500" />
                                </div>
                                <div>
                                  <div className="font-medium">Transportadora XYZ</div>
                                  <div className="text-sm text-gray-500">São Paulo, SP</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>12.345.678/0001-90</TableCell>
                            <TableCell>Maria Santos</TableCell>
                            <TableCell>
                              <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                            </TableCell>
                            <TableCell>01/01/2025</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreVertical size={16} />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem asChild>
                                    <Link href="/logistics/companies/123" className="flex items-center gap-2">
                                      <Eye size={16} />
                                      Visualizar
                                    </Link>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem asChild>
                                    <Link href="/logistics/companies/123/edit" className="flex items-center gap-2">
                                      <Edit size={16} />
                                      Editar
                                    </Link>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                                    <Trash size={16} />
                                    Excluir
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </TabsContent>
  
                {/* Integrações - Ajustado */}
                <TabsContent value="shipping">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Courier */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                        <div className="space-y-1">
                          <h4 className="text-lg font-semibold">Courier (Principal)</h4>
                          <p className="text-sm text-gray-500">API de integração primária</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Online</Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-500">Status</div>
                              <div className="font-medium">Conectado</div>
                            </div>
                            <div>
                              <div className="text-gray-500">Última sincronização</div>
                              <div className="font-medium">Há 5 minutos</div>
                            </div>
                          </div>
                          <Button asChild className="w-full flex items-center gap-2">
                            <Link href="/logistics/settings/courier">
                              <Settings size={16} />
                              Configurar API
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
  
                    {/* UPS */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                        <div className="space-y-1">
                          <h4 className="text-lg font-semibold">UPS (Secundário)</h4>
                          <p className="text-sm text-gray-500">API de integração secundária</p>
                        </div>
                        <Badge variant="secondary">Standby</Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-500">Status</div>
                              <div className="font-medium">Pronto</div>
                            </div>
                            <div>
                              <div className="text-gray-500">Modo</div>
                              <div className="font-medium">Failover</div>
                            </div>
                          </div>
                          <Button variant="outline" asChild className="w-full flex items-center gap-2">
                            <Link href="/logistics/settings/ups">
                              <Settings size={16} />
                              Configurar API
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </div>
    )
  }