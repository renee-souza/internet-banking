<template>
  <div class="menu">
    <div class="menus-nav-user">
      <ul class="menu-nav">
        <li class="item-menu">
          <RouterLink to="">
            <img src="@/assets/images/menu/logo.svg" />
          </RouterLink>
        </li>

        <li
          class="item-menu item-menu-enabled"
          :class="rotas.home"
          @click="changeSelected()"
        >
          <RouterLink to="/">
            <img src="@/assets/images/menu/menu-icone-1.svg" />
          </RouterLink>
        </li>

        <li class="item-menu">
          <RouterLink to="">
            <img src="@/assets/images/menu/menu-icone-2.svg" />
          </RouterLink>
        </li>

        <li
          class="item-menu item-menu-enabled"
          :class="rotas.transferencias"
          @click="changeSelected()"
        >
          <RouterLink to="transferencias">
            <img src="@/assets/images/menu/menu-icone-3.svg" />
          </RouterLink>
        </li>

        <li class="item-menu">
          <RouterLink to="">
            <img src="@/assets/images/menu/menu-icone-4.svg" />
          </RouterLink>
        </li>
      </ul>

      <div class="menu-user-configs">
        <ul class="menu-nav">
          <li class="item-menu">
            <RouterLink to="/transferencias">
              <img src="@/assets/images/menu/menu-user-icone-1.svg" />
            </RouterLink>
          </li>

          <li class="item-menu">
            <RouterLink to="">
              <img src="@/assets/images/menu/menu-user-icone-2.svg" />
            </RouterLink>
          </li>

          <li class="item-menu">
            <RouterLink to="">
              <img src="@/assets/images/menu/menu-user-icone-3.svg" />
            </RouterLink>
          </li>

          <li class="item-menu">
            <RouterLink to="">
              <img src="@/assets/images/menu/menu-user-icone-4.svg" />
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  components: {},
  data() {
    return {
      rotaAtual: "",

      rotas: {
        home: "",
        transferencias: "",
      },
    };
  },
  mounted() {
    this.changeSelected();
  },
  methods: {
    changeSelected() {
      this.rotaAtual = this.$router.currentRoute.value.path.toString();

      if (this.rotaAtual === "/") {
        this.rotas.home = "item-menu-selected";
        this.rotas.transferencias = "";
      }

      if (this.rotaAtual === "/transferencias") {
        this.rotas.home = "";
        this.rotas.transferencias = "item-menu-selected";
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.menu
  background-color: var(--bg-primary-components)
  width: 56px
  text-align: center
  padding: 8px
  min-height: var(--height)
  max-height: var(--height)

.menus-nav-user
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 100%

.menu-nav
  display: flex
  flex-direction: column
  align-items: center
  gap: 8px

.item-menu
  display: flex
  justify-content: center
  align-items: center
  width: 45px
  height: 45px
  line-height: 0
  color: var(--font-primary-color)
  border-radius: var(--border-radius)

.item-menu-enabled
  &:hover
    background-color: var(--bg-cards)
    transition: 0.3s

.item-menu-selected
  background-color: var(--bg-cards)
  transition: 0.3s

a
  padding: 8px
  width: 45px
  height: 45px
</style>
