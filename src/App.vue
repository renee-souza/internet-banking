<template>
  <div class="content-index">
    <Menu />
    <router-view />
    <TelaLateralEsquerda />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import TelaLateralEsquerda from "./components/TelaLateralEsquerda.vue";

export default {
  name: "App",
  components: { Menu, TelaLateralEsquerda },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

:root {
  --bg-content: #202020;
  --bg-primary-components: #151515;
  --bg-cards: #252525;

  --font-primary-color: #ffffff;
  --font-secondary-color: #abafba;
  --font-limit-green: #00c65c;
  --font-limit-red: #ff404c;
  --font-limit-blue: #02abf9;
  --font-limit-green: #00c65e;

  --min-width: 1280px;
  --min-height: 720px;
  --border-radius: 4px;

  --btn-transferir: #00c65e;
  --box-shadow: 0px 4px 12px rgba(30, 32, 38, 0.04);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: Poppins;
  font-weight: 600;
  max-width: var(--min-width);
  min-height: var(--min-height);
}

.content-index {
  display: flex;
}
</style>
