<template>
  <div class="conteudo">
    <div class="bloco">
      <div class="mario">
        <img src="/assets/img/11700.gif" />
      </div>
      <br />
      <div>
        <UsuarioLogado />
      </div>
      <div>
        <div v-if="!temNome()">
          <br />
          <nav>
            <router-link to="/logar" class="btn btn-light">Fazer login</router-link>
          </nav>
        </div>
        <br />
        <br />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UsuarioLogado from '@/components/UsuarioLogado.vue'
import { mapStores } from 'pinia'
import { useUsuarioNomeStore } from '@/stores/usuarioNome'

export default defineComponent({
  name: 'App',
  components: {
    UsuarioLogado
  },
  computed: {
    ...mapStores(useUsuarioNomeStore)
  },
  methods: {
    temNome() {
      return this.usuarioNomeStore.temNome()
    }
  }
})
</script>
<style scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
  padding: 30px;
}
.conteudo {
  text-align: center;
}

.bloco {
  margin: 0 auto;
  width: 600px;
}

.mario {
  margin: 30px 30px 30px 30px;
}
</style>
