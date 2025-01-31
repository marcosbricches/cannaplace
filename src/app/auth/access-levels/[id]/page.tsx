import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Pencil, CheckCircle2, XCircle } from "lucide-react"

export default function ViewAccessLevelPage() {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Link
            href="/auth/access-levels"
            className="flex items-center text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para listagem
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Administrador Geral</h2>
            <p className="text-muted-foreground">
              Detalhes e permissões do nível de acesso
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600">
              Ativo
            </Badge>
            <Link href="/auth/access-levels/1/edit">
              <Button>
                <Pencil className="w-4 h-4 mr-2" />
                Editar Nível
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-6">Permissões do Sistema</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-medium mb-4 text-muted-foreground">Usuários</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>Visualizar usuários</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>Criar usuários</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>Editar usuários</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>Remover usuários</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-4 text-muted-foreground">Pedidos</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>Visualizar pedidos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>Aprovar pedidos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-muted-foreground">Reprovar pedidos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-muted-foreground">Cancelar pedidos</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-4 text-muted-foreground">Relatórios</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>Visualizar relatórios</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-muted-foreground">Exportar relatórios</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}