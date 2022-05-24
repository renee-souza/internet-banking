<template>
  <div class="formas-transferir">
    <span class="formas-transferir-text">
      Escolha uma forma para transferir
    </span>

    <div class="formas-transferir-icones">
      <button @click="openModalPix()" class="formas-transferir-forma-container">
        <span class="forma-icone">
          <img
            src="@/assets/images/formas-transferir/formas-transferir-1.svg"
          />
        </span>
        <span class="forma-texto">pix</span>
      </button>

      <button class="formas-transferir-forma-container">
        <span class="forma-icone">
          <img
            src="@/assets/images/formas-transferir/formas-transferir-2.svg"
          />
        </span>
        <span class="forma-texto">ted</span>
      </button>

      <button class="formas-transferir-forma-container">
        <span class="forma-icone">
          <img
            src="@/assets/images/formas-transferir/formas-transferir-3.svg"
          />
        </span>
        <span class="forma-texto">doc</span>
      </button>
    </div>
  </div>

  <div class="modal-pix" :class="showModalPix">
    <div class="modal-pix-header">
      <span class="modal-pix-header-text">Transferência por</span>
      <div class="modal-pix-header-icon-container">
        <img
          classs="modal-pix-header-icon-container-img"
          src="@/assets/images/formas-transferir/formas-transferir-1.svg"
        />
        <span class="modal-pix-header-icon-container-text">pix</span>
      </div>
    </div>

    <form class="modal-pix-form">
      <div class="modal-pix-form-field">
        <div>
          <label class="modal-pix-form-label" for="idEnviarPara"
            >Enviar para</label
          >
        </div>

        <select class="modal-pix-form-input" id="idEnviarPara">
          <option disabled selected class="modal-pix-form-input" value="">
            Escolha um proponente
          </option>
          <option class="modal-pix-form-input" value="">
            Amazon Web Services
          </option>
          <option class="modal-pix-form-input" value="">
            Aluguel de imóvel
          </option>
          <option class="modal-pix-form-input" value="">
            Parcela de emprestimo
          </option>
        </select>
      </div>

      <div class="modal-pix-form-field">
        <div>
          <label class="modal-pix-form-label" for="idValorTransferir"
            >Valor a transferir</label
          >
        </div>
        <input
          type="text"
          class="modal-pix-form-input"
          id="idValorTransferir"
          placeholder="R$ 0,00"
        />
      </div>
    </form>

    <div class="modal-pix-footer">
      <button
        @click="openModalPix()"
        type="button"
        class="modal-pix-footer-btn modal-pix-footer-btn-cancelar"
      >
        Cancelar
      </button>
      <button
        @click="openModalPix()"
        type="submit"
        class="modal-pix-footer-btn modal-pix-footer-btn-transferir"
      >
        <span class="modal-pix-footer-btn-transferir-text">Transferir</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoricoTransferencias",
  components: {},
  data() {
    return {
      showModalPix: "",
      transferenciaOpacity: "",
    };
  },
  methods: {
    openModalPix() {
      this.showModalPix = this.showModalPix === "" ? "show-modal-pix" : "";
      this.transferenciaOpacity =
        this.transferenciaOpacity === "" ? "transferencias-opacity" : "";
    },
  },
};
</script>

<style lang="sass" scoped>
.formas-transferir
  align-items: center
  background-color: var(--bg-cards)
  display: flex
  gap: 10px
  height: 52px
  margin: 32px
  padding: 8px 8px 8px 0

.formas-transferir-text
  font-size: 14px
  margin-left: 16px

.formas-transferir-icones
  align-items: center
  display: flex
  gap: 10px

.formas-transferir-forma-container
  align-items: center
  background-color: var(--bg-primary-components)
  border: none
  border-radius: 50px
  color: var(--font-primary-color)
  cursor: pointer
  display: flex
  height: 36px
  justify-content: center
  line-height: 1.5
  width: 75px

.forma-icone
  margin-top: 5px

.forma-icone > img
  height: 20px
  margin-right: 8px
  padding: 0
  width: 20px

.forma-texto
  font-size: 14px
  text-transform: uppercase

// modal

.modal-pix
  background-color: var(--bg-content)
  border-radius: 8px
  color: var(--font-primary-color)
  display: none
  height: 380px
  left: 442px
  padding: 40px
  position: absolute
  top: 136px
  width: 408px

.show-modal-pix
  display: block

.modal-pix-header
  align-items: center
  display: flex

.modal-pix-header-text
  font-size: 20px
  margin-right: 8px

.modal-pix-header-icon-container
  align-items: center
  background-color: var(--bg-cards)
  border: none
  border-radius: 50px
  color: var(--font-primary-color)
  display: flex
  height: 36px
  justify-content: space-around
  line-height: 1.5
  padding: 8px
  width: 75px

.modal-pix-header-icon-container-text
  text-transform: uppercase

.modal-pix-form
  margin-top: 32px

.modal-pix-form-field
  margin-bottom: 24px

.modal-pix-form-label
  color: var(--font-secondary-color)
  display: block
  font-size: 12px
  font-weight: 500
  margin-bottom: 8px

.modal-pix-form-input
  background-color: var(--bg-cards)
  border: 1px solid #404040
  border-radius: var(--border-radius)
  color: var(--font-secondary-color)
  height: 40px
  padding: 8px 16px
  width: 328px
  &:focus
    outline: none

select
  text-indent: 1px
  text-overflow: ''
  -webkit-appearance: none
  -moz-appearance: none

.modal-pix-footer
  align-items: center
  display: flex
  justify-content: space-between
  margin-top: 40px

.modal-pix-footer-btn
  cursor: pointer

.modal-pix-footer-btn-cancelar
  color: var(--font-secondary-color)
  background-color: var(--bg-content)
  border: none
  font-size: 12px
  font-weight: 500
  text-decoration: underline

.modal-pix-footer-btn-transferir
  background-color: var(--font-limit-green)
  border: none
  border-radius: var(--border-radius)
  height: 48px
  width: 124px

.modal-pix-footer-btn-transferir-text
  color: var(--font-primary-color)
  font-size: 14px
  font-weight: 500
</style>
