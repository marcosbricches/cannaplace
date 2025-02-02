// src/app/supply-chain/logistics/[id]/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type PageParams = {
  params: {
    id: string
  }
}

export default function LogisticsView({ params }: PageParams) {
  return (
    <div className="container mx-auto py-8 max-w-5xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Detalhes da Empresa Logística</h1>
          <p className="text-muted-foreground mt-1">Visualize as informações completas da empresa</p>
        </div>
        <div className="space-x-2">
          <Link href="/supply-chain/logistics">
            <Button variant="outline">Voltar</Button>
          </Link>
          <Link href={`/supply-chain/logistics/${params.id}/edit`}>
            <Button>Editar</Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações da Empresa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Status</h3>
                <p className="text-lg">Ativo</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">CNPJ/EIN</h3>
                <p className="text-lg">12.345.678/0001-90</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Razão Social</h3>
                <p className="text-lg">Logística ABC Ltda</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Representante Legal</h3>
                <p className="text-lg">João Silva</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Data de Contratação</h3>
                <p className="text-lg">01/01/2024</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Email</h3>
                <p className="text-lg">contato@logisticaabc.com.br</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Endereço</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">CEP</h3>
                <p className="text-lg">12345-678</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Logradouro</h3>
                <p className="text-lg">Rua das Flores, 123</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Bairro</h3>
                <p className="text-lg">Centro</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Cidade</h3>
                <p className="text-lg">São Paulo</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Estado</h3>
                <p className="text-lg">SP</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">País</h3>
                <p className="text-lg">Brasil</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informações Financeiras</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Banco</h3>
                <p className="text-lg">Banco XYZ</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Agência</h3>
                <p className="text-lg">1234</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Conta</h3>
                <p className="text-lg">12345-6</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Chave PIX</h3>
                <p className="text-lg">12.345.678/0001-90</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Valor Variável por Frete</h3>
                <p className="text-lg">10%</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-muted-foreground">Spread do Frete</h3>
                <p className="text-lg">5%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Observações</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Empresa parceira desde 2024, responsável pela distribuição na região sudeste.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}