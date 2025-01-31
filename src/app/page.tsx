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