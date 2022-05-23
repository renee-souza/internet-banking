<template>
  <div class="transferencias">
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
        <div class="formas-transferir-forma-container">
          <span class="forma-icone">
            <img
              src="@/assets/images/formas-transferir/formas-transferir-1.svg"
            />
          </span>
          <span class="forma-texto">pix</span>
        </div>

        <div class="formas-transferir-forma-container">
          <span class="forma-icone">
            <img
              src="@/assets/images/formas-transferir/formas-transferir-2.svg"
            />
          </span>
          <span class="forma-texto">ted</span>
        </div>

        <div class="formas-transferir-forma-container">
          <span class="forma-icone">
            <img
              src="@/assets/images/formas-transferir/formas-transferir-3.svg"
            />
          </span>
          <span class="forma-texto">doc</span>
        </div>
      </div>
    </div>

    <div class="historico">
      <div class="historico-header">
        <h3 class="historico-title">Histórico</h3>

        <div class="dropdown">
          <button @click="openMenu()" class="btn-ordenacao">
            <img class="ordem-lista" src="@/assets/images/ordem-lista.svg" />
            Ordenado por:
            <span class="btn-ordenacao-text-green">Completo</span>
            <img class="seta" src="@/assets/images/arrow-down.svg" />
          </button>

          <div class="dropdown-content" :class="isOpen">
            <span class="dropdown-content-title">Escolha uma ordenação</span>

            <div class="option-radio">
              <input name="ordenacao" type="radio" id="ocorrencia_desc" />
              <label class="label-check" for="ocorrencia_desc">
                Ordenar por ocorrência (decrescente)
              </label>
            </div>

            <div class="option-radio">
              <input name="ordenacao" type="radio" id="ocorrencia_cres" />
              <label class="label-check" for="ocorrencia_cres">
                Ordenar por ocorrência (crescente)
              </label>
            </div>

            <div class="option-radio">
              <input name="ordenacao" type="radio" id="valor_desc" />
              <label class="label-check" for="valor_desc">
                Ordenar por valor (decrescente)
              </label>
            </div>

            <div class="option-radio">
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

          <tbody>
            <tr>
              <td>
                <img
                  src="@/assets/images/transacoes-icons/transacoes-icons-3.svg"
                />
              </td>
              <td>Amazon Cloud Services1</td>
              <td>26.07.2021 às 14:49:23</td>
              <td>R$ 10.000,00</td>
            </tr>

            <tr>
              <td>
                <img
                  src="@/assets/images/transacoes-icons/transacoes-icons-3.svg"
                />
              </td>
              <td>Amazon Cloud Services</td>
              <td>26.07.2021 às 14:49:23</td>
              <td>R$ 10.000,00</td>
            </tr>

            <tr>
              <td>
                <img
                  src="@/assets/images/transacoes-icons/transacoes-icons-3.svg"
                />
              </td>
              <td>Amazon Cloud Services</td>
              <td>26.07.2021 às 14:49:23</td>
              <td>R$ 10.000,00</td>
            </tr>

            <tr>
              <td>
                <img
                  src="@/assets/images/transacoes-icons/transacoes-icons-3.svg"
                />
              </td>
              <td>Amazon Cloud Services</td>
              <td>26.07.2021 às 14:49:23</td>
              <td>R$ 10.000,00</td>
            </tr>

            <tr>
              <td>
                <img
                  src="@/assets/images/transacoes-icons/transacoes-icons-3.svg"
                />
              </td>
              <td>Amazon Cloud Services</td>
              <td>26.07.2021 às 14:49:23</td>
              <td>R$ 10.000,00</td>
            </tr>

            <tr>
              <td>
                <img
                  src="@/assets/images/transacoes-icons/transacoes-icons-3.svg"
                />
              </td>
              <td>Amazon Cloud Services</td>
              <td>26.07.2021 às 14:49:23</td>
              <td>R$ 10.000,00</td>
            </tr>

            <tr>
              <td>
                <img
                  src="@/assets/images/transacoes-icons/transacoes-icons-3.svg"
                />
              </td>
              <td>Amazon Cloud Services</td>
              <td>26.07.2021 às 14:49:23</td>
              <td>R$ 10.000,00</td>
            </tr>

            <tr>
              <td>
                <img
                  src="@/assets/images/transacoes-icons/transacoes-icons-3.svg"
                />
              </td>
              <td>Amazon Cloud Services</td>
              <td>26.07.2021 às 14:49:23</td>
              <td>R$ 10.000,00</td>
            </tr>

            <tr>
              <td>
                <img
                  src="@/assets/images/transacoes-icons/transacoes-icons-3.svg"
                />
              </td>
              <td>Amazon Cloud Services</td>
              <td>26.07.2021 às 14:49:23</td>
              <td>R$ 10.000,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Transferencias",
  components: {},
  data() {
    return {
      changeStateMenu: false,
      isOpen: "",
    };
  },
  methods: {
    openMenu() {
      this.changeStateMenu = !this.changeStateMenu;
      this.isOpen = this.changeStateMenu === true ? "is-open" : "";
    },
  },
};
</script>

