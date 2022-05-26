<template>
  <div class="card-balance">
    <span v-if="value" class="header">{{ label }}</span>
    <span v-if="value" class="value">R$ {{ value }}</span>
    <span v-if="!value" class="value">Carregando dados...</span>
  </div>
</template>

<script>
export default {
  name: "CardSaldo",
  props: ["label", "value"],
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.card-balance
  background-color: var(--bg-cards)
  color: var(--font-primary-color)
  padding: 24px
  margin: 32px 32px 24px 0

.header,
.value
  display: block

.header
  font-size: 18px

.value
  align-items: center
  display: flex
  font-size: 32px
  height: 95px
  width: 304px
</style>
