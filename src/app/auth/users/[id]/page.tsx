import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Pencil, Building2, Mail, Phone, MapPin } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function ViewUserPage() {
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
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="text-lg">JS</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">João da Silva</h2>
              <p className="text-muted-foreground">
                Administrador · CLT
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600">
              Ativo
            </Badge>
            <Link href="/auth/users/1/edit">
              <Button>
                <Pencil className="w-4 h-4 mr-2" />
                Editar Usuário
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-6">Informações Pessoais</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-muted-foreground">CPF/CNPJ</span>
                  <p>123.456.789-00</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Data de Contratação</span>
                  <p>15/01/2024</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div>
                  <span className="text-sm text-muted-foreground">E-mail</span>
                  <p>joao.silva@email.com</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div>
                  <span className="text-sm text-muted-foreground">Telefone/WhatsApp</span>
                  <p>(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div>
                  <span className="text-sm text-muted-foreground">Endereço</span>
                  <p>Rua das Flores, 123</p>
                  <p>Jardim Primavera · São Paulo/SP</p>
                  <p>CEP: 01234-567</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-6">Dados Profissionais</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div>
                  <span className="text-sm text-muted-foreground">Dados Bancários</span>
                  <div className="grid grid-cols-2 gap-4 mt-1">
                    <div>
                      <span className="text-sm text-muted-foreground">Banco</span>
                      <p>Banco do Brasil</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Agência</span>
                      <p>1234-5</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Conta</span>
                      <p>12345-6</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Tipo</span>
                      <p>Conta Corrente</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="text-sm text-muted-foreground">Chave PIX</span>
                    <p>123.456.789-00</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <span className="text-sm text-muted-foreground">Anexos</span>
                <div className="mt-2 space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="#">
                      Contrato.pdf
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="#">
                      Documento_Pessoal.pdf
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="#">
                      Comprovante_Residencia.pdf
                    </Link>
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <span className="text-sm text-muted-foreground">Observações</span>
                <p className="mt-1">
                  Usuário responsável pela administração geral do sistema.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}