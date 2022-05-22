<template>
  <div class="card-saldo">
    <span class="header">Saldo Atual</span>
    <span class="valor">R$ 1.000.000,00</span>
  </div>
</template>

<script>
export default {
  name: "CardSaldo",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.card-saldo
  background-color: var(--bg-cards)
  color: var(--font-primary-color)
  padding: 24px
  margin: 32px 32px 24px 0

.header,
.valor
  display: block

.header
  font-size: 18px

.valor
  font-size: 32px
  width: 304px
  height: 95px
  display: flex
  align-items: center
</style>
