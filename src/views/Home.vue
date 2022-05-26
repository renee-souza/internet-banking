<template>
  <div class="home">
    <div class="header">
      <h1 v-if="userData.nome" class="hello">Olá, {{ userData.nome }}! 😊</h1>
      <h1 v-if="!userData.nome" class="hello">Olá! 😊</h1>
      <label class="search-label">
        <input
          class="search-input"
          placeholder="Procurando algo?"
          type="text"
        />
      </label>
    </div>

    <div class="cards">
      <div class="balance-cards">
        <CardSaldo
          :label="mainValues[0]?.saldo.label"
          :value="mainValues[0]?.saldo.value"
        />
        <CardSaldo
          :label="mainValues[1]?.fatura.label"
          :value="mainValues[1]?.fatura.value"
        />
      </div>
      <h3 class="title-spent">Gastos por categoria</h3>

      <div class="cards-spent">
        <span v-if="categories.length === 0">Aguardando dados...</span>
        <div v-for="(categoria, index) in categories" :key="index">
          <CardGasto
            :category="categoria.categoria"
            :value="categoria.valor"
            :limit="categoria.limite"
            :percentage="categoria.porcentagem"
            :limit_color="categoria.limite_color"
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
      userData: [],
      mainValues: [],
      categories: [],
    };
  },
  mounted() {
    this.getDataUser();
    this.getMainValues();
    this.getCategories();

    const scrollContainerGasto = document.querySelector(".cards-spent");
    const scrollContainerSaldo = document.querySelector(".balance-cards");

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
    getDataUser() {
      axios.get(endpoints.USER_DATA).then((response) => {
        this.userData = response.data;
      });
    },
    getMainValues() {
      axios.get(endpoints.MAIN_VALUES).then((response) => {
        this.mainValues = response.data;
      });
    },
    getCategories() {
      axios.get(endpoints.CATEGORIES).then((response) => {
        this.categories = response.data;
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
  margin-right: 32px
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

.balance-cards
  display: flex
  justify-content: flex-start
  overflow: hidden
  padding-left: 32px

.title-spent
  margin: 0 32px
  margin-bottom: 20px
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap

.cards-spent
  display: flex
  justify-content: flex-start
  overflow: hidden
  padding-left: 32px
</style>
