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
  max-height: var(--height)
  min-height: var(--height)
  text-align: center
  width: 304px

.header
  padding: 24px 32px 24px

.avatar-conta > img
  margin-botton: 24px

.nome-usuario
  font-size: 18px
  margin-bottom: 4px
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap

.cnpj-usuario
  color: var(--font-secondary-color)
  font-size: 12px

.tipos-transacoes
  display: flex
  justify-content: space-between
  margin-top: 16px
  padding: 16px 0 4px

.ultimas-transacoes-title
  font-size: 14px
  font-weight: 500
  margin: 0 24px 12px
  text-align: left

.divisao
  border-top: 1px solid var(--bg-cards)
  margin: 0 auto
  width: 292px

.ultimas-transacoes-list
  padding: 12px 16px

.transacao
  align-items: center
  display: flex
  justify-content: center
  margin-bottom: 12px

.transacao-descricao
  font-size: 11px
  margin: 6px 10px
  width: 124px

.nome
  font-weight: 13px
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap

.acao
  color: var(--font-secondary-color)
  overflow: hidden
  text-overflow: clip
  white-space: nowrap

.valor
  font-size: 12px
</style>
