<script setup>
import { PhotoService } from '~/services/photo_service.js';
const optionStore = useOptionStore();
const themeMode = useThemeModeStore();
import logo from '~/assets/logo.png'

const actuallyOption = computed(() => optionStore.optionName);

const images = ref();

const selectedValue = ref('Ida');
const selectOptions = ref(['Ida', 'Ida e volta']);
const selectedCity = ref([{}]);
const datePickerIda = ref();
const datePickerVolta = ref();
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);

const responsiveOptions = ref([
  {
    breakpoint: '991px',
    numVisible: 4
  },
  {
    breakpoint: '767px',
    numVisible: 3
  },
  {
    breakpoint: '575px',
    numVisible: 1
  }
]);

onMounted(() => {
  PhotoService.getImagesByCategory('hoteis').then((data) => (images.value = data));
});
</script>

<template>
  <Card class="!min-w-full overflow-hidden rounded-none" :style="{ backgroundColor: '#21251f' }">
    <template #header>
      <Galleria :value="images" :numVisible="5" containerStyle=" border: none; border-radius: 0px;"
        :showThumbnails="false" :showIndicatorsOnItem="false" :circular="true" :autoPlay="true"
        :transitionInterval="2000" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
          <div class="relative w-full" style="max-height: 600px; height: 600px;">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" class="w-full h-full object-cover" :style="{
              opacity: 0.6,
              filter: themeMode.darkMode ? 'brightness(1)' : 'none'
            }" />
            <span
              class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-neutral-50 text-4xl tracking-10 uppercase"
              :style="{ letterSpacing: '10px' }">
              {{ slotProps.item.title }}
            </span>
          </div>
        </template>
      </Galleria>
    </template>
    <!-- <template #title>
        
      </template> -->

    <template #title class="">
      <div class="flex justify-center items-center items-stretch min-h-full">
        <MenuOptionsMenu/>
        <Card class="overflow-hidden border-2 rounded-none rounded-r-lg">
          <template #title>
            <div class="grid grid-cols-3 items-center">
              <div class="self-start">
                <img :src="logo" alt="logo" class="w-10 h-10 rounded-md">
              </div>
              <div class="">
                <SelectButton v-model="selectedValue" :options="selectOptions" aria-labelledby="basic"
                  class="flex justify-center text-white text-base items-center" />
              </div>
              <div class="flex items-center justify-end">
                <div class="grid grid grid-cols-2 gap-x-3">
                  <div class="relative">
                      <i class="pi pi-angle-down absolute top-2/4 -mt-2 right-3 text-surface-400 dark:text-surface-600" />
                      <InputText v-model="a" placeholder="Quartos" class="md:w-[14rem] h-[43px] text-base items-center"/>
                  </div>
                  <div class="">
                    <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Hóspedes"
                    class="md:w-[14rem] h-[43px] text-base items-center" />
                    </div>
                </div>
              </div>
            </div>
          </template>
          <template #content>
            <Divider/>
          </template>
          <template #footer>
            <div class="flex gap-x-5 ">
              <div class="flex flex-col">
                <span class="text-xs uppercase mb-2" :style="{ color: themeMode.darkMode ? 'white' : '#5e685e' }">Local:</span>
                <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Selecione uma cidade"
                  class="md:w-[14rem] h-[50px] text-base items-center" />
              </div>
              <!-- <div class="flex flex-col">
                <span class=" text-xs uppercase mb-2" :style="{ color: themeMode.darkMode ? 'white' : '#5e685e' }">HOTEL Destino:</span>
                <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Selecione uma cidade"
                  class="w-full md:w-[14rem] h-[50px] text-base items-center" />
              </div> -->
              <div class="flex flex-col">
                <span class="text-xs uppercase mb-2" :style="{ color: themeMode.darkMode ? 'white' : '#5e685e' }">Data do checkin:</span>
                <DatePicker v-model="datePickerIda" showIcon iconDisplay="input" placeholder="DD/MM/YYYY" class="md:w-[14rem] h-[50px]"/>
              </div>
              <div class="flex flex-col">
                <span class="text-xs uppercase mb-2" :style="{ color: themeMode.darkMode ? 'white' : '#5e685e' }">Data do checkout:</span>
                <DatePicker v-model="datePickerVolta" showIcon iconDisplay="input" placeholder="DD/MM/YYYY" class="md:w-[14rem] h-[50px]"/>
              </div>
              <div class="flex items-end mt-2">
                <Button label="Buscar" severity="success" class="!w-72 md:w-[14rem] h-[50px]" />
              </div>
            </div>
          </template>
          
        </Card>
      </div>
    </template>

     <!-- <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
          deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
          neque
          quas!
        </p>
      </template> -->

  </Card>
</template>

<style scoped></style>
