<template>

    <div class="px-8 h-20 bg-gray-100 flex items-center justify-between">
        <div class="">
            <h2 class="text-[20px] font-bold"><router-link to="/">Home</router-link></h2>
        </div>
        <div class="flex items-center gap-3 font-normal h-full">
            <router-link class="text-[20px] flex items-center justify-center px-2 hover:bg-slate-200 h-full" :to="{name:'byName'}">Search Meals</router-link>
            <router-link class="text-[20px] flex items-center justify-center px-2 hover:bg-slate-200 h-full" :to="{name:'byLetter'}">Meals By Leatter</router-link>
            <router-link class="text-[20px] flex items-center justify-center px-2 hover:bg-slate-200 h-full" :to="{name:'byIngredients'}">Meals By Ingredients</router-link>
        </div>
    </div>

</template>

<script setup>



</script>