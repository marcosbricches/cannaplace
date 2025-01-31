// app/catalog/brands/new/page.tsx
import { ArrowLeft, Upload } from "lucide-react"
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

export default function NewBrandPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <a href="/catalog/brands">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </a>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Nova Marca</h1>
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
                    <div className="w-32 h-32 border-2 border-dashed rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                        <span className="text-sm text-muted-foreground mt-2 block">Upload Logo</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="status">Status</Label>
                          <Select>
                            <SelectTrigger id="status">
                              <SelectValue placeholder="Selecione" />
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
                      <Input id="razaoSocial" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cnpj">CNPJ *</Label>
                      <Input id="cnpj" />
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
                    <Input id="nomeRepresentante" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpfRepresentante">CPF do Representante *</Label>
                    <Input id="cpfRepresentante" />
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
                    <Input id="telefone" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" type="email" />
                  </div>
                </div>
              </div>

              {/* Endereço */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Endereço</h2>
                <Separator />
                
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cep">CEP *</Label>
                      <Input id="cep" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="logradouro">Logradouro *</Label>
                      <Input id="logradouro" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="numero">Número *</Label>
                      <Input id="numero" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bairro">Bairro *</Label>
                      <Input id="bairro" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cidade">Cidade *</Label>
                      <Input id="cidade" />
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
                      <Label htmlFor="takeRate">Take Rate (%)*</Label>
                      <Input id="takeRate" type="number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subsidioFrete">Subsídio de Frete</Label>
                      <Input id="subsidioFrete" type="number" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="obs">Observações</Label>
                    <Textarea id="obs" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline" asChild>
            <a href="/catalog/brands">Cancelar</a>
          </Button>
          <Button>Salvar</Button>
        </div>
      </div>
    </div>
  )
}