<template>
  <div class="home">
    <div class="header">
      <h1 class="hello">Olá, Rodrigo Ramalho! 😊</h1>
      <label>
        <input
          class="search-input"
          placeholder="Procurando algo?"
          type="text"
        />
      </label>
    </div>

    <div class="cards">
      <div class="cards-saldo">
        <CardSaldo />
        <CardSaldo />
      </div>
      <h3 class="title-gasto">Gastos por categoria</h3>

      <div class="cards-gasto">
        <CardGasto />
        <CardGasto />
        <CardGasto />
        <CardGasto />

        <CardGasto />
        <CardGasto />
      </div>
    </div>
  </div>
</template>

<script>
import CardSaldo from "../components/CardSaldo.vue";
import CardGasto from "../components/CardGasto.vue";

export default {
  name: "Home",
  components: { CardSaldo, CardGasto },
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.home
  background-color: var(--bg-content)
  color: var(--font-primary-color)
  padding: 32px
  width: 920px

.header
  display: flex
  flex-direction: row
  justify-content: space-between
  flex-wrap: wrap

.hello
  font-size: 24px
  font-weight: 600

label
  position: relative

label
  &::before
    content: ""
    position: absolute
    left: 4px
    top: -4px
    bottom: 0
    width: 20px
    background: url("../assets/images/search-icon.svg") center no-repeat

input
  text-indent: 20px
  height: 32px
  width: 280px
  background-color: var(--bg-cards)
  display: flex
  flex-direction: row
  align-items: center
  padding: 6px 12px 6px 8px
  gap: 8px
  border: 1px solid #404040
  border-radius: 4px
  color: var(--white-hard)
  &::placeholder // Chrome, Firefox, Opera, Safari 10.1+
    color: var(--font-secondary-color)
    opacity: 1 // Firefox
  :-ms-input-placeholder // Internet Explorer 10-11
    color: var(--font-secondary-color)
  ::-ms-input-placeholder // Microsoft Edge
    color: var(--font-secondary-color)

.cards
  width: 920px
  overflow: auto

.cards-saldo
  display: flex
  justify-content: flex-start

.title-gasto
  margin-bottom: 20px

.cards-gasto
  padding-left: 131px
  display: flex
  align-items: center
  justify-content: center
  flex-wrap: nowrap
  overflow: hidden
</style>
