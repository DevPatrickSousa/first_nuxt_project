<script setup>
const optionStore = useOptionStore();

const actuallyOption = computed(() => optionStore.optionName);
</script>

<template>
  <div class="">
    <ContainerOptionsContainerHoteis v-if="actuallyOption === 'Hotéis'"/>
    <ContainerOptionsContainerCarros v-else-if="actuallyOption === 'Aluguel de carro'"/>
    <ContainerOptionsContainerPasseios v-else-if="actuallyOption === 'Passeios'"/>
    <ContainerOptionsContainerVoos v-else/>
  </div>
</template>


