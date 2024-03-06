import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTarefasStore } from './tarefas'

describe('tarefas', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('deve funcionar adicionar e remover tarefas', () => {
    const store = useTarefasStore()
    store.adicionarTarefa({ id: 1, descricao: 'Tarefa 1', feita: false })
    store.adicionarTarefa({ id: 2, descricao: 'Tarefa 2', feita: false })
    store.adicionarTarefa({ id: 3, descricao: 'Tarefa 3', feita: false })
    expect(store.getTarefas.length).toBe(3)
    store.removerTarefa(2)
    expect(store.getTarefas.length).toBe(2)
  })

  it('deve funcionar limpar tarefas', () => {
    const store = useTarefasStore()
    store.adicionarTarefa({ id: 1, descricao: 'Tarefa 1', feita: false })
    store.adicionarTarefa({ id: 2, descricao: 'Tarefa 2', feita: false })
    store.adicionarTarefa({ id: 3, descricao: 'Tarefa 3', feita: false })
    expect(store.getTarefas.length).toBe(3)
    store.limparTarefas()
    expect(store.getTarefas.length).toBe(0)
  })

  it('deve funcionar getNextId', () => {
    const store = useTarefasStore()
    store.adicionarTarefa({ id: 1, descricao: 'Tarefa 1', feita: false })
    store.adicionarTarefa({ id: 2, descricao: 'Tarefa 2', feita: false })
    store.adicionarTarefa({ id: 3, descricao: 'Tarefa 3', feita: false })
    expect(store.getNextId()).toBe(4)
  })
})
