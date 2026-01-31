<script setup lang="ts">

const props = defineProps <{
    text1: string;
    text2: string;
    active: boolean;
}>()

const emits = defineEmits<{
    (e: 'click1'):void,
    (e: 'click2'):void,
}>()

const handleClick1 = () => emits('click1')
const handleClick2 = () => emits('click2')

</script>

<template>
  
    <div class="ButtonContainer">

        <button 
            class="ButtonContainer__Button"
            @click="handleClick1"
            :disabled="active == false"
            :style="{backgroundColor: active == false ? 'blue' : 'gray', cursor: active == false ? 'not-allowed' : 'pointer'  }"
        >
            {{ text1 }}
        </button>

        <button 
            class="ButtonContainer__Button"
            @click="handleClick2"
            :disabled="active == true"
            :style="{backgroundColor: active == true ? 'blue' : 'gray', cursor: active == true ? 'not-allowed' : 'pointer'  }"
        >
            {{ text2 }}
        </button>

    </div>

</template>

<style scoped>
.ButtonContainer{

    margin-top: 20px;

    display: flex;
    flex-direction: row;
    gap: 50px;
}
.ButtonContainer__Button{
    color: white;

    padding: 12px;

    border: none;
    border-radius: 12px;
}
</style>
