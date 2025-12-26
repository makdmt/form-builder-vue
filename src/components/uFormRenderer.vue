<script setup lang="ts">
import type {FormSchema} from '@/types/form.types.ts'
import UInput from "@/components/uInput.vue";
import USelect from "@/components/uSelect.vue";
import UCheckbox from "@/components/uCheckbox.vue";
import UTextarea from "@/components/uTextarea.vue";
import UFormItem from "@/components/uFormItem.vue";

const props = defineProps<{
  schema: FormSchema
  modelValue: Record<string, any>
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: any): void
  (e: 'submit', v: any): void
  (e: 'cancel'): void
}>()

const components: Record<string, any> = {
  input: UInput,
  select: USelect,
  checkbox: UCheckbox,
  textarea: UTextarea
}

function updateField(name: string, value: any) {
  emit('update:modelValue', {...props.modelValue, [name]: value})
}

function submit() {
  emit('submit', props.modelValue)
}


function cancel() {
  emit('cancel')
}

</script>

<template>
  <form class="form" @submit.prevent="submit">
    <UFormItem
        v-for="field in schema.fields"
        :key="field.name"
        :id="field.name"
        :label="field.label"
    >
      <template
          v-if="$slots[`field-${field.name}`]"
      >
        <slot :name="`field-${field.name}`"/>
      </template>
      <component
          v-else
          :is="components[field.type]"
          v-bind="field"
          :model-value="modelValue[field.name]"
          @update:model-value="(val: any) => updateField(field.name, val)"
      >
      </component>
    </UFormItem>

    <div class="form__actions">
      <button type="submit" class="button button--submit">Сохранить</button>
      <button type="button" @click="cancel" class="button button--reset">Отмена</button>
    </div>
  </form>
</template>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__actions {
    display: flex;
    gap: 12px;
    margin-top: 10px;
  }
}

.button {
  @include button
}

.button--submit {
  background-color: $primary-color;
}

.button--reset {
  background-color: white;
  border: 1px solid #ccc;
}

</style>
