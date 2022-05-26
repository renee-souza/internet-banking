<template>
  <div class="formas-transferir">
    <span class="formas-transferir-text">
      Escolha uma forma para transferir
    </span>

    <div class="formas-transferir-icones">
      <button
        @click="controlModalPix()"
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

        <select
          v-model="dadosTransferencia.destino"
          class="modal-pix-form-input"
          id="idEnviarPara"
        >
          <option
            disabled
            selected
            class="modal-pix-form-input"
            value="Escolha um proponente"
          >
            Escolha um proponente
          </option>
          <option class="modal-pix-form-input" value="Amazon Web Services">
            Amazon Web Services
          </option>
          <option class="modal-pix-form-input" value="Aluguel de imóvel">
            Aluguel de imóvel
          </option>
          <option class="modal-pix-form-input" value="Parcela de emprestimo">
            Parcela de emprestimo
          </option>
        </select>
        <span class="campo-obrigatorio" :class="controlRequiredFieldDestino">
          Campo de preenchimento obrigatório
        </span>
      </div>

      <div class="modal-pix-form-field">
        <div>
          <label class="modal-pix-form-label" for="idValorTransferir"
            >Valor a transferir</label
          >
        </div>
        <input
          v-model="dadosTransferencia.valor"
          type="number"
          min="0"
          oninput="this.value = Math.abs(this.value)"
          class="modal-pix-form-input modal-pix-form-input-value"
          id="idValorTransferir"
          placeholder="R$ 0,00"
          autocomplete="off"
        />
        <span class="campo-obrigatorio" :class="controlRequiredFieldValor">
          Campo de preenchimento obrigatório
        </span>
      </div>
    </form>

    <div class="modal-pix-footer">
      <button
        @click="controlModalPix()"
        type="button"
        class="modal-pix-footer-btn modal-pix-footer-btn-cancelar"
      >
        Cancelar
      </button>
      <button
        @click="postDadosTransferencia()"
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
  name: "HistoricoTransferencias",
  components: {},
  data() {
    return {
      showModalPix: "",
      transferenciaOpacity: "",
      controlRequiredFieldDestino: "",
      controlRequiredFieldValor: "",

      dadosTransferenciaPost: {},

      dadosTransferencia: {
        destino: "",
        valor: "",
      },
    };
  },
  mounted() {
    //
  },
  methods: {
    controlModalPix() {
      this.showModalPix = this.showModalPix === "" ? "show-modal-pix" : "";
      this.transferenciaOpacity =
        this.transferenciaOpacity === "" ? "transferencias-opacity" : "";

      this.controlRequiredFieldDestino = "";
      this.controlRequiredFieldValor = "";
    },
    noSingleNumber(number) {
      number = number.toString().length == 1 ? `0${number}` : number;
      return number;
    },
    postDadosTransferencia() {
      this.controlRequiredFieldDestino = !this.dadosTransferencia.destino
        ? "campo-obrigatorio-block"
        : "";

      this.controlRequiredFieldValor = !this.dadosTransferencia.valor
        ? "campo-obrigatorio-block"
        : "";

      if (!this.dadosTransferencia.destino || !this.dadosTransferencia.valor) {
        return;
      }

      if (this.dadosTransferencia.destino && this.dadosTransferencia.valor) {
        this.controlModalPix();
        this.parseDadosTransferencia();

        axios.post(endpoints.TRANSACOES, this.dadosTransferenciaPost);
      }
    },
    parseDadosTransferencia() {
      const date = new Date();
      const day = this.noSingleNumber(date.getDate());
      const month = this.noSingleNumber(date.getMonth() + 1);
      const year = date.getFullYear();
      const hours = this.noSingleNumber(date.getHours());
      const minutes = this.noSingleNumber(date.getMinutes());
      const seconds = this.noSingleNumber(date.getSeconds());

      this.dadosTransferencia.valor = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BLR",
      })
        .format(this.dadosTransferencia.valor)
        .replace("BLR", "")
        .replace(" ", "");

      const today = `${day}.${month}.${year}`;
      const hour = `${hours}:${minutes}:${seconds}`;

      this.dadosTransferenciaPost = {
        proponente: this.dadosTransferencia.destino,
        data: today,
        hora: hour,
        valor: this.dadosTransferencia.valor,
        tipo: "enviada",
      };
    },
  },
};
</script>

<style lang="sass" scoped>
.campo-obrigatorio
  color: var(--font-limit-red)
  display: none
  font-size: 12px
  font-weight: 500

.campo-obrigatorio-block
  display: block

.formas-transferir
  align-items: center
  background-color: var(--bg-cards)
  display: flex
  gap: 10px
  height: 52px
  margin: 32px 32px 0
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
  height: 400px
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
  margin-bottom: 16px

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

input[type=number]
  -moz-appearance: textfield

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button
  -webkit-appearance: none
  margin: 0

.modal-pix-footer
  align-items: center
  display: flex
  justify-content: space-between
  margin-top: 20px

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
