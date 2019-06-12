export interface Usuario{
    id: string
    email: string
    time: {
        nome: string,
        nomeTime: string
    }
    carteira: {
        montanteCarteira: number
    }
}