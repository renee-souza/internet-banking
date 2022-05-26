<template>
  <div class="left-side-screen">
    <div class="header">
      <span class="avatar-account">
        <img src="@/assets/images/avatar.svg" />
      </span>

      <div v-if="dadosUsuario.empresa" class="user-name">
        {{ dadosUsuario.empresa }}
      </div>
      <div v-if="dadosUsuario.cnpj" class="user-cnpj">
        {{ dadosUsuario.cnpj }}
      </div>

      <span class="user-name" v-if="transacoes.length === 0"
        >Aguardando dados...</span
      >

      <div class="types-transactions">
        <img src="@/assets/images/transacoes-icons/transacoes-icons-1.svg" />
        <img src="@/assets/images/transacoes-icons/transacoes-icons-2.svg" />
        <img src="@/assets/images/transacoes-icons/transacoes-icons-3.svg" />
        <img src="@/assets/images/transacoes-icons/transacoes-icons-4.svg" />
      </div>
    </div>

    <div class="lastest-transactions">
      <h3 class="lastest-transactions-title">Últimas transações</h3>
      <div class="division"></div>

      <span class="awaiting-data" v-if="transacoes.length === 0">
        Aguardando dados...
      </span>

      <div class="lastest-transactions-for">
        <div
          class="lastest-transactions-list"
          v-for="(transacao, index) in transacoes"
          :key="index"
        >
          <div class="transactions">
            <img
              src="@/assets/images/transacoes-icons/transacoes-icons-1.svg"
            />
            <div class="transaction-description">
              <div class="name">{{ transacao.proponente }}</div>
              <div class="action">Transferência {{ transacao.tipo }}</div>
            </div>
            <span class="value">R$ {{ transacao.valor }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import endpoints from "../enums/endpoints.enum";

export default {
  name: "TelaLateralEsquerda",
  components: {},
  data() {
    return {
      dadosUsuario: [],
      transacoes: [],
    };
  },
  mounted() {
    this.getDadosUsuario();
    this.getTransacoes();
  },
  methods: {
    getDadosUsuario() {
      axios.get(endpoints.DADOS_USUARIO).then((response) => {
        this.dadosUsuario = response.data;
      });
    },
    getTransacoes() {
      axios.get(endpoints.TRANSACOES).then((response) => {
        this.transacoes = response.data;
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.left-side-screen
  background-color: var(--bg-primary-components)
  color: var(--font-primary-color)
  max-height: var(--height)
  min-height: var(--height)
  text-align: center
  width: 304px

.header
  padding: 24px 32px 24px

.avatar-account > img
  margin-botton: 24px

.user-name
  font-size: 18px
  margin-bottom: 4px
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap

.user-cnpj
  color: var(--font-secondary-color)
  font-size: 12px

.types-transactions
  display: flex
  justify-content: space-between
  margin-top: 16px
  padding: 16px 0 4px

.lastest-transactions-title
  font-size: 14px
  font-weight: 500
  margin: 0 24px 12px
  text-align: left

.division
  border-top: 1px solid var(--bg-cards)
  margin: 0 auto
  width: 292px

.awaiting-data
  display: block
  margin-top: 24px

.lastest-transactions-list
  padding: 6px 16px

.lastest-transactions-for
  height: 418px
  overflow-x: hidden
  overflow-y: scroll
  scrollbar-width: none

.lastest-transactions-for::-webkit-scrollbar
  display: none

.transactions
  align-items: center
  display: flex
  justify-content: center

.transaction-description
  font-size: 11px
  margin: 6px 10px
  width: 124px

.name
  font-weight: 13px
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap

.action
  color: var(--font-secondary-color)
  overflow: hidden
  text-overflow: clip
  white-space: nowrap

.value
  font-size: 12px
</style>
