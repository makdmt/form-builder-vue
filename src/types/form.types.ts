import type {InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes} from 'vue'

type BaseField = {
    name: string,
    label?: string
}

export type InputFieldSchema =
    BaseField &
    { type: 'input' } &
    Omit<InputHTMLAttributes, 'modelValue' | 'onInput'>

export type TextareaFieldSchema =
    BaseField &
    { type: 'textarea' } &
    Omit<TextareaHTMLAttributes, 'modelValue' | 'onInput'>

export type SelectFieldSchema =
    BaseField &
    {
        type: 'select'
        options: { label: string; value: any }[]
    } &
    Omit<SelectHTMLAttributes, 'modelValue' | 'onChange'>

export type CheckboxFieldSchema =
    BaseField &
    { type: 'checkbox' } &
    Omit<InputHTMLAttributes, 'modelValue' | 'onChange' | 'type'>

export type FieldSchema =
    | InputFieldSchema
    | TextareaFieldSchema
    | SelectFieldSchema
    | CheckboxFieldSchema

export interface FormSchema {
    fields: FieldSchema[]
}
