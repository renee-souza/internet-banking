<template>
  <div class="page-not-found">
    <h1 class="title">Página não encontrada</h1>

    <div>
      <p>A página solicitada não pôde ser encontrada.</p>
      <p>
        Verifique o endereço digitado ou se a página ainda se encontra
        disponível.
      </p>
    </div>

    <div class="error">
      <p>Erro: 404 not found.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginaNaoEncontrada",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.page-not-found
  background-color: var(--bg-content)
  color: var(--font-primary-color)
  font-weight: 500
  height: var(--height)
  padding: 112px 32px
  width: 100%

.title
  font-weight: 600
  margin-bottom: 24px

.error
  font-size: 20px
  margin-top: 112px
</style>
