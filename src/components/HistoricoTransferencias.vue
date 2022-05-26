<template>
  <div class="historic">
    <div class="historic-header">
      <h3 class="historic-title">Histórico</h3>

      <div class="dropdown">
        <button @click="openMenuOrdenation()" class="btn-ordenation">
          <img class="order-list" src="@/assets/images/ordem-lista.svg" />
          Ordenado por:
          <span class="btn-ordenation-text-green">{{ sortedBy }}</span>
          <img class="arrow" src="@/assets/images/arrow-down.svg" />
        </button>

        <div class="dropdown-content" :class="isOpen">
          <span class="dropdown-content-title">Escolha uma ordenação</span>

          <div
            class="option-radio"
            @click="
              closeOptionsOrdenation('Ocorrência (decrescente)');
              sortResultsOccurrence('decrec', 'data', 'hora');
            "
          >
            <input name="sort" type="radio" id="occurrence_desc" />
            <label class="label-check" for="occurrence_desc">
              Ordenar por ocorrência (decrescente)
            </label>
          </div>

          <div
            class="option-radio"
            @click="
              closeOptionsOrdenation('Ocorrência (crescente)');
              sortResultsOccurrence('cresc', 'data', 'hora');
            "
          >
            <input name="sort" type="radio" id="occurrence_cres" />
            <label class="label-check" for="occurrence_cres">
              Ordenar por ocorrência (crescente)
            </label>
          </div>

          <div
            class="option-radio"
            @click="
              closeOptionsOrdenation('Valor (decrescente)');
              sortResultsValue('decrec', 'valor');
            "
          >
            <input name="sort" type="radio" id="value_desc" />
            <label class="label-check" for="value_desc">
              Ordenar por valor (decrescente)
            </label>
          </div>

          <div
            class="option-radio"
            @click="
              closeOptionsOrdenation('Valor (crescente)');
              sortResultsValue('cresc', 'valor');
            "
          >
            <input name="sort" type="radio" id="value_cres" />
            <label class="label-check" for="value_cres">
              Ordenar por valor (crescente)
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="historic-list">
      <table>
        <thead>
          <tr class="table-header">
            <th>Tipo</th>
            <th>Proponente</th>
            <th>Ocorrência</th>
            <th>valor</th>
          </tr>
        </thead>

        <span class="awaiting-data" v-if="transactions.length === 0">
          Aguardando dados...
        </span>

        <tbody v-for="(transacao, index) in transactions" :key="index">
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
      transactions: [],
      sortedBy: "Ocorrência (decrescente)",
    };
  },
  mounted() {
    this.getTransactions();
  },
  methods: {
    openMenuOrdenation() {
      this.isOpen = this.isOpen === "" ? "is-open" : "";
    },
    closeOptionsOrdenation(setSort) {
      this.sortedBy = setSort;

      setTimeout(() => (this.isOpen = ""), 300);
    },
    getTransactions() {
      axios.get(endpoints.TRANSACTIONS).then((response) => {
        this.transactions = response.data;
      });
    },
    sortResultsOccurrence(sense, firstOrdination, secondOrdination) {
      function compare(a, b) {
        if (
          a[(firstOrdination, secondOrdination ?? "")] <
          b[(firstOrdination, secondOrdination ?? "")]
        )
          return -1;
        if (
          a[(firstOrdination, secondOrdination ?? "")] >
          b[(firstOrdination, secondOrdination ?? "")]
        )
          return 1;
        return 0;
      }

      if (sense === "decrec") {
        return this.transactions.sort(compare).reverse();
      }

      return this.transactions.sort(compare);
    },
    sortResultsValue(sense, sort) {
      function compare(a, b) {
        if (a[sort] < b[sort]) return -1;
        if (a[sort] > b[sort]) return 1;
        return 0;
      }

      if (sense === "decrec") {
        return this.transactions.sort(compare).reverse();
      }

      return this.transactions.sort(compare);
    },
  },
};
</script>

<style lang="sass" scoped>
.historic
  padding: 32px 32px 0

.historic-header
  display: flex
  justify-content: space-between
  margin-bottom: 16px

.historic-title
  font-size: 18px

.btn-ordenation
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

.order-list
  height: 16px
  margin-right: 4px
  padding: 0
  width: 16px

.btn-ordenation-text-green
  color: var(--font-limit-green)
  margin: 0 8px 0 4px

.open-menu
  display: block

.arrow
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

.historic-list
  max-height: 458px
  overflow-x: hidden
  overflow-y: scroll
  scrollbar-width: none

.historic-list::-webkit-scrollbar
  display: none

table
  border-collapse: collapse
  width: 100%

.table-header
  height: 40px

thead
  background-color: var(--bg-content)
  border-bottom: 3px solid var(--bg-cards)

.awaiting-data
  display: block
  margin-top: 24px

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
