<template>
  <div class="paginaNaoEncontrada">
    <h1 class="m-4">Página não encontrada <i class="fas fa-frown"></i></h1>

    <div>
      <p class="ms-4">A página solicitada não pôde ser encontrada.</p>
      <p class="ms-4">
        Verifique o endereço digitado ou se a página ainda se encontra
        disponível.
      </p>
    </div>

    <div class="mt-5 lines-divide"></div>

    <div class="erro">
      <p class="ms-4">Erro: 404 not found.</p>
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
.paginaNaoEncontrada
  margin: auto
  margin-top: 5rem
  min-height: 50rem

.erro
  font-family: "Roboto", sans-serif
  font-size: 1.5rem
  margin-top: 5rem
</style>
