import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save, Upload } from "lucide-react"
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

export default function NewUserPage() {
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
        <h2 className="text-2xl font-bold tracking-tight">Novo Usuário</h2>
        <p className="text-muted-foreground">
          Preencha as informações para criar um novo usuário
        </p>
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
                  <Label htmlFor="type">Tipo de Pessoa</Label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pf">Pessoa Física</SelectItem>
                      <SelectItem value="pj">Pessoa Jurídica</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="document">CPF/CNPJ</Label>
                  <Input
                    id="document"
                    placeholder="Digite o documento"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Nome/Razão Social</Label>
                  <Input
                    id="name"
                    placeholder="Digite o nome completo"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Digite o e-mail"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone/WhatsApp</Label>
                  <Input
                    id="phone"
                    placeholder="Digite o telefone"
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
                      placeholder="00000-000"
                      className="h-12"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="street">Logradouro</Label>
                    <Input
                      id="street"
                      placeholder="Rua, Avenida, etc"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="number">Número</Label>
                    <Input
                      id="number"
                      placeholder="Nº"
                      className="h-12"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="complement">Complemento</Label>
                    <Input
                      id="complement"
                      placeholder="Apto, Sala, etc"
                      className="h-12"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="neighborhood">Bairro</Label>
                    <Input
                      id="neighborhood"
                      placeholder="Digite o bairro"
                      className="h-12"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                      id="city"
                      placeholder="Digite a cidade"
                      className="h-12"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="state">Estado</Label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione o estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sp">São Paulo</SelectItem>
                        <SelectItem value="rj">Rio de Janeiro</SelectItem>
                        {/* Outros estados */}
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
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione a função" />
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
                      placeholder="Código ou nome do banco"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="account-type">Tipo de Conta</Label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione o tipo" />
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
                      placeholder="Número da agência"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="account">Conta</Label>
                    <Input
                      id="account"
                      placeholder="Número da conta"
                      className="h-12"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="pix">Chave PIX</Label>
                    <Input
                      id="pix"
                      placeholder="CPF, E-mail, Telefone ou Chave Aleatória"
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
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="access-level">Nível de Acesso</Label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione o nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Administrador Geral</SelectItem>
                      <SelectItem value="manager">Gerente</SelectItem>
                      <SelectItem value="consultant">Consultor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Senha Inicial</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Mínimo 6 caracteres"
                    className="h-12"
                  />
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
                  <Button variant="outline" className="h-24 w-full">
                    <Upload className="h-4 w-4 mr-2" />
                    Arraste ou clique para anexar
                  </Button>
                </div>

                <Separator />

                <div>
                  <Label className="mb-2 block">Contrato</Label>
                  <Button variant="outline" className="h-24 w-full">
                    <Upload className="h-4 w-4 mr-2" />
                    Arraste ou clique para anexar
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="obs">Observações</Label>
                  <Textarea
                    id="obs"
                    placeholder="Informações adicionais sobre o usuário"
                    className="min-h-[100px] resize-none"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex items-center justify-end gap-4">
        <Button variant="outline" className="h-12" asChild>
          <Link href="/auth/users">
            Cancelar
          </Link>
        </Button>
        <Button className="h-12">
          <Save className="w-4 h-4 mr-2" />
          Criar Usuário
        </Button>
      </div>
    </div>
  )
}