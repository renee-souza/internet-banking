<template>
  <div class="pagina-nao-encontrada">
    <h1>Página não encontrada</h1>

    <div>
      <p>A página solicitada não pôde ser encontrada.</p>
      <p>
        Verifique o endereço digitado ou se a página ainda se encontra
        disponível.
      </p>
    </div>

    <div class="erro">
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
.pagina-nao-encontrada
  margin: auto
  margin-top: 5rem

.erro
  font-family: "Roboto", sans-serif
  font-size: 1.5rem
  margin-top: 5rem
</style>
