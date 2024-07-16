<script setup>
const optionStore = useOptionStore();

const handleMenuItem = (item) => {
  optionStore.setOption(item.label);
  optionStore.items.forEach(i => i.isSelected = false);
  optionStore.setSelectedItem(item);
};

</script>

<template>
  <div class="flex flex-col min-h-full min-w-20 overflow-hidden rounded-none rounded-l-lg border-2 gap-y-3 p-2 items-center justify-center" :style="{ backgroundColor: '#fafafa' }">
    <template v-for="item in optionStore.items" :key="item.label">
      <a v-tooltip.top="item.label" class="flex flex-col items-center justify-center relative overflow-hidden cursor-default h-12" :pt="{  }" @click="handleItemClick(item)">
        <i v-if="item.type === 'prime-icons'" :class="item.icon" class="text-3xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" :style="{ opacity: item.isSelected ? 1 : item.opacity, color: item.isSelected ? '#1c3e15' : '#687367' }" @mouseover="item.opacity = 1" @mouseleave="item.opacity = 0.5" @click="handleMenuItem(item)"></i>
        <font-awesome v-if="item.type === 'font-awesome'" :icon="item.icon" class="text-3xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" :style="{ opacity: item.isSelected ? 1 : item.opacity, color: item.isSelected ? '#1c3e15' : '#687367' }"  @mouseover="item.opacity = 1" @mouseleave="item.opacity = 0.5" @click="handleMenuItem(item)"></font-awesome>
      </a>
    </template>
  </div>
</template>

<style scoped>
</style>
