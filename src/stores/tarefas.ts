import { defineStore } from 'pinia'
import { Tarefa } from '../model/Tarefa.ts'

export const useTarefasStore = defineStore('tarefas', {
  state: () => ({ tarefas: new Array<Tarefa>() }),
  getters: {
    getTarefas: (state) => state.tarefas
  },
  actions: {
    adicionarTarefa(tarefa: Tarefa) {
      this.tarefas.push(tarefa)
    },
    removerTarefa(id: number) {
      this.tarefas.splice(
        this.tarefas.findIndex((t) => t.id === id),
        1
      )
    },
    getNextId() {
      return this.tarefas.length > 0 ? Math.max(...this.tarefas.map((t) => t.id)) + 1 : 1
    },
    limparTarefas() {
      this.tarefas = new Array<Tarefa>()
    }
  }
})
