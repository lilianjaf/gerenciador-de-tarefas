export class Tarefa {
  id: number
  descricao: string
  feita: boolean

  constructor(nome: string, id: number) {
    this.id = id
    this.descricao = nome
    this.feita = false
  }
}
