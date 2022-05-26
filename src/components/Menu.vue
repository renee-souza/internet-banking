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
            <RouterLink to="">
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
    setTimeout(() => {
      this.changeSelected();
    }, 100);
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
  max-height: var(--height)
  min-height: var(--height)
  padding: 8px
  text-align: center
  width: 56px

.menus-nav-user
  display: flex
  flex-direction: column
  height: 100%
  justify-content: space-between

.menu-nav
  align-items: center
  display: flex
  flex-direction: column
  gap: 8px

.item-menu
  align-items: center
  border-radius: var(--border-radius)
  color: var(--font-primary-color)
  display: flex
  justify-content: center
  height: 45px
  line-height: 0
  width: 45px

.item-menu-enabled
  &:hover
    background-color: var(--bg-cards)
    transition: 0.3s

.item-menu-selected
  background-color: var(--bg-cards)
  transition: 0.3s

a
  height: 45px
  padding: 8px
  width: 45px
</style>
