<script setup lang="ts">

defineProps<{
  modelValue: string | undefined | null
  options: { label: string; value: any }[]
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | undefined | null): void
}>()

const onChange = (evt: Event) => {
  if (evt.target instanceof HTMLSelectElement) emit('update:modelValue', evt.target.value);
}

</script>

<template>
  <select
      v-bind="$attrs"
      class="select"
      :value="modelValue"
      @change="onChange"
  >
    <option v-for="opt in options" :key="opt.value" :value="opt.value">
      {{ opt.label }}
    </option>
  </select>
</template>

<style lang="scss">

.select {
  @include input-field;

  &:focus {
    @include focus-state;
  }
}

select, ::picker(select) {
  appearance: base-select;
  @include input-field;
}

</style>
