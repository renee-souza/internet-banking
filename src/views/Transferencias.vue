<template>
  <div class="transfers" :class="transferOpacity">
    <div class="header">
      <div class="title">
        <img src="@/assets/images/menu/menu-icone-3.svg" />
        Transferências
      </div>
      <label class="search-label">
        <input
          class="search-input"
          placeholder="Procurando algo?"
          type="text"
        />
      </label>
    </div>

    <FormasTransferir />
    <HistoricoTransferencias />
  </div>
</template>

<script>
import HistoricoTransferencias from "../components/HistoricoTransferencias.vue";
import FormasTransferir from "../components/FormasTransferir.vue";

export default {
  name: "Transferencias",
  components: { HistoricoTransferencias, FormasTransferir },
  data() {
    return {
      showModalPix: "",
      transferOpacity: "",
    };
  },
  methods: {
    openModalPix() {
      this.showModalPix = this.showModalPix === "" ? "show-modal-pix" : "";
      this.transferOpacity =
        this.transferOpacity === "" ? "transfers-opacity" : "";
    },
  },
};
</script>

<style lang="sass" scoped>
.transfers
  background-color: var(--bg-content)
  color: var(--font-primary-color)
  display: flex
  flex-direction: column
  width: 920px

.transfers-opacity
  opacity: 0.85

.header
  align-items: center
  display: flex
  flex-direction: row
  flex-wrap: wrap
  height: 80px
  justify-content: space-between
  margin: 16px 32px 0 32px

.title
  align-items: center
  display: flex
  font-size: 24px
  font-weight: 600
  height: 40px

.title > img
  border-radius: var(--border-radius)
  height: 40px
  margin-bottom: 0
  margin-right: 8px
  padding: 8px
  width: 40px

.search-label
  height: 32px
  position: relative
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
</style>
