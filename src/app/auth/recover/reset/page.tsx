import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Lock, ShieldCheck, AlertCircle } from "lucide-react"

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-[400px] p-4 space-y-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-2 text-center">
            <div className="w-full flex justify-center mb-2">
              <div className="p-3 rounded-full bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">
              Nova Senha
            </CardTitle>
            <CardDescription>
              Digite e confirme sua nova senha de acesso
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Nova Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite a nova senha"
                  className="pl-10 h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirme a nova senha"
                  className="pl-10 h-12"
                />
              </div>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                A senha deve conter no mínimo 4 caracteres, incluindo letras, números e caracteres especiais
              </AlertDescription>
            </Alert>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full h-12">
              Redefinir Senha
            </Button>
            <Button variant="outline" className="w-full h-12" asChild>
              <Link href="/auth/login">
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