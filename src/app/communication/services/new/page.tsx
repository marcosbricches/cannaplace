// src/app/communication/services/new/page.tsx
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export default function NewService() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Novo Atendimento</h1>
          <p className="text-muted-foreground">
            Crie um novo atendimento preenchendo as informações abaixo
          </p>
        </div>
        <Link 
          href="/communication/services"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          Voltar para lista
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informações do Atendimento</CardTitle>
          <CardDescription>
            Preencha os dados necessários para registrar o atendimento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-8">
            {/* Informações Principais */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="client">Cliente</Label>
                  <Input id="client" placeholder="Buscar cliente..." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Data de Abertura</Label>
                  <Input type="date" id="date" />
                </div>
              </div>

              <Separator />

              {/* Status e Tipo */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger id="status" className="w-full">
                      <SelectValue placeholder="Selecione o status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ABERTO">ABERTO</SelectItem>
                      <SelectItem value="PROPOSTA">PROPOSTA</SelectItem>
                      <SelectItem value="NEGOCIACAO">NEGOCIAÇÃO</SelectItem>
                      <SelectItem value="FATURADO">FATURADO</SelectItem>
                      <SelectItem value="PERDIDO">PERDIDO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Tipo de Atendimento</Label>
                  <Select>
                    <SelectTrigger id="type" className="w-full">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PROPOSTA">Proposta</SelectItem>
                      <SelectItem value="NEGOCIACAO">Negociação</SelectItem>
                      <SelectItem value="SAC">SAC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              {/* Campos SAC */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="order">Pedido Relacionado</Label>
                  <Input id="order" placeholder="Digite o número do pedido" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sacType">Tipo de Solicitação SAC</Label>
                  <Select>
                    <SelectTrigger id="sacType" className="w-full">
                      <SelectValue placeholder="Selecione o tipo de SAC" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="TROCA">Troca</SelectItem>
                      <SelectItem value="REPOSICAO">Reposição</SelectItem>
                      <SelectItem value="RECLAMACAO">Reclamação</SelectItem>
                      <SelectItem value="SUGESTAO">Sugestão</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Observações */}
            <div className="space-y-2">
              <Label htmlFor="observation">Observações</Label>
              <Textarea 
                id="observation" 
                placeholder="Adicione observações relevantes sobre o atendimento..."
                className="min-h-[150px] resize-none"
              />
            </div>

            {/* Ações */}
            <div className="flex items-center justify-end space-x-4">
              <Link 
                href="/communication/services"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Cancelar
              </Link>
              <Button type="submit">Criar Atendimento</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}