<template>
  <div class="home">
    <div class="header">
      <h1 class="hello">Olá, {{ dadosUsuario.nome }}! 😊</h1>
      <label class="search-label">
        <input
          class="search-input"
          placeholder="Procurando algo?"
          type="text"
        />
      </label>
    </div>

    <div class="cards">
      <div id="cards-saldo" class="cards-saldo">
        <CardSaldo
          :label="valoresPrincipais[0]?.saldo.label"
          :valor="valoresPrincipais[0]?.saldo.value"
        />
        <CardSaldo
          :label="valoresPrincipais[1]?.fatura.label"
          :valor="valoresPrincipais[1]?.fatura.value"
        />
      </div>
      <h3 class="title-gasto">Gastos por categoria</h3>

      <div id="cards-gasto" class="cards-gasto">
        <div v-for="(categoria, index) in categorias" :key="index">
          <CardGasto
            :categoria="categoria.categoria"
            :valor="categoria.valor"
            :limite="categoria.limite"
            :porcentagem="categoria.porcentagem"
            :limite_color="categoria.limite_color"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import endpoints from "../enums/endpoints.enum";

import CardSaldo from "../components/CardSaldo.vue";
import CardGasto from "../components/CardGasto.vue";

export default {
  name: "Home",
  components: { CardSaldo, CardGasto },
  data() {
    return {
      dadosUsuario: [],
      valoresPrincipais: [],
      categorias: [],
    };
  },
  mounted() {
    this.getDadosUsuario();
    this.getValoresPrincipais();
    this.getCategorias();

    const scrollContainerGasto = document.querySelector(".cards-gasto");
    const scrollContainerSaldo = document.querySelector(".cards-saldo");

    scrollContainerGasto.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainerGasto.scrollLeft += evt.deltaY;
    });

    scrollContainerSaldo.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainerSaldo.scrollLeft += evt.deltaY;
    });
  },
  methods: {
    getDadosUsuario() {
      axios.get(endpoints.DADOS_USUARIO).then((response) => {
        this.dadosUsuario = response.data;
      });
    },
    getValoresPrincipais() {
      axios.get(endpoints.VALORES_PRINCIPAIS).then((response) => {
        this.valoresPrincipais = response.data;
      });
    },
    getCategorias() {
      axios.get(endpoints.CATEGORIAS).then((response) => {
        this.categorias = response.data;
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.home
  background-color: var(--bg-content)
  color: var(--font-primary-color)
  display: flex
  flex-direction: column
  max-height: var(--height)
  min-height: var(--height)
  overflow: hidden
  width: 920px

.header
  align-items: center
  display: flex
  flex-direction: row
  flex-wrap: wrap
  height: 80px
  justify-content: space-between
  margin: 16px 32px 0 32px

.hello
  font-size: 24px
  font-weight: 600
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap

.search-label
  position: relative

label
  &::before
    background: url("../assets/images/search-icon.svg") center no-repeat
    bottom: 0
    content: ""
    left: 4px
    position: absolute
    top: -4px
    width: 20px

.search-input
  align-items: center
  background-color: var(--bg-cards)
  border: 1px solid #404040
  border-radius: 4px
  color: var(--white-hard)
  display: flex
  flex-direction: row
  gap: 8px
  height: 32px
  padding: 6px 12px 6px 8px
  text-indent: 20px
  width: 280px
  &::placeholder // Chrome, Firefox, Opera, Safari 10.1+
    color: var(--font-secondary-color)
    opacity: 1 // Firefox
  :-ms-input-placeholder // Internet Explorer 10-11
    color: var(--font-secondary-color)
  ::-ms-input-placeholder // Microsoft Edge
    color: var(--font-secondary-color)

.cards
  overflow: auto

.cards-saldo
  display: flex
  justify-content: flex-start
  overflow: hidden
  padding-left: 32px

.title-gasto
  margin: 0 32px
  margin-bottom: 20px
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap

.cards-gasto
  display: flex
  justify-content: flex-start
  overflow: hidden
  padding-left: 32px
</style>
