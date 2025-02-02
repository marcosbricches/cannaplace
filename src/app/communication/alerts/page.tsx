// src/app/communication/alerts/page.tsx
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function AlertsList() {
  return (
    <div className="flex flex-col h-full">
      {/* Header Principal */}
      <div className="border-b">
        <div className="flex h-16 items-center px-4 gap-4">
          <div className="flex items-center gap-2 flex-1">
            <h1 className="text-xl font-semibold">Comunicação</h1>
            <Separator orientation="vertical" className="h-6" />
            <h2 className="text-xl">Alertas</h2>
          </div>
          <Link href="/communication/alerts/new" className="flex items-center">
            <Button>Novo Alerta</Button>
          </Link>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 p-6 space-y-4">
        <Tabs defaultValue="todos" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="ativos">Ativos</TabsTrigger>
              <TabsTrigger value="inativos">Inativos</TabsTrigger>
              <TabsTrigger value="vencimento">Vencimento</TabsTrigger>
              <TabsTrigger value="estoque">Estoque</TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <Input
                placeholder="Buscar alertas..."
                className="w-[300px]"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Filtros Avançados</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Filtros Avançados</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Tipo de Alerta</h3>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vencimento">Vencimento</SelectItem>
                          <SelectItem value="estoque">Estoque</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Data de Criação</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <Input type="date" />
                        <Input type="date" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Status</h3>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ativo">Ativo</SelectItem>
                          <SelectItem value="inativo">Inativo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <TabsContent value="todos" className="m-0">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome do Alerta</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Condições</TableHead>
                    <TableHead>Canais</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: 1,
                      nome: "Alerta de Estoque Mínimo",
                      tipo: "Estoque",
                      condicoes: "Quando atingir estoque mínimo",
                      canais: ["Sistema", "Email"],
                      status: "Ativo"
                    },
                    {
                      id: 2,
                      nome: "Vencimento de Receita",
                      tipo: "Vencimento",
                      condicoes: "2 meses antes do vencimento",
                      canais: ["WhatsApp", "Email"],
                      status: "Ativo"
                    },
                    {
                      id: 3,
                      nome: "Documentação Pendente",
                      tipo: "Documentos",
                      condicoes: "Quando houver reprovação",
                      canais: ["Sistema"],
                      status: "Inativo"
                    }
                  ].map((alerta) => (
                    <TableRow key={alerta.id}>
                      <TableCell>
                        <Link 
                          href={`/communication/alerts/${alerta.id}`}
                          className="font-medium hover:underline"
                        >
                          {alerta.nome}
                        </Link>
                      </TableCell>
                      <TableCell>{alerta.tipo}</TableCell>
                      <TableCell className="max-w-[300px] truncate">
                        {alerta.condicoes}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          {alerta.canais.map((canal, index) => (
                            <Badge 
                              key={index}
                              variant="outline"
                              className="font-normal"
                            >
                              {canal}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={alerta.status === 'Ativo' ? 'default' : 'secondary'}
                          className="font-semibold"
                        >
                          {alerta.status.toUpperCase()}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Link href={`/communication/alerts/${alerta.id}`}>
                            <Button variant="ghost" size="sm">
                              Visualizar
                            </Button>
                          </Link>
                          <Link href={`/communication/alerts/123/edit`}>
                            <Button variant="ghost" size="sm">
                              Editar
                            </Button>
                          </Link>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}