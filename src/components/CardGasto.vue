<template>
  <div class="card-spent">
    <span class="title">
      <img src="@/assets/images/card-gasto/card-gasto-icon-1.svg" />
      {{ category }}
    </span>
    <span class="value">R$ {{ value }}</span>
    <span class="limit">
      Limite:
      <span :style="{ color: limit_color }"
        >R$ {{ limit }} {{ percentage }}</span
      >
    </span>
  </div>
</template>

<script>
export default {
  name: "CardGasto",
  props: ["category", "value", "limit", "percentage", "limit_color"],
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.card-spent
  background-color: var(--bg-cards)
  color: var(--font-primary-color)
  min-height: 179px
  min-width: 225px
  margin-right: 32px
  padding: 32px 0

.title,
.value,
.limit
  display: block
  text-align: center

.title
  font-size: 16px
  font-weight: 500

img
  height: 14px

.value
  font-size: 28px
  margin: 24px 0

.limit
  font-size: 12px
  font-weight: 500
  margin-bottom: 32px

.limit-value
  color: var(--font-limit-green)
</style>
