<template>
  <div class="historico">
    <div class="historico-header">
      <h3 class="historico-title">Histórico</h3>

      <div class="dropdown">
        <button @click="openMenuOrdenation()" class="btn-ordenacao">
          <img class="ordem-lista" src="@/assets/images/ordem-lista.svg" />
          Ordenado por:
          <span class="btn-ordenacao-text-green">Completo</span>
          <img class="seta" src="@/assets/images/arrow-down.svg" />
        </button>

        <div class="dropdown-content" :class="isOpen">
          <span class="dropdown-content-title">Escolha uma ordenação</span>

          <div
            class="option-radio"
            @click="
              closeOptionsOrdenation();
              ordenarResultados('decrec', 'data', 'hora');
            "
          >
            <input name="ordenacao" type="radio" id="ocorrencia_desc" />
            <label class="label-check" for="ocorrencia_desc">
              Ordenar por ocorrência (decrescente)
            </label>
          </div>

          <div
            class="option-radio"
            @click="
              closeOptionsOrdenation();
              ordenarResultados('cresc', 'data', 'hora');
            "
          >
            <input name="ordenacao" type="radio" id="ocorrencia_cres" />
            <label class="label-check" for="ocorrencia_cres">
              Ordenar por ocorrência (crescente)
            </label>
          </div>

          <div
            class="option-radio"
            @click="
              closeOptionsOrdenation();
              ordenarResultados('decrec', 'valor');
            "
          >
            <input name="ordenacao" type="radio" id="valor_desc" />
            <label class="label-check" for="valor_desc">
              Ordenar por valor (decrescente)
            </label>
          </div>

          <div
            class="option-radio"
            @click="
              closeOptionsOrdenation();
              ordenarResultados('cresc', 'valor');
            "
          >
            <input name="ordenacao" type="radio" id="valor_cres" />
            <label class="label-check" for="valor_cres">
              Ordenar por valor (crescente)
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="historico-list">
      <table>
        <thead>
          <tr class="table-header">
            <th>Tipo</th>
            <th>Proponente</th>
            <th>Ocorrência</th>
            <th>valor</th>
          </tr>
        </thead>

        <tbody v-for="(transacao, index) in transacoes" :key="index">
          <tr>
            <td>
              <img
                src="@/assets/images/transacoes-icons/transacoes-icons-1.svg"
              />
            </td>
            <td>{{ transacao.proponente }}</td>
            <td>{{ transacao.data }} às {{ transacao.hora }}</td>
            <td>R$ {{ transacao.valor }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import endpoints from "../enums/endpoints.enum";

export default {
  name: "HistoricoTransferencias",
  components: {},
  data() {
    return {
      isOpen: "",
      transacoes: [],
      tipoOrdenacao: "",
    };
  },
  mounted() {
    this.getTransacoes();
  },
  methods: {
    openMenuOrdenation() {
      this.isOpen = this.isOpen === "" ? "is-open" : "";
    },
    closeOptionsOrdenation() {
      setTimeout(() => (this.isOpen = ""), 300);
    },
    getTransacoes() {
      axios.get(endpoints.TRANSACOES).then((response) => {
        this.transacoes = response.data;
      });
    },
    ordenarResultados(sentido, ordenacao1, ordenacao2) {
      function compare(a, b) {
        if (
          a[(ordenacao1, ordenacao2 ? ordenacao2 : "")] <
          b[(ordenacao1, ordenacao2 ? ordenacao2 : "")]
        )
          return -1;
        if (
          a[(ordenacao1, ordenacao2 ? ordenacao2 : "")] >
          b[(ordenacao1, ordenacao2 ? ordenacao2 : "")]
        )
          return 1;
        return 0;
      }

      if (sentido === "decrec") {
        return this.transacoes.sort(compare).reverse();
      }

      return this.transacoes.sort(compare);
    },
  },
};
</script>

<style lang="sass" scoped>
.historico
  padding: 32px 32px 0

.historico-header
  display: flex
  justify-content: space-between
  margin-bottom: 16px

.historico-title
  font-size: 18px

.btn-ordenacao
  align-items: center
  background-color: var(--bg-cards)
  border: none
  border-radius: var(--border-radius)
  cursor: pointer
  color: var(--font-secondary-color)
  display: flex
  font-size: 12px
  font-weight: 500
  height: 34px
  line-height: 2
  padding: 8px 12px
  &:focus
    outline: none

.ordem-lista
  padding: 0
  height: 16px
  width: 16px

.btn-ordenacao-text-green
  color: var(--font-limit-green)
  margin: 0 8px 0 4px

.open-menu
  display: block

.seta
  padding: 0
  width: 8px

.is-open
  display: block !important

.dropdown-content
  background-color: var(--bg-cards)
  border-radius: var(--border-radius)
  box-shadow: 0px 4px 12px rgba(30, 32, 38, 0.04)
  display: none
  font-size: 14px
  font-weight: 400
  gap: 8px
  margin-top: 5px
  overflow: hidden
  padding: 16px
  position: absolute
  width: 354px

.dropdown-content-title
  margin-bottom: 16px
  display: block

.option-radio
  align-items: center
  display: flex
  gap: 16px
  margin: 8px 0
  position: relative

input[type=radio]
  position: absolute
  visibility: hidden

input[type=radio] + label
  cursor: pointer

input[type=radio] + label:before
  content: ""
  display: inline-block
  height: 16px
  margin-right: 4px
  vertical-align: baseline

input[type=radio] + label:before
  border: 2px solid var(--font-primary-color)
  border-radius: 50%
  width: 16px

input[type=radio]:checked + label:before
  border: 5px solid var(--btn-transferir)

.historico-list
  max-height: 458px
  overflow-x: hidden
  overflow-y: scroll
  scrollbar-width: none

.historico-list::-webkit-scrollbar
  display: none

table
  border-collapse: collapse
  width: 100%

.table-header
  height: 40px

thead
  background-color: var(--bg-content)
  border-bottom: 3px solid var(--bg-cards)

td > img
  height: 40px
  padding: 0
  width: 40px

th:nth-child(2), td:nth-child(2)
  text-align: left

td:nth-child(3)
  font-size: 12px

td, th
  border-bottom: 1px solid var(--bg-cards)
  border-top: 1px solid var(--bg-cards)
  font-weight: 400
  padding: 8px
  text-align: center
</style>
