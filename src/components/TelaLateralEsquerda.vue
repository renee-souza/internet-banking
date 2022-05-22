<template>
  <div class="tela-lateral-esquerda">
    <div class="header">
      <span class="avatar-conta">
        <img src="@/assets/images/avatar.svg" />
      </span>

      <div class="nome-usuario">Wayne Corporations LTDA 2</div>
      <div class="cnpj-usuario">12.345.678/0001-01</div>

      <div class="tipos-transacoes">
        <img src="@/assets/images/transacoes-icons/transacoes-icons-1.svg" />
        <img src="@/assets/images/transacoes-icons/transacoes-icons-2.svg" />
        <img src="@/assets/images/transacoes-icons/transacoes-icons-3.svg" />
        <img src="@/assets/images/transacoes-icons/transacoes-icons-4.svg" />
      </div>
    </div>

    <div class="ultimas-transacoes">
      <h3 class="ultimas-transacoes-title">Últimas transações</h3>
      <div class="divisao"></div>

      <div class="ultimas-transacoes-list">
        <div class="transacao">
          <img src="@/assets/images/transacoes-icons/transacoes-icons-3.svg" />
          <div class="transacao-descricao">
            <div class="nome">Amazon Cloud Services</div>
            <div class="acao">Transferencia recebida</div>
          </div>
          <span class="valor">R$ 10.000,00</span>
        </div>

        <div class="transacao">
          <img src="@/assets/images/transacoes-icons/transacoes-icons-5.svg" />
          <div class="transacao-descricao">
            <div class="nome">Amazon Cloud Services</div>
            <div class="acao">Transferencia enviada</div>
          </div>
          <span class="valor">R$ 10.000,00</span>
        </div>

        <div class="transacao">
          <img src="@/assets/images/transacoes-icons/transacoes-icons-3.svg" />
          <div class="transacao-descricao">
            <div class="nome">Amazon Cloud Services</div>
            <div class="acao">Transferencia recebida</div>
          </div>
          <span class="valor">R$ 10.000,00</span>
        </div>

        <div class="transacao">
          <img src="@/assets/images/transacoes-icons/transacoes-icons-3.svg" />
          <div class="transacao-descricao">
            <div class="nome">Amazon Cloud Services</div>
            <div class="acao">Transferencia recebida</div>
          </div>
          <span class="valor">R$ 10.000,00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TelaLateralEsquerda",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.tela-lateral-esquerda
  background-color: var(--bg-primary-components)
  color: var(--font-primary-color)
  width: 304px
  text-align: center

.header
  padding: 24px 32px 24px
  // border: 1px solid white

.avatar-conta > img
  margin-botton: 24px

.nome-usuario
  font-size: 18px
  text-overflow: ellipsis
  white-space: nowrap
  overflow: hidden
  margin-bottom: 4px

.cnpj-usuario
  font-size: 12px
  color: var(--font-secondary-color)

.tipos-transacoes
  margin-top: 16px
  padding: 16px 0 4px
  display: flex
  justify-content: space-between

.ultimas-transacoes

.ultimas-transacoes-title
  font-size: 14px
  font-weight: 500
  text-align: left
  margin: 0 24px 12px

.divisao
  margin: 0 auto
  border-top: 1px solid var(--bg-cards)
  width: 292px

.ultimas-transacoes-list
  padding: 12px 16px

.transacao
  display: flex
  justify-content: center
  align-items: center
  margin-bottom: 12px

.transacao-descricao
  width: 124px
  font-size: 11px
  margin: 6px 10px

.nome
  text-overflow: ellipsis
  white-space: nowrap
  overflow: hidden
  font-weight: 13px

.acao
  color: var(--font-secondary-color)
  text-overflow: clip
  white-space: nowrap
  overflow: hidden

.valor
  font-size: 12px
</style>
