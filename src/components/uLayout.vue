<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <header class="layout__header">
      <nav class="layout__nav">
        <RouterLink to="/" class="layout__link">
          На главную
        </RouterLink>
      </nav>
    </header>

    <main class="layout__content">
      <RouterView/>
    </main>
  </div>
</template>

<style lang="scss">
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__header {
    height: 56px;
    background: #1e1e1e;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  &__nav {
    display: flex;
    align-items: center;
  }

  &__link {
    color: white;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  &__content {
    flex: 1;
    padding: 24px;
  }
}
</style>
