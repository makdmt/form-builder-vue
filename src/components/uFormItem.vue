<script setup lang="ts">
import {defineProps} from 'vue'

defineProps<{
  id: string;
  label?: string;
  error?: string;
}>()

</script>

<template>
  <div class="field">
    <label v-if="label" class="field__label" :for="id">
      <slot name="label">{{ label }}</slot>
    </label>

    <div class="field__control">
      <slot/>
    </div>

    <div v-if="error" class="field__error" role="alert">{{ error }}</div>
  </div>
</template>

<style lang="scss">

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;

  &__label {
    font-weight: 600;
  }

  &__error {
    color: $error-color;
    font-size: 12px;
  }
}
</style>
