// app/catalog/promotions/page.tsx
import { PlusCircle, Search, Filter, Tag, MoreHorizontal, Percent, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PromotionsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Promoções</h1>
        <Button asChild>
          <a href="/catalog/promotions/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Nova Promoção
          </a>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Campanhas Promocionais</CardTitle>
            <Tabs defaultValue="active" className="space-y-4">
              <TabsList>
                <TabsTrigger value="active">Ativas</TabsTrigger>
                <TabsTrigger value="scheduled">Agendadas</TabsTrigger>
                <TabsTrigger value="finished">Encerradas</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar por nome, marca ou produto..." 
                className="pl-8"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </div>

          <div className="space-y-4">
            {/* Promoções de Produtos */}
            {[1, 2].map((item) => (
              <Card key={item}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                      <Tag className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 grid grid-cols-6 items-center gap-4">
                      <div className="col-span-2">
                        <h3 className="font-medium">Promoção de {item === 1 ? 'Natal' : 'Verão'}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item === 1 ? '20% de desconto em produtos selecionados' : 'Compre 2, Leve 3'}
                        </p>
                      </div>
                      <div className="justify-self-center">
                        <Badge variant="outline" className="gap-1">
                          <Percent className="h-3 w-3" />
                          {item === 1 ? '20%' : '33%'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3].map((product) => (
                          <Avatar key={product} className="h-8 w-8">
                            <AvatarImage src="/placeholder-product.png" />
                            <AvatarFallback>P{product}</AvatarFallback>
                          </Avatar>
                        ))}
                        <span className="text-sm text-muted-foreground">+2</span>
                      </div>
                      <div className="text-sm">
                        <p>01/12/2024</p>
                        <p className="text-muted-foreground">até 31/01/2025</p>
                      </div>
                      <div className="justify-self-end">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <a href={`/catalog/promotions/${item}`}>Visualizar</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <a href={`/catalog/promotions/${item}/edit`}>Editar</a>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Promoções de Frete */}
            {[1].map((item) => (
              <Card key={`frete-${item}`}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                      <Truck className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 grid grid-cols-6 items-center gap-4">
                      <div className="col-span-2">
                        <h3 className="font-medium">Frete Grátis</h3>
                        <p className="text-sm text-muted-foreground">
                          Para compras acima de R$ 500,00
                        </p>
                      </div>
                      <div className="justify-self-center">
                        <Badge variant="outline" className="gap-1">
                          <Percent className="h-3 w-3" />
                          100%
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Todas as Marcas</Badge>
                      </div>
                      <div className="text-sm">
                        <p>01/01/2025</p>
                        <p className="text-muted-foreground">até 31/01/2025</p>
                      </div>
                      <div className="justify-self-end">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <a href="/catalog/promotions/frete-1">Visualizar</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <a href="/catalog/promotions/frete-1/edit">Editar</a>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}