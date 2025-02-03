// types.ts
type BasicFilter = {
    startDate?: string
    endDate?: string
    [key: string]: any // permite qualquer filtro adicional sem complexidade
  }
  
  type BasicStats = {
    id: string
    name: string
    value: number
    [key: string]: any // flexível para qualquer métrica
  }