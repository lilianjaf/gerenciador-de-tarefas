<template>
  <div>
    <h1>Tarefas</h1>
    <br />
    <div>
      <ul>
        <li v-for="tarefa in tarefasStore.tarefas" :key="tarefa.id">
          {{ tarefa.descricao }}
          <button type="button" class="btn btn-light" @click="removerTarefa(tarefa.id)">x</button>
        </li>
      </ul>
    </div>
    <div>
      <input
        type="text"
        v-model="tarefa.descricao"
        class="form-control"
        placeholder="Digite a tarefa"
        aria-label="tarefa"
      />
      <br />
      <button type="button" class="btn btn-light" @click="adicionarTarefa">Adicionar</button>
      <button type="button" class="btn btn-light" @click="limparTarefas">Limpar todas</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTarefasStore } from '@/stores/tarefas.ts'
import { mapStores } from 'pinia'
import { Tarefa } from '@/model/Tarefa'

export default defineComponent({
  name: 'TarefaView',
  data() {
    return {
      tarefa: new Tarefa('', 0)
    }
  },
  computed: {
    ...mapStores(useTarefasStore)
  },
  methods: {
    adicionarTarefa() {
      this.tarefa.id = this.getNextId()
      this.tarefasStore.adicionarTarefa(this.tarefa)
      this.tarefa = new Tarefa('', 0)
    },
    removerTarefa(id: number) {
      this.tarefasStore.removerTarefa(id)
    },
    getNextId() {
      return this.tarefasStore.getNextId()
    },
    limparTarefas() {
      this.tarefasStore.limparTarefas()
    }
  }
})
</script>

<style scoped></style>
