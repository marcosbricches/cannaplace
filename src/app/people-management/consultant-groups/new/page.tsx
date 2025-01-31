import Link from "next/link"
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
import { Badge } from "@/components/ui/badge"
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card"
import { ChevronLeft, X, Users } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function NewConsultantGroupPage() {
  return (
    <div className="p-6 space-y-6 max-w-3xl">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/people-management/consultant-groups" className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Voltar para Equipes
          </Link>
        </Button>
      </div>

      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Nova Equipe</h1>
        <p className="text-muted-foreground">
          Crie uma nova equipe e vincule consultores e gestão responsável
        </p>
      </div>

      <form className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações da Equipe</CardTitle>
            <CardDescription>Dados principais da equipe</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <label className="text-sm font-medium">ID</label>
              <Input disabled value="EQP-001" />
              <p className="text-sm text-muted-foreground">
                ID gerado automaticamente
              </p>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium">Nome da Equipe</label>
              <Input placeholder="Digite o nome da equipe" />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium">Status</label>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Gestão e Consultores</CardTitle>
            <CardDescription>Defina a gestão e membros da equipe</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <label className="text-sm font-medium">Gestão Responsável</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o gestor ou assessoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="carlos">Carlos Oliveira</SelectItem>
                  <SelectItem value="mariana">Mariana Silva</SelectItem>
                  <SelectItem value="roberto">Roberto Santos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium">Consultores</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Adicionar consultores à equipe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="joao">João Silva</SelectItem>
                  <SelectItem value="maria">Maria Santos</SelectItem>
                  <SelectItem value="pedro">Pedro Costa</SelectItem>
                </SelectContent>
              </Select>

              <div className="pt-2">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="gap-1">
                    <Users className="h-3 w-3" />
                    2
                  </Badge>
                  <span className="text-sm text-muted-foreground">consultores selecionados</span>
                </div>
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
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Observações</CardTitle>
            <CardDescription>Informações adicionais sobre a equipe</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea 
              placeholder="Digite observações relevantes sobre a equipe..."
              className="resize-none"
              rows={4}
            />
          </CardContent>
        </Card>

        <Separator />

        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/people-management/consultant-groups">Cancelar</Link>
          </Button>
          <Button type="submit">Criar Equipe</Button>
        </div>
      </form>
    </div>
  )
}