<script setup lang="ts">
import type {FormSchema} from "@/types/form.types.ts";
import {useStore} from "vuex";
import {computed} from "vue";
import UCard from "@/components/uCard.vue";
import UFormRenderer from "@/components/uFormRenderer.vue";
import type {UserFormData} from "@/store";

const userForm: FormSchema = {
  fields: [
    {
      type: 'input',
      name: 'name',
      label: 'Имя',
      placeholder: 'Введите ваше имя',
      autocomplete: 'off',
      required: true
    },
    {
      type: 'input',
      name: 'email',
      label: 'Email',
      placeholder: 'Введите email',
      autocomplete: 'off',
    },
    {
      type: 'select',
      name: 'role',
      label: 'Роль',
      options: [
        {label: 'Администратор', value: 'admin'},
        {label: 'Пользователь', value: 'user'}
      ],
      required: true
    },
    {
      type: 'checkbox',
      name: 'active',
      label: 'Активен',
      checked: true
    },
    {
      type: 'textarea',
      name: 'comment',
      label: 'Комментарий',
      rows: 4,
      maxlength: 300
    }
  ]
}

const store = useStore();

const formData = computed({
  get: () => store.state.userContactForm,
  set: v => store.commit('SET_USER_CONTACT_FORM', v)
})


function onSubmit(form: UserFormData) {
  alert(`Спасибо, ${form.name}!`)
}

function onReset() {
  store.commit('RESET_USER_CONTACT_FORM')
}


</script>

<template>
  <UCard>
    <h1>Форма c контактами</h1>

    <UFormRenderer
        :schema="userForm"
        v-model="formData"
        @submit="onSubmit"
        @cancel="onReset"
    >
      <template #field-email>
        <small>Мы не передаём email третьим лицам</small>
      </template>
    </UFormRenderer>
  </UCard>
</template>

<style scoped lang="scss">

</style>