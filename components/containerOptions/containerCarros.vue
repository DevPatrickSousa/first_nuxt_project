<script setup>

const optionStore = useOptionStore();

const actuallyOption = computed(() => optionStore.optionName);
</script>

<template>
  <div>
    <h1 class="text-center">CARROS</h1>
  </div>
</template>


