<script setup lang="ts">
import { computed } from 'vue';
import { useUsersStore } from '../../store/usersStore';


import userPic from "../../assets/pic.jpg"

import type { user } from "../../data/users";

const props = defineProps<{
    user:user
}>()

const userStore = useUsersStore();

const isUserAdded = computed(() => {
    return userStore.users.some(u => u.id === props.user.id)
})

function handleClick() {
  if (isUserAdded.value) {
    userStore.removeUser(props.user.id);
  } else {
    userStore.addUser(props.user);
  }
}

</script>

<template>

    <article class="User">

        <div class="User__wrapper">
            <img :src="userPic" class="wrapper__img" />
        </div>

        <div class="User__Info">

            <p class="Info__name">
                {{ user.name }}
            </p>

            <p class="Info__username">
                {{ user.username }}
            </p>

        </div>

        <button
            class="User__Button"
            :style="{backgroundColor: isUserAdded ? 'red' : 'green'}"
            @click="handleClick"
        >
            {{ isUserAdded ? 'X' : '+' }}
        </button>

    </article>

</template>

<style scoped>
.User{
    width: 440px;
    height: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;

    position: relative;
}

.User__wrapper{
    width: 50px;
    height: 50px;

    border-radius: 50%;
    overflow: hidden;
}

.wrapper__img{
    width: 100%;
    height: 100%;
}

.User__Info{
    width: 240px;
    height: 38px;

    display: flex;
    flex-direction: column;
    gap: 7px;
}

.Info__name{
    font-size: 20px;
    font-weight: bold;
    color: black;
    white-space: nowrap;
}
.Info__username{
    font-size: 17px;
    font-weight: bold;
    color: gray;
}

.Info__username:hover{
    color: rgb(59, 136, 136);
    cursor: pointer;
}

.User__Button{
    width: 30px;
    height: 30px;

    position: absolute;
    right: 0;
    top: 9px;

    border: none;
    border-radius: 12px;

    color: white;
    font-size: 16px;
}
</style>
