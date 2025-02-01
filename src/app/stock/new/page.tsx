import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Calendar } from "@/components/ui/calendar"
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NovaMovimentacaoPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/stock">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-semibold tracking-tight">Nova Movimentação</h1>
      </div>

      <div className="max-w-2xl">
        <div className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <FormItem>
              <FormLabel>Tipo de Movimentação</FormLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entrada">Entrada</SelectItem>
                  <SelectItem value="saida">Saída</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>

            <FormItem>
              <FormLabel>Motivo</FormLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o motivo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="compra">Compra</SelectItem>
                  <SelectItem value="fabricacao">Fabricação</SelectItem>
                  <SelectItem value="ajuste">Ajuste</SelectItem>
                  <SelectItem value="cancelamento">Cancelamento</SelectItem>
                  <SelectItem value="reposicao">Reposição</SelectItem>
                  <SelectItem value="venda">Venda</SelectItem>
                  <SelectItem value="descarte">Descarte</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>

            <FormItem>
              <FormLabel>Produto</FormLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o produto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="produto-a">Produto Premium A</SelectItem>
                  <SelectItem value="produto-b">Produto Premium B</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>

            <FormItem>
              <FormLabel>Localidade</FormLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a localidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brasil_courrier">Brasil Courrier</SelectItem>
                  <SelectItem value="fazenda">Fazenda</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>

            <FormItem>
              <FormLabel>Lote</FormLabel>
              <Input placeholder="Número do lote" />
            </FormItem>

            <FormItem>
              <FormLabel>Custo Unitário</FormLabel>
              <Input type="number" placeholder="0,00" />
            </FormItem>

            <FormItem>
              <FormLabel>Data de Fabricação</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !Date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Selecionar data
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" />
                </PopoverContent>
              </Popover>
            </FormItem>

            <FormItem>
              <FormLabel>Data de Validade</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !Date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Selecionar data
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" />
                </PopoverContent>
              </Popover>
            </FormItem>
          </div>

          <FormItem>
            <FormLabel>Observações</FormLabel>
            <Textarea placeholder="Informações adicionais sobre a movimentação..." />
          </FormItem>

          <div className="flex gap-4 justify-end">
            <Button variant="outline" asChild>
              <Link href="/stock">Cancelar</Link>
            </Button>
            <Button>Confirmar Movimentação</Button>
          </div>
        </div>
      </div>
    </div>
  )
}