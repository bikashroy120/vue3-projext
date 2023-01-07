<template>
    <div class="p-8">
        <div>
            <input type="text" v-model="keworld" @change="searchMeals" placeholder="Types Meals Name..." class="w-full text-[20px] py-3 border-2 border-gray-200 rounded-sm">
        </div>
        <div>
            {{ meals }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { computed } from "@vue/reactivity";
import store from '../store';


const meals = computed(() => store.state.searchedMeals);
    const keworld = ref("")
    console.log("helo" + meals)
    const searchMeals = ()=>{
        store.dispatch("searchMeals", keworld.value); 
    }
    
</script>