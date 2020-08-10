<template>
  <footer class="footer">
    <span class="footer-text"
      >Built by Ovie Okeh &copy;{{ new Date().getFullYear() }}</span
    >
    <span class="footer-subtext"
      >Thanks to
      <a class="footer-subtext-link" href="https://brittanychiang.com"
        >Brittany Chiang's design</a
      ></span
    >
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $c-brand;
  margin-top: $space-xxl;
  opacity: 0.7;

  &-text {
    font-family: 'Poppins';
  }

  &-subtext {
    font-size: 14px;
    margin: $space-sm 0;

    &-link {
      text-decoration: none;
      color: $c-white;
    }
  }
}
</style>
