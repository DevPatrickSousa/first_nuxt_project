<script setup>

const counterStore = useCounterStore();
</script>

<template>
    <div>
        <h1>Detalhes dos videos</h1>
        <h2>aaaa</h2>
        <h3>bbbb</h3>
        <br>
        <button @click="counterStore.increment">teste</button>
        <br>
        {{ counterStore.count }}
        <br>
        {{ counterStore.name }}
        <br>
        {{ counterStore.doubleCount }}

        <Button>
      Primevue Button
    </Button>
    </div>
</template>

<style lang="scss" scoped>

</style>