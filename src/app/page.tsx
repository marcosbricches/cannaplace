import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
 return (
   <div className="min-h-screen p-8">
     <div className="max-w-[1200px] mx-auto space-y-8">
     <Card>
 <CardContent className="p-6">
   <div className="space-y-6">
     <div className="space-y-1">
       <h2 className="text-xl font-semibold">Comunicação e Notificações</h2>
       <p className="text-sm text-muted-foreground">
         Gerenciamento completo de atendimentos, alertas e configurações de comunicação
       </p>
     </div>

     <div className="grid md:grid-cols-2 gap-4">
       <Link 
         href="/communication/services" 
         className="group p-4 rounded-lg border hover:border-primary transition-colors"
       >
         <div className="flex items-center justify-between mb-1">
           <h3 className="font-medium">Atendimentos</h3>
           <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
         </div>
         <p className="text-sm text-muted-foreground">
           Gestão de atendimentos, SAC e acompanhamento de solicitações
         </p>
       </Link>

       <Link 
         href="/communication/alerts" 
         className="group p-4 rounded-lg border hover:border-primary transition-colors"
       >
         <div className="flex items-center justify-between mb-1">
           <h3 className="font-medium">Alertas</h3>
           <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
         </div>
         <p className="text-sm text-muted-foreground">
           Configure e gerencie alertas automáticos do sistema
         </p>
       </Link>

       <Link 
         href="/communication/settings" 
         className="group p-4 rounded-lg border hover:border-primary transition-colors"
       >
         <div className="flex items-center justify-between mb-1">
           <h3 className="font-medium">Configurações</h3>
           <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
         </div>
         <p className="text-sm text-muted-foreground">
           Configuração de WhatsApp, e-mail e templates de mensagem
         </p>
       </Link>

       <Link 
         href="/communication/settings/templates/1" 
         className="group p-4 rounded-lg border hover:border-primary transition-colors"
       >
         <div className="flex items-center justify-between mb-1">
           <h3 className="font-medium">Templates</h3>
           <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
         </div>
         <p className="text-sm text-muted-foreground">
           Gerenciamento de modelos de mensagens para WhatsApp e e-mail
         </p>
       </Link>
     </div>
   </div>
 </CardContent>
</Card>
     <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Financeiro</h2>
              <p className="text-sm text-muted-foreground">
                Gerenciamento completo do sistema financeiro
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/financial" 
                className="group p-4 rounded-lg border hover:border-primary transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium">Dashboard Financeiro</h3>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Visão geral de todas as operações financeiras
                </p>
              </Link>

              <Link 
                href="/financial/commissions" 
                className="group p-4 rounded-lg border hover:border-primary transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium">Comissões</h3>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Gestão de comissões de consultores e assessorias
                </p>
              </Link>

              <Link 
                href="/financial/accounts" 
                className="group p-4 rounded-lg border hover:border-primary transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium">Contas</h3>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Controle de contas a pagar e receber
                </p>
              </Link>

              <Link 
                href="/financial/invoices" 
                className="group p-4 rounded-lg border hover:border-primary transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium">Notas Fiscais</h3>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Emissão e controle de notas fiscais
                </p>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
     <Card>
  <CardContent className="p-6">
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Logística e Estoque</h2>
        <p className="text-sm text-muted-foreground">
          Gerenciamento de estoque, empresas logísticas e integrações com transportadoras
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Link 
          href="/logistics" 
          className="group p-4 rounded-lg border hover:border-primary transition-colors"
        >
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium">Gestão de Estoque</h3>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <p className="text-sm text-muted-foreground">
            Controle de entrada e saída de produtos, lotes e validades
          </p>
        </Link>

        <Link 
          href="/logistics" 
          className="group p-4 rounded-lg border hover:border-primary transition-colors"
        >
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium">Empresas Logísticas</h3>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <p className="text-sm text-muted-foreground">
            Cadastro e gestão de transportadoras e serviços logísticos
          </p>
        </Link>

        <Link 
          href="/logistics/settings/courier" 
          className="group p-4 rounded-lg border hover:border-primary transition-colors"
        >
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium">Courier (Principal)</h3>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <p className="text-sm text-muted-foreground">
            Configuração e monitoramento da integração Courier
          </p>
        </Link>

        <Link 
          href="/logistics/settings/ups" 
          className="group p-4 rounded-lg border hover:border-primary transition-colors"
        >
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium">UPS (Secundário)</h3>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <p className="text-sm text-muted-foreground">
            Configuração de backup e failover com UPS
          </p>
        </Link>
      </div>
    </div>
  </CardContent>
  </Card>
     <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">Pedidos e Orçamentos</h2>
            <p className="text-sm text-muted-foreground">
              Gestão completa de pedidos, orçamentos e todo o fluxo de vendas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/orders" 
              className="group p-4 rounded-lg border hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium">Gestão de Pedidos</h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                Acompanhamento e gerenciamento de todo ciclo do pedido
              </p>
            </Link>

            <Link 
              href="/orders/quotations" 
              className="group p-4 rounded-lg border hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium">Orçamentos</h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                Controle de orçamentos e propostas comerciais
              </p>
            </Link>

            <Link 
              href="/orders/documentation" 
              className="group p-4 rounded-lg border hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium">Validação de Documentos</h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                Gestão de receitas médicas e documentações necessárias
              </p>
            </Link>

            <Link 
              href="/orders/logistics" 
              className="group p-4 rounded-lg border hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium">Logística e Entrega</h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                Acompanhamento de transportadoras e status de entregas
              </p>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
     <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">Catálogo e Produtos</h2>
            <p className="text-sm text-muted-foreground">
              Gerenciamento completo de marcas, categorias, produtos e promoções
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/catalog/brands" 
              className="group p-4 rounded-lg border hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium">Cadastro de Marcas</h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                Gerenciamento de marcas parceiras e suas informações
              </p>
            </Link>

            <Link 
              href="/catalog/categories" 
              className="group p-4 rounded-lg border hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium">Categorias e Subcategorias</h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                Organização hierárquica de produtos no catálogo
              </p>
            </Link>

            <Link 
              href="/catalog/products" 
              className="group p-4 rounded-lg border hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium">Produtos</h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                Gerenciamento do catálogo de produtos e variações
              </p>
            </Link>

            <Link 
              href="/catalog/promotions" 
              className="group p-4 rounded-lg border hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium">Campanhas e Promoções</h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                Gestão de campanhas promocionais e descontos
              </p>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
     <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">Gestão de Pessoas</h2>
            <p className="text-sm text-muted-foreground">
              Gerenciamento completo de turmas, equipes e comissões
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/people-management/teams" 
              className="group p-4 rounded-lg border hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium">Turmas de Consultores</h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                Gerenciamento de turmas para análise de KPIs de vendas
              </p>
            </Link>

            <Link 
              href="/people-management/consultant-groups" 
              className="group p-4 rounded-lg border hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium">Equipes de Consultores</h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                Organização de consultores em equipes com gestores
              </p>
            </Link>

            <Link 
              href="/people-management/commissions" 
              className="group p-4 rounded-lg border hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium">Comissões</h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                Configuração de comissões para consultores e assessorias
              </p>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
       <Card>
         <CardContent className="p-6">
           <div className="space-y-6">
             <div className="space-y-1">
               <h2 className="text-xl font-semibold">Autenticação Staff</h2>
               <p className="text-sm text-muted-foreground">
                 Gestão completa de acessos e usuários do sistema
               </p>
             </div>

             <div className="grid md:grid-cols-2 gap-4">
               <Link 
                 href="/auth/login" 
                 className="group p-4 rounded-lg border hover:border-primary transition-colors"
               >
                 <div className="flex items-center justify-between mb-1">
                   <h3 className="font-medium">Login</h3>
                   <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                 </div>
                 <p className="text-sm text-muted-foreground">
                   Acessar o sistema com usuário e senha
                 </p>
               </Link>

               <Link 
                 href="/auth/recover" 
                 className="group p-4 rounded-lg border hover:border-primary transition-colors"
               >
                 <div className="flex items-center justify-between mb-1">
                   <h3 className="font-medium">Recuperação de Senha</h3>
                   <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                 </div>
                 <p className="text-sm text-muted-foreground">
                   Recuperar acesso através do e-mail
                 </p>
               </Link>

               <Link 
                 href="/auth/access-levels" 
                 className="group p-4 rounded-lg border hover:border-primary transition-colors"
               >
                 <div className="flex items-center justify-between mb-1">
                   <h3 className="font-medium">Níveis de Acesso</h3>
                   <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                 </div>
                 <p className="text-sm text-muted-foreground">
                   Customização dos níveis de acesso dos usuários
                 </p>
               </Link>

               <Link 
                 href="/auth/users" 
                 className="group p-4 rounded-lg border hover:border-primary transition-colors"
               >
                 <div className="flex items-center justify-between mb-1">
                   <h3 className="font-medium">Cadastro de Usuários</h3>
                   <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                 </div>
                 <p className="text-sm text-muted-foreground">
                   Gerenciamento completo dos usuários do sistema
                 </p>
               </Link>
             </div>
           </div>
         </CardContent>
       </Card>
     </div>
   </div>
 )
}