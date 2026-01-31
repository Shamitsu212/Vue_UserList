<script setup lang="ts">
import SwitchButton from '../UI/SwitchButton.vue';
import User from '../UI/User.vue';

import { ref, computed } from 'vue';

import { users } from '../../data/users';

import { useUsersStore } from '../../store/usersStore';

const active = ref<boolean>(false)

function setTrue():void {
    active.value = true
}
function setFalse():void {
    active.value = false
}

const userStore = useUsersStore();

const filteredUsers = computed(() =>
    users.filter(u => !userStore.users.some(s => s.id === u.id))
);

</script>

<template>
  
    <div class="UserMenu">

        <SwitchButton text1="Пользователи" text2="Друзья" :active="active" @click1="setFalse" @click2="setTrue" />

        <div class="UserMenu__Map">
            <User v-for="u in filteredUsers" :user="u" v-if="active == false"/>
            <User v-for="u in userStore.users" :user="u" v-if="active == true"/>
        </div>

    </div>

</template>

<style scoped>
.UserMenu{
    background-color: white;
    box-shadow: 10px 13px 10px 0px rgba(0, 0, 0, 0.3);

    border-radius: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    width: 640px;
    height: 800px;

    padding: 20px 20px;

    overflow: hidden;
}
.UserMenu__Map{

    padding: 20px;
    border-radius: 16px;

    width: 480px;
    height: 600px;

    padding-bottom: 16px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    overflow-x: hidden ;
    overflow-y: auto;

    background-color: #F5F6F7;
}
</style>
