<template>
  <div class="user">
    <div v-if="temNome()">
      Seja bem-vindo, {{ usuarioNomeStore.usuarioNome }}! (<button
        @click="deslogar"
        class="btn btn-light"
      >
        deslogar</button
      >)
    </div>
    <div v-if="!temNome()">
      <div>Seja bem-vindo</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useUsuarioNomeStore } from '@/stores/usuarioNome'

export default defineComponent({
  name: 'UsuarioLogado',
  computed: {
    ...mapStores(useUsuarioNomeStore)
  },
  methods: {
    deslogar() {
      this.usuarioNomeStore.deslogar()
    },
    temNome() {
      return this.usuarioNomeStore.temNome()
    }
  }
})
</script>

<style scoped>
.user {
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-size: 1.5em;
  color: #1e1f20;
  font-weight: bold;
}
</style>
