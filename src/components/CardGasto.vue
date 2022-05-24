<template>
  <div class="card-gasto">
    <span class="title">
      <img src="@/assets/images/card-gasto/card-gasto-icon-1.svg" />
      {{ categoria }}
    </span>
    <span class="valor">R$ {{ valor }}</span>
    <span class="limite">
      Limite:
      <span :style="{ color: limite_color }"
        >R$ {{ limite }} {{ porcentagem }}</span
      >
    </span>
  </div>
</template>

<script>
export default {
  name: "CardGasto",
  props: ["categoria", "valor", "limite", "porcentagem", "limite_color"],
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.card-gasto
  background-color: var(--bg-cards)
  color: var(--font-primary-color)
  min-height: 179px
  min-width: 225px
  margin-right: 32px
  padding: 32px 0

.title,
.valor,
.limite
  display: block
  text-align: center

.title
  font-size: 16px
  font-weight: 500

img
  height: 14px

.valor
  font-size: 28px
  margin: 24px 0

.limite
  font-size: 12px
  font-weight: 500
  margin-bottom: 32px

.limite-valor
  color: var(--font-limit-green)
</style>
