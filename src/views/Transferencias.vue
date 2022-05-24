<template>
  <div class="transferencias" :class="transferenciaOpacity">
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

    <div class="formas-transferir">
      <span class="formas-transferir-text">
        Escolha uma forma para transferir
      </span>

      <div class="formas-transferir-icones">
        <button
          @click="openModalPix()"
          class="formas-transferir-forma-container"
        >
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

    <div class="historico">
      <div class="historico-header">
        <h3 class="historico-title">Histórico</h3>

        <div class="dropdown">
          <button @click="openMenuOrdenation()" class="btn-ordenacao">
            <img class="ordem-lista" src="@/assets/images/ordem-lista.svg" />
            Ordenado por:
            <span class="btn-ordenacao-text-green">Completo</span>
            <img class="seta" src="@/assets/images/arrow-down.svg" />
          </button>

          <div class="dropdown-content" :class="isOpen">
            <span class="dropdown-content-title">Escolha uma ordenação</span>

            <div class="option-radio" @click="closeOptionsOrdenation()">
              <input name="ordenacao" type="radio" id="ocorrencia_desc" />
              <label class="label-check" for="ocorrencia_desc">
                Ordenar por ocorrência (decrescente)
              </label>
            </div>

            <div class="option-radio" @click="closeOptionsOrdenation()">
              <input name="ordenacao" type="radio" id="ocorrencia_cres" />
              <label class="label-check" for="ocorrencia_cres">
                Ordenar por ocorrência (crescente)
              </label>
            </div>

            <div class="option-radio" @click="closeOptionsOrdenation()">
              <input name="ordenacao" type="radio" id="valor_desc" />
              <label class="label-check" for="valor_desc">
                Ordenar por valor (decrescente)
              </label>
            </div>

            <div class="option-radio" @click="closeOptionsOrdenation()">
              <input name="ordenacao" type="radio" id="valor_cres" />
              <label class="label-check" for="valor_cres">
                Ordenar por valor (crescente)
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="historico-list">
        <table>
          <thead>
            <tr class="table-header">
              <th>Tipo</th>
              <th>Proponente</th>
              <th>Ocorrência</th>
              <th>valor</th>
            </tr>
          </thead>

          <tbody v-for="(transacao, index) in transacoes" :key="index">
            <tr>
              <td>
                <img
                  src="@/assets/images/transacoes-icons/transacoes-icons-1.svg"
                />
              </td>
              <td>{{ transacao.proponente }}</td>
              <td>{{ transacao.data }} às {{ transacao.hora }}</td>
              <td>R$ {{ transacao.valor }}</td>
            </tr>
          </tbody>
        </table>
      </div>
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
import axios from "axios";
import endpoints from "../enums/endpoints.enum";

export default {
  name: "Transferencias",
  components: {},
  data() {
    return {
      isOpen: "",
      showModalPix: "",
      transferenciaOpacity: "",
      transacoes: [],
    };
  },
  mounted() {
    this.getTransacoes();
  },
  methods: {
    openMenuOrdenation() {
      this.isOpen = this.isOpen === "" ? "is-open" : "";
    },
    closeOptionsOrdenation() {
      setTimeout(() => (this.isOpen = ""), 300);
    },
    openModalPix() {
      this.showModalPix = this.showModalPix === "" ? "show-modal-pix" : "";
      this.transferenciaOpacity =
        this.transferenciaOpacity === "" ? "transferencias-opacity" : "";
    },
    getTransacoes() {
      axios.get(endpoints.TRANSACOES).then((response) => {
        this.transacoes = response.data;
      });
    },
  },
};
</script>

<style lang="sass" scoped>
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

.transferencias
  background-color: var(--bg-content)
  color: var(--font-primary-color)
  display: flex
  flex-direction: column
  width: 920px

.transferencias-opacity
  opacity: 0.85

.header
  align-items: center
  display: flex
  flex-direction: row
  flex-wrap: wrap
  height: 80px
  justify-content: space-between
  margin: 0 32px 0

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

.historico
  padding: 32px 32px 0

.historico-header
  display: flex
  justify-content: space-between
  margin-bottom: 16px

.historico-title
  font-size: 18px

.btn-ordenacao
  align-items: center
  background-color: var(--bg-cards)
  border: none
  border-radius: var(--border-radius)
  cursor: pointer
  color: var(--font-secondary-color)
  display: flex
  font-size: 12px
  font-weight: 500
  height: 34px
  line-height: 2
  padding: 8px 12px
  &:focus
    outline: none

.ordem-lista
  padding: 0
  height: 16px
  width: 16px

.btn-ordenacao-text-green
  color: var(--font-limit-green)
  margin: 0 8px 0 4px

.open-menu
  display: block

.seta
  padding: 0
  width: 8px

.is-open
  display: block !important

.dropdown-content
  background-color: var(--bg-cards)
  border-radius: var(--border-radius)
  box-shadow: 0px 4px 12px rgba(30, 32, 38, 0.04)
  display: none
  font-size: 14px
  font-weight: 400
  gap: 8px
  margin-top: 5px
  overflow: hidden
  padding: 16px
  position: absolute
  width: 354px

.dropdown-content-title
  margin-bottom: 16px
  display: block

.option-radio
  align-items: center
  display: flex
  gap: 16px
  margin: 8px 0
  position: relative

input[type=radio]
  position: absolute
  visibility: hidden

input[type=radio] + label
  cursor: pointer

input[type=radio] + label:before
  content: ""
  display: inline-block
  height: 16px
  margin-right: 4px
  vertical-align: baseline

input[type=radio] + label:before
  border: 2px solid var(--font-primary-color)
  border-radius: 50%
  width: 16px

input[type=radio]:checked + label:before
  border: 5px solid var(--btn-transferir)

.historico-list
  max-height: 442px
  overflow-x: hidden
  overflow-y: scroll
  scrollbar-width: none

.historico-list::-webkit-scrollbar
  display: none

table
  border-collapse: collapse
  width: 100%

.table-header
  height: 40px

thead
  background-color: var(--bg-content)
  border-bottom: 3px solid var(--bg-cards)

td > img
  height: 40px
  padding: 0
  width: 40px

th:nth-child(2), td:nth-child(2)
  text-align: left

td:nth-child(3)
  font-size: 12px

td, th
  border-bottom: 1px solid var(--bg-cards)
  border-top: 1px solid var(--bg-cards)
  font-weight: 400
  padding: 8px
  text-align: center
</style>
