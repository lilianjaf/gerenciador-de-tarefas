import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useUsuarioNomeStore } from './usuarioNome'

describe('usuarioNome', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('deve funcionar set e get do usuarioNome', () => {
    const store = useUsuarioNomeStore()
    store.setUsuarioNome('Fulano de Tal')
    expect(store.getUsuarioNome).toBe('Fulano de Tal')
  })

  it('tem nome deve ser verdadeiro se houver um nome setado', () => {
    const store = useUsuarioNomeStore()
    store.setUsuarioNome('Fulano de Tal')
    expect(store.temNome()).toBe(true)
  })

  it('tem nome deve ser falso se não houver um nome setado', () => {
    const store = useUsuarioNomeStore()
    store.deslogar()
    expect(store.temNome()).toBe(false)
  })
})
