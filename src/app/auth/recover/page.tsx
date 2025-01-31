import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Mail, AlertCircle } from "lucide-react"

export default function RecoverPasswordPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-[400px] p-4 space-y-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-2xl font-bold">
              Recuperar Senha
            </CardTitle>
            <CardDescription>
              Digite seu e-mail para receber as instruções
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail cadastrado"
                  className="pl-10 h-12"
                />
              </div>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Enviaremos um link de recuperação válido por 24 horas
              </AlertDescription>
            </Alert>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full h-12">
              Enviar Link de Recuperação
            </Button>
            <Button variant="outline" className="w-full h-12" asChild>
              <Link href="/auth/login" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar para o Login
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Sistema Administrativo · CannaPlace
          </p>
        </div>
      </div>
    </div>
  )
}