<template>
  <div class="card-saldo">
    <span class="header">{{ label }}</span>
    <span class="valor">R$ {{ valor }}</span>
  </div>
</template>

<script>
export default {
  name: "CardSaldo",
  props: ["label", "valor"],
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
  align-items: center
  display: flex
  font-size: 32px
  height: 95px
  width: 304px
</style>
