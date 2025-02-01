import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Calendar } from "@/components/ui/calendar"
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon, MoreHorizontal, Plus } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import Link from "next/link"

export default function EstoquePage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Gestão de Estoque</h1>
        <Button asChild>
          <Link href="/stock/new">
            <Plus className="mr-2 h-4 w-4" />
            Nova Movimentação
          </Link>
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <Input 
            placeholder="Buscar por nome, SKU ou ID do produto..." 
            className="w-full"
          />
        </div>
        
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="entrada">Entrada</SelectItem>
            <SelectItem value="saida">Saída</SelectItem>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[180px] justify-start text-left font-normal"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              Selecionar data
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              locale={ptBR}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Localidade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="brasil_courrier">Brasil Courrier</SelectItem>
            <SelectItem value="fazenda">Fazenda</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Usuário</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Motivo</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Custo</TableHead>
              <TableHead>Lote</TableHead>
              <TableHead>Validade</TableHead>
              <TableHead className="w-[40px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3].map((item) => (
              <TableRow key={item}>
                <TableCell className="font-medium">
                  <Link href={`/stock/${item}`} className="hover:underline">
                    EST-{item.toString().padStart(4, '0')}
                  </Link>
                </TableCell>
                <TableCell>{format(new Date(), "dd/MM/yyyy")}</TableCell>
                <TableCell>João Silva</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-50 text-green-700">
                    Entrada
                  </span>
                </TableCell>
                <TableCell>Compra</TableCell>
                <TableCell>Produto Premium A</TableCell>
                <TableCell className="text-right">R$ 1.250,00</TableCell>
                <TableCell>LOT-2025-{item}</TableCell>
                <TableCell>{format(new Date(), "MM/yyyy")}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/stock/${item}`}>Ver detalhes</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/stock/${item}/historico`}>Ver histórico</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/stock/${item}/certificado`}>Ver certificado</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}