import { defineStore } from 'pinia'
import router from '@/router'

export const useUsuarioNomeStore = defineStore('usuarioNome', {
  state: () => ({ usuarioNome: '' }),
  getters: {
    getUsuarioNome: (state) => state.usuarioNome
  },
  actions: {
    setUsuarioNome(usuarioNome: string) {
      this.usuarioNome = usuarioNome
    },
    deslogar() {
      this.usuarioNome = ''
      router.push('/')
    },
    temNome() {
      return this.usuarioNome !== ''
    }
  }
})
