import {createStore} from "vuex";

type UserRoles = 'admin' | 'user';

export interface UserFormData {
    name: string,
    role: UserRoles | undefined,
    active: boolean,
    comment: string
}

export interface UserContactFormData {
    name: string,
    email: string,
    role: UserRoles | undefined,
    active: boolean,
    comment: string
}

export interface UserEditFormData extends UserContactFormData {
    role: UserRoles
}

export interface FormStore {
    userForm: UserFormData,
    userContactForm: UserContactFormData,
    userEditForm: UserEditFormData,
}

const userFormInitialState = {
    name: '',
    role: undefined,
    active: false,
    comment: ''
}

const userContactFormInitialState = {
    name: '',
    email: '',
    role: undefined,
    active: true,
    comment: '  '
}

const userEditFormInitialState = {
    name: 'Иван',
    email: '',
    role: 'user',
    active: true,
    comment: 'Самый активный пользователь'
} as const;


export const store = createStore<FormStore>({
    state: () => ({
        userForm: {...userFormInitialState},
        userContactForm: {...userContactFormInitialState},
        userEditForm: {...userEditFormInitialState}
    }),
    mutations: {
        SET_USER_FORM(state: FormStore, payload: UserFormData) {
            state.userForm = payload
        },
        SET_USER_CONTACT_FORM(state: FormStore, payload: UserContactFormData) {
            state.userContactForm = payload
        },
        SET_USER_EDIT_FORM(state: FormStore, payload: UserEditFormData) {
            state.userEditForm = payload
        },
        RESET_USER_FORM(state: FormStore) {
            state.userForm = {...userFormInitialState}
        },
        RESET_USER_CONTACT_FORM(state: FormStore) {
            state.userContactForm = {...userContactFormInitialState}
        },
        RESET_USER_EDIT_FORM(state: FormStore) {
            state.userEditForm = {...userEditFormInitialState}
        },
    }
})
