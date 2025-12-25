<script setup lang="ts">
defineProps<{
  modelValue: string | undefined | null
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | undefined | null): void
}>()

const onInput = (evt: InputEvent) => {
  if (evt.target instanceof HTMLTextAreaElement) emit('update:modelValue', evt.target.value);
}
</script>


<template>
    <textarea
        v-bind="$attrs"
        class="textarea"
        :value="modelValue"
        @input="onInput"
    />
</template>

<style lang="scss">

.textarea {
  @include input-field;

  &:focus {
    @include focus-state;
  }
}

</style>

