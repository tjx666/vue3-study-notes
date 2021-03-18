<template>
    <ul>
        <li v-for="lang of programLanguages"><input type="text" :value="lang" /></li>
    </ul>
    <div><input type="text" v-model="addedLang" /><button @click="handleAdd">+</button></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

console.log('setUp');
const programLanguages = ref(['JavaScript', 'python', 'c++', 'java']);
const addedLang = ref('');

onMounted(() => console.log('mounted!'));

watch(
    programLanguages,
    (value, oldValue) => {
        console.log(`add new language: ${value[value.length - 1]}`);
    },
    { deep: true },
);

const handleAdd = () => {
    programLanguages.value.push(addedLang.value);
};
</script>

<style scoped></style>
