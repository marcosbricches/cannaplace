// app/catalog/brands/[id]/edit/page.tsx
import { ArrowLeft, Upload, Save, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function EditBrandPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <a href="/catalog/brands/1">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </a>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Editar Marca</h1>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Excluir Marca
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
              <AlertDialogDescription>
                Esta ação não pode ser desfeita. Isso excluirá permanentemente a marca
                e todos os dados associados a ela.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                Excluir
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-8">
              {/* Informações Básicas */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Informações Básicas</h2>
                <Separator />
                
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-32 h-32">
                      <img 
                        src="/placeholder-logo.png" 
                        alt="Logo atual" 
                        className="w-32 h-32 rounded-lg object-cover"
                      />
                      <Button 
                        variant="ghost" 
                        className="absolute bottom-2 right-2 h-8 w-8 p-0 bg-background/80 backdrop-blur-sm"
                      >
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex-1">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="status">Status</Label>
                          <Select defaultValue="active">
                            <SelectTrigger id="status">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="active">Ativo</SelectItem>
                              <SelectItem value="inactive">Inativo</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="razaoSocial">Razão Social *</Label>
                      <Input id="razaoSocial" defaultValue="Empresa Exemplo LTDA" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cnpj">CNPJ *</Label>
                      <Input id="cnpj" defaultValue="12.345.678/0001-90" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Representante Legal */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Representante Legal</h2>
                <Separator />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nomeRepresentante">Nome do Representante *</Label>
                    <Input id="nomeRepresentante" defaultValue="João da Silva" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpfRepresentante">CPF do Representante *</Label>
                    <Input id="cpfRepresentante" defaultValue="123.456.789-00" />
                  </div>
                </div>
              </div>

              {/* Contato */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Contato</h2>
                <Separator />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                    <Input id="telefone" defaultValue="+55 (11) 99999-9999" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" type="email" defaultValue="contato@empresa.com" />
                  </div>
                </div>
              </div>

              {/* Endereço */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Endereço</h2>
                <Separator />
                
                <div className="grid gap-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cep">CEP *</Label>
                      <Input id="cep" defaultValue="01234-567" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="logradouro">Logradouro *</Label>
                      <Input id="logradouro" defaultValue="Rua Exemplo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="numero">Número *</Label>
                      <Input id="numero" defaultValue="123" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bairro">Bairro *</Label>
                      <Input id="bairro" defaultValue="Centro" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cidade">Cidade *</Label>
                      <Input id="cidade" defaultValue="São Paulo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estado">Estado *</Label>
                      <Input id="estado" defaultValue="SP" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dados Comerciais */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Dados Comerciais</h2>
                <Separator />
                
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="takeRate">Take Rate (%) *</Label>
                      <Input id="takeRate" type="number" defaultValue="15" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subsidioFrete">Subsídio de Frete</Label>
                      <Input id="subsidioFrete" defaultValue="10% para compras acima de R$ 500,00" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="obs">Observações</Label>
                    <Textarea 
                      id="obs" 
                      defaultValue="Informações adicionais sobre a marca..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline" asChild>
            <a href="/catalog/brands/1">Cancelar</a>
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Salvar Alterações
          </Button>
        </div>
      </div>
    </div>
  )
}