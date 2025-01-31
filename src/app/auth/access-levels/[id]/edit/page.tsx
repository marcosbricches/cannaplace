import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft, Save } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function EditAccessLevelPage() {
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
        <h2 className="text-2xl font-bold tracking-tight">Editar Nível de Acesso</h2>
        <p className="text-muted-foreground">
          Configure as informações e permissões do nível de acesso
        </p>
      </div>

      <Separator />

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Nível</Label>
                <Input
                  id="name"
                  placeholder="Ex: Administrador, Gerente, etc"
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select defaultValue="active">
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Ativo</SelectItem>
                    <SelectItem value="inactive">Inativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Permissões do Sistema</h3>
            <Accordion type="multiple" className="space-y-4">
              <AccordionItem value="users" className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Usuários</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <div className="grid grid-cols-2 gap-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="users-view" />
                      <Label htmlFor="users-view" className="font-normal">
                        Visualizar usuários
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="users-create" />
                      <Label htmlFor="users-create" className="font-normal">
                        Criar usuários
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="users-edit" />
                      <Label htmlFor="users-edit" className="font-normal">
                        Editar usuários
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="users-delete" />
                      <Label htmlFor="users-delete" className="font-normal">
                        Remover usuários
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
                  <div className="grid grid-cols-2 gap-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="orders-view" />
                      <Label htmlFor="orders-view" className="font-normal">
                        Visualizar pedidos
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="orders-approve" />
                      <Label htmlFor="orders-approve" className="font-normal">
                        Aprovar pedidos
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="orders-reject" />
                      <Label htmlFor="orders-reject" className="font-normal">
                        Reprovar pedidos
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="orders-cancel" />
                      <Label htmlFor="orders-cancel" className="font-normal">
                        Cancelar pedidos
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
                  <div className="grid grid-cols-2 gap-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="reports-view" />
                      <Label htmlFor="reports-view" className="font-normal">
                        Visualizar relatórios
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="reports-export" />
                      <Label htmlFor="reports-export" className="font-normal">
                        Exportar relatórios
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
            Salvar Alterações
          </Button>
        </div>
      </div>
    </div>
  )
}