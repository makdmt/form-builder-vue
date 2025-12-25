<script setup lang="ts">

defineProps<{
  modelValue: string | undefined | null
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | undefined | null): void
}>()

const onInput = (evt: InputEvent) => {
  if (evt.target instanceof HTMLInputElement) emit('update:modelValue', evt.target.value);
}

</script>

<template>
  <input
      v-bind="$attrs"
      class="input"
      :value="modelValue"
      @input="onInput"
  />
</template>

<style lang="scss">

.input {
  @include input-field;

  &:focus {
    @include focus-state;
  }
}

</style>
