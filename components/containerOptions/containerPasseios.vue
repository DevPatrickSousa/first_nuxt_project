<script setup>

const optionStore = useOptionStore();

const actuallyOption = computed(() => optionStore.optionName);
</script>

<template>
  <div>
    <h1 class="text-center">PASSEIOS</h1>
  </div>
</template>


