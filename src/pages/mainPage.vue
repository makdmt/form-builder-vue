<script setup lang="ts">

interface NavItem {
  title: string
  description: string
  to: string
}

const items: NavItem[] = [
  {
    title: 'Форма пользователя',
    description: 'Базовая форма с нативной валидацией',
    to: '/user-form'
  },
  {
    title: 'Форма с контактами',
    description: 'Инпут email заменен с помощью слота',
    to: '/user-contact-form'
  },
  {
    title: 'Предзаполненая форма',
    description: 'Форма содержит исходные данные',
    to: '/user-edit-form'
  }
]
</script>

<template>
  <h2 class="nav-card__title">Примеры форм</h2>

  <nav class="nav-card__list">
    <RouterLink
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        class="nav-card__item"
    >
      <div class="nav-card__name">{{ item.title }}</div>
      <div class="nav-card__desc">{{ item.description }}</div>
    </RouterLink>
  </nav>
</template>

<style lang="scss">
.nav-card {
  max-width: 480px;

  &__title {
    margin-bottom: 12px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__item {
    display: block;
    padding: 12px 14px;
    border-radius: 8px;
    text-decoration: none;
    border: 1px solid transparent;
    transition: 0.15s;

    &:hover {
      border-color: #ddd;
      background: #fafafa;
    }
  }

  &__name {
    font-weight: 600;
    color: #222;
  }

  &__desc {
    font-size: 13px;
    color: #777;
  }
}
</style>
