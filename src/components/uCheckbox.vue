<script setup lang="ts">

defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()

const onChange = (evt: Event) => {
  if (evt.target instanceof HTMLInputElement) emit('update:modelValue', evt.target.checked);
}

</script>

<template>
  <input
      v-bind="$attrs"
      type="checkbox"
      class="checkbox"
      :checked="modelValue"
      @change="onChange"
  />
</template>

<style lang="scss">

.checkbox {
  min-width: 18px;
  min-height: 18px;
  accent-color: white;
  cursor: pointer;
  margin: 0;
  outline: 1px solid #ccc;

  &:focus-visible {
    outline: 1px solid $highlight-color;
  }
}

</style>
