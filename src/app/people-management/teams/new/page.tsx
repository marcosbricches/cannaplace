import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronLeft, X } from "lucide-react"

export default function NewTeamPage() {
  return (
    <div className="p-6 space-y-6 max-w-3xl">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/people-management/teams" className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Voltar para Turmas
          </Link>
        </Button>
      </div>

      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Nova Turma</h1>
        <p className="text-muted-foreground">
          Crie uma nova turma para agrupar consultores e acompanhar performance
        </p>
      </div>

      <div className="border rounded-lg p-6">
        <form className="space-y-6">
          <div className="space-y-4">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              ID
            </label>
            <Input placeholder="TRM-001" />
            <p className="text-sm text-muted-foreground">
              ID gerado automaticamente. Edite apenas se necessário.
            </p>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Status
            </label>
            <Select defaultValue="active">
              <SelectTrigger>
                <SelectValue placeholder="Selecione o status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Ativo</SelectItem>
                <SelectItem value="inactive">Inativo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Consultores
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecionar consultores" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="joao">João Silva</SelectItem>
                <SelectItem value="maria">Maria Santos</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="flex gap-1 items-center">
                João Silva
                <button type="button" className="hover:opacity-75">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
              <Badge variant="secondary" className="flex gap-1 items-center">
                Maria Santos
                <button type="button" className="hover:opacity-75">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Observação
            </label>
            <Textarea 
              placeholder="Digite aqui observações relevantes sobre a turma..."
              className="resize-none"
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-6">
            <Button type="submit">Criar Turma</Button>
            <Button type="button" variant="outline" asChild>
              <Link href="/people-management/teams">Cancelar</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}