<style lang="sass" scoped>
.transferencias
  background-color: var(--bg-content)
  color: var(--font-primary-color)
  width: 920px
  display: flex
  flex-direction: column

.header
  height: 80px
  margin: 0 32px 0
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  flex-wrap: wrap

.title
  font-size: 24px
  font-weight: 600
  height: 40px
  display: flex
  align-items: center

img
  margin-right: 8px
  border-radius: var(--border-radius)
  padding: 8px
  width: 40px
  height: 40px
  margin-bottom: 0

.search-label
  position: relative
  height: 32px
  &::before
    content: ""
    position: absolute
    left: 4px
    top: -4px
    bottom: 0
    width: 20px
    background: url("../assets/images/search-icon.svg") center no-repeat

.search-input
  text-indent: 20px
  height: 32px
  width: 280px
  background-color: var(--bg-cards)
  display: flex
  flex-direction: row
  align-items: center
  padding: 6px 12px 6px 8px
  gap: 8px
  border: 1px solid #404040
  border-radius: 4px
  color: var(--white-hard)
  &::placeholder // Chrome, Firefox, Opera, Safari 10.1+
    color: var(--font-secondary-color)
    opacity: 1 // Firefox
  :-ms-input-placeholder // Internet Explorer 10-11
    color: var(--font-secondary-color)
  ::-ms-input-placeholder // Microsoft Edge
    color: var(--font-secondary-color)

.formas-transferir
  padding: 8px 8px 8px 0
  margin: 32px
  height: 52px
  display: flex
  align-items: center
  gap: 10px
  background-color: var(--bg-cards)

.formas-transferir-text
  font-size: 14px
  margin-left: 16px

.formas-transferir-icones
  display: flex
  align-items: center
  gap: 10px

.formas-transferir-forma-container
  display: flex
  align-items: center
  justify-content: center
  height: 36px
  width: 75px
  background-color: var(--bg-primary-components)
  border-radius: 50px

.forma-icone
  margin-top: 5px

.forma-icone > img
  padding: 0
  width: 20px
  height: 20px

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
  cursor: pointer
  display: flex
  align-items: center
  line-height: 2
  border: none
  border-radius: var(--border-radius)
  background-color: var(--bg-cards)
  color: var(--font-secondary-color)
  height: 34px
  padding: 8px 12px
  font-size: 12px
  font-weight: 500
  &:focus
    outline: none

.ordem-lista
  padding: 0
  width: 16px
  height: 16px

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
  padding: 16px
  border-radius: var(--border-radius)
  box-shadow: 0px 4px 12px rgba(30, 32, 38, 0.04)
  font-size: 14px
  font-weight: 400
  width: 354px
  gap: 8px
  position: absolute
  overflow: hidden
  display: none
  margin-top: 5px

.dropdown-content-title
  margin-bottom: 16px
  display: block

.option-radio
  display: flex
  align-items: center
  margin: 8px 0
  gap: 16px
  position: relative

input[type=radio]
  visibility: hidden
  position: absolute

input[type=radio] + label
  cursor: pointer

input[type=radio] + label:before
  height: 16px
  margin-right: 4px
  content: ""
  display: inline-block
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

tbody

td > img
  width: 40px
  height: 40px
  padding: 0

th:nth-child(2), td:nth-child(2)
  text-align: left

td, th
  border-top: 1px solid var(--bg-cards)
  border-bottom: 1px solid var(--bg-cards)
  padding: 8px
  text-align: center
  font-weight: 400
</style>
