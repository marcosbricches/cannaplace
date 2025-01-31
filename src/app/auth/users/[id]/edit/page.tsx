import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save, Upload, Trash2, AlertCircle } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Alert,
  AlertDescription,
} from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function EditUserPage() {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Link
            href="/auth/users"
            className="flex items-center text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para listagem
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Editar Usuário</h2>
            <p className="text-muted-foreground">
              Atualize as informações do usuário
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">
                <Trash2 className="w-4 h-4 mr-2" />
                Desativar Usuário
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Desativar Usuário</DialogTitle>
                <DialogDescription>
                  Tem certeza que deseja desativar este usuário? Esta ação impedirá o acesso dele ao sistema.
                </DialogDescription>
              </DialogHeader>
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Esta ação não pode ser desfeita automaticamente.
                </AlertDescription>
              </Alert>
              <DialogFooter className="mt-4">
                <Button variant="outline">Cancelar</Button>
                <Button variant="destructive">Confirmar Desativação</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Separator />

      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList>
          <TabsTrigger value="personal">Dados Pessoais</TabsTrigger>
          <TabsTrigger value="professional">Dados Profissionais</TabsTrigger>
          <TabsTrigger value="access">Acesso ao Sistema</TabsTrigger>
          <TabsTrigger value="documents">Documentação</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Tipo de Pessoa</Label>
                  <Input
                    value="Pessoa Física"
                    className="h-12 bg-muted"
                    disabled
                  />
                </div>
                <div className="space-y-2">
                  <Label>CPF/CNPJ</Label>
                  <Input
                    value="123.456.789-00"
                    className="h-12 bg-muted"
                    disabled
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Nome/Razão Social</Label>
                  <Input
                    id="name"
                    defaultValue="João da Silva"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="joao.silva@email.com"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone/WhatsApp</Label>
                  <Input
                    id="phone"
                    defaultValue="(11) 99999-9999"
                    className="h-12"
                  />
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-2">
                <Label>Endereço</Label>
                <div className="grid grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cep">CEP</Label>
                    <Input
                      id="cep"
                      defaultValue="01234-567"
                      className="h-12"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="street">Logradouro</Label>
                    <Input
                      id="street"
                      defaultValue="Rua das Flores"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="number">Número</Label>
                    <Input
                      id="number"
                      defaultValue="123"
                      className="h-12"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="complement">Complemento</Label>
                    <Input
                      id="complement"
                      defaultValue="Apto 45"
                      className="h-12"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="neighborhood">Bairro</Label>
                    <Input
                      id="neighborhood"
                      defaultValue="Jardim Primavera"
                      className="h-12"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                      id="city"
                      defaultValue="São Paulo"
                      className="h-12"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="state">Estado</Label>
                    <Select defaultValue="sp">
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sp">São Paulo</SelectItem>
                        <SelectItem value="rj">Rio de Janeiro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="professional" className="space-y-6">
  <Card>
    <CardContent className="p-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="role">Função</Label>
          <Select defaultValue="admin">
            <SelectTrigger className="h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Administrador</SelectItem>
              <SelectItem value="consultant">Consultor</SelectItem>
              <SelectItem value="provider">Fornecedor</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="hire-date">Data de Contratação</Label>
          <Input
            id="hire-date"
            type="date"
            className="h-12"
            defaultValue="2024-01-15"
          />
        </div>
      </div>

      <Separator className="my-6" />

      <div className="space-y-4">
        <Label>Dados Bancários</Label>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bank">Banco</Label>
            <Input
              id="bank"
              defaultValue="Banco do Brasil"
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="account-type">Tipo de Conta</Label>
            <Select defaultValue="checking">
              <SelectTrigger className="h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="checking">Corrente</SelectItem>
                <SelectItem value="savings">Poupança</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="agency">Agência</Label>
            <Input
              id="agency"
              defaultValue="1234-5"
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="account">Conta</Label>
            <Input
              id="account"
              defaultValue="12345-6"
              className="h-12"
            />
          </div>
          <div className="col-span-2 space-y-2">
            <Label htmlFor="pix">Chave PIX</Label>
            <Input
              id="pix"
              defaultValue="123.456.789-00"
              className="h-12"
            />
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</TabsContent>

<TabsContent value="access" className="space-y-6">
  <Card>
    <CardContent className="p-6">
      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="access-level">Nível de Acesso</Label>
          <Select defaultValue="admin">
            <SelectTrigger className="h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Administrador Geral</SelectItem>
              <SelectItem value="manager">Gerente</SelectItem>
              <SelectItem value="consultant">Consultor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Nova Senha</Label>
            <span className="text-sm text-muted-foreground">Opcional</span>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="Digite apenas para alterar a senha atual"
            className="h-12"
          />
          <p className="text-sm text-muted-foreground">
            Mínimo 6 caracteres, incluindo letras, números e caracteres especiais
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
</TabsContent>

<TabsContent value="documents" className="space-y-6">
  <Card>
    <CardContent className="p-6">
      <div className="space-y-6">
        <div>
          <Label className="mb-2 block">Documentos Pessoais</Label>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 border rounded">
              <span>documento_pessoal.pdf</span>
              <Button variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" className="h-24 w-full">
              <Upload className="h-4 w-4 mr-2" />
              Arraste ou clique para anexar novo documento
            </Button>
          </div>
        </div>

        <Separator />

        <div>
          <Label className="mb-2 block">Contrato</Label>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 border rounded">
              <span>contrato_assinado.pdf</span>
              <Button variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" className="h-24 w-full">
              <Upload className="h-4 w-4 mr-2" />
              Arraste ou clique para anexar novo contrato
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="obs">Observações</Label>
          <Textarea
            id="obs"
            defaultValue="Usuário responsável pela administração geral do sistema."
            className="min-h-[100px] resize-none"
          />
        </div>
      </div>
    </CardContent>
  </Card>
</TabsContent>

        {/* Conteúdo das outras tabs igual ao da página de criação, 
            apenas mudando placeholder por defaultValue */}
      </Tabs>

      <div className="flex items-center justify-end gap-4">
        <Button variant="outline" className="h-12" asChild>
          <Link href="/auth/users">
            Cancelar
          </Link>
        </Button>
        <Button className="h-12">
          <Save className="w-4 h-4 mr-2" />
          Salvar Alterações
        </Button>
      </div>
    </div>
  )
}