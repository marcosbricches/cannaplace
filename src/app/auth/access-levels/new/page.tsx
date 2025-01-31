import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function NewAccessLevelPage() {
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
        <h2 className="text-2xl font-bold tracking-tight">Novo Nível de Acesso</h2>
        <p className="text-muted-foreground">
          Configure as informações e permissões do novo nível
        </p>
      </div>

      <Separator />

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Nível</Label>
                <Input
                  id="name"
                  placeholder="Ex: Gerente de Vendas, Analista Financeiro"
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  placeholder="Descreva as principais responsabilidades e atribuições deste nível de acesso"
                  className="resize-none h-24"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Configurar Permissões</h3>
            <Accordion type="multiple" className="space-y-4">
              <AccordionItem value="users" className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Usuários</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <div className="grid gap-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="users-view" />
                      <Label htmlFor="users-view" className="font-normal">
                        Visualizar usuários e informações
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="users-create" />
                      <Label htmlFor="users-create" className="font-normal">
                        Criar novos usuários no sistema
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="users-edit" />
                      <Label htmlFor="users-edit" className="font-normal">
                        Editar informações de usuários existentes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="users-delete" />
                      <Label htmlFor="users-delete" className="font-normal">
                        Desativar/remover usuários do sistema
                      </Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="orders" className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Pedidos</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <div className="grid gap-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="orders-view" />
                      <Label htmlFor="orders-view" className="font-normal">
                        Visualizar todos os pedidos do sistema
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="orders-approve" />
                      <Label htmlFor="orders-approve" className="font-normal">
                        Aprovar pedidos e documentações
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="orders-reject" />
                      <Label htmlFor="orders-reject" className="font-normal">
                        Reprovar pedidos e documentações
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="orders-cancel" />
                      <Label htmlFor="orders-cancel" className="font-normal">
                        Cancelar pedidos em andamento
                      </Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="reports" className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Relatórios</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <div className="grid gap-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="reports-view" />
                      <Label htmlFor="reports-view" className="font-normal">
                        Visualizar relatórios e dashboards
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="reports-export" />
                      <Label htmlFor="reports-export" className="font-normal">
                        Exportar relatórios e dados
                      </Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <div className="flex items-center justify-end gap-4">
          <Button variant="outline" className="h-12" asChild>
            <Link href="/auth/access-levels">
              Cancelar
            </Link>
          </Button>
          <Button className="h-12">
            <Save className="w-4 h-4 mr-2" />
            Criar Nível
          </Button>
        </div>
      </div>
    </div>
  )
}