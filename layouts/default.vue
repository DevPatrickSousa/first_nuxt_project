<script setup>
import userImage from '~/assets/user_image.png'
import logo from '~/assets/logo.png'
import logoWLetters from '~/assets/nobg.png'

const visible = ref(false);
const themeModeStore = useThemeModeStore();
const optionStore = useOptionStore();
const userLogged = ref(false);

const items = ref([
    {
        label: 'Voos',
        icon: ['fas', 'plane'],
        // command: () => {
        //     isDisabled.value = true;
        // },
        disabled: false,
        opacity: 0.5,
        type: 'font-awesome',
        isSelected: true
    },
    {
        label: 'Hotéis',
        icon: 'pi pi-building',
        disabled: false,
        opacity: 0.5,
        type: 'prime-icons',
        isSelected: false
    },
    {
        label: 'Aluguel de carro',
        icon: 'pi pi-car',
        disabled: false,
        opacity: 0.5,
        type: 'prime-icons',
        isSelected: false
    },
    {
        label: 'Passeios',
        icon: ['fas', 'sailboat'],
        disabled: false,
        opacity: 0.5,
        type: 'font-awesome',
        isSelected: false
    }
]);

const handleItemClick = (item) => {
  optionStore.optionName = item.label;
  items.value.forEach(i => i.isSelected = false);
  item.isSelected = true;
};

onMounted(() => {
  themeModeStore.initializeTheme();
})

</script>

<template>
  <div class="!w-100 grid grid-cols-3">
    <div class="p-4">
      <Drawer v-model:visible="visible" header="Drawer" class="!w-20 md:!w-80 lg:!w-[30rem]">
        <template #header>
          <div class="flex items-center gap-2">
            <Avatar :image="userImage" shape="circle" size="xlarge"/>
            <span class="font-bold">Amy Elsner</span>
          </div>
        </template>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <template #footer>
          <div class="flex items-center gap-2">
            <Button label="Account" icon="pi pi-user" class="flex-auto" outlined></Button>
            <Button label="Logout" icon="pi pi-sign-out" class="flex-auto" severity="danger" text @click="userLogged = false; visible = false"></Button>
          </div>
        </template>
      </Drawer>
      <!-- <Button icon="pi pi-ellipsis-v" @click="visible = true" class="w-12 h-12"/> -->
      <img :src="logo" alt="logo" class="w-12 h-12 rounded-md cursor-pointer" @click="">
    </div>

    <div class="flex justify-center p-4">
    <img :src="logoWLetters" alt="logo" class="w-56 h-26 rounded-md" :style="{color: themeModeStore.darkMode ? 'white' : 'black'}">
  </div>

    <div class="p-4 flex justify-end gap-x-3">
      <Button v-if="userLogged == true" label="Minha conta" icon="pi pi-user" class="w-15 h-12" text @click="visible = true"/>
      <Button v-else label="Entrar" icon="pi pi-user" class="w-15 h-12" text @click="userLogged = !userLogged"/>
      <Button :icon="themeModeStore.icon" @click="themeModeStore.toggleTheme" class="w-12 h-12" text></Button>
    </div>
  </div>

  <div class="">
       <!-- <Dock :model="items" position="top" class="max-w-74 flex flex-row items-center relative">
        <template #item="{ item }">
          <a v-tooltip.top="item.label" href="#" class="flex flex-col items-center justify-center relative overflow-hidden cursor-default w-16 h-16" :pt="{  }" @click="handleItemClick(item)">
            <i v-if="item.type === 'prime-icons'" :class="item.icon" class="text-4xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" :style="{ opacity: item.isSelected ? 1 : item.opacity, color: item.isSelected ? '#1c3e15' : '#687367' }" @mouseover="item.opacity = 1" @mouseleave="item.opacity = 0.5"></i>
            <font-awesome v-if="item.type === 'font-awesome'" :icon="item.icon" class="text-4xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" :style="{ opacity: item.isSelected ? 1 : item.opacity, color: item.isSelected ? '#1c3e15' : '#687367' }"  @mouseover="item.opacity = 1" @mouseleave="item.opacity = 0.5"></font-awesome>
          </a>
        </template>
      </Dock>  -->
    </div>
  <slot></slot>
</template>

<style scoped>
img {
    transition: opacity 0.3s; 
}

</style>