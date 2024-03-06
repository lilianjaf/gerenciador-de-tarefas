<template>
  <div class="logar">
    Qual é o seu nome?
    <br />
    <input
      type="text"
      v-model="nome"
      class="form-control"
      placeholder="Digite seu nome"
      aria-label="nome"
    />
    <br />
    <button type="button" class="btn btn-light" @click="logar">Logar</button>
  </div>
</template>

<script lang="ts">
import router from '@/router'
import { defineComponent } from 'vue'
import { useUsuarioNomeStore } from '@/stores/usuarioNome'
import { mapStores } from 'pinia'

export default defineComponent({
  name: 'LogarView',
  data() {
    return {
      nome: ''
    }
  },
  computed: {
    ...mapStores(useUsuarioNomeStore)
  },
  methods: {
    logar() {
      debugger
      this.usuarioNomeStore.setUsuarioNome(this.nome)
      router.push('/tarefa')
    }
  }
})
</script>

<style scoped>
.logar {
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-size: 1.5em;
  color: #1e1f20;
  font-weight: bold;
}
</style>
