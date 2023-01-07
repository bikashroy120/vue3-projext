<template>
    <div class="p-8 flex justify-center flex-col gap-3">
        <input type="text" class="w-full " placeholder="Search Meales...">
        <div class="flex items-center justify-center gap-2">
            <router-link :to="{name:'byLetter', params:{letter}}" v-for="letter of letters" :key="{letter}">
                    {{ letter }}
            </router-link>
        </div>
    </div>
</template>

<script setup>
import {computed} from "vue";
import store from "../store";

    const bikash = computed(()=>store.state.bikash)
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')

</script>