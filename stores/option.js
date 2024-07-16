export const useOptionStore = defineStore('option', () => {
  // states
  const optionName = ref('');
  const items = reactive([
    {
      label: 'Voos',
      icon: ['fas', 'plane'],
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

  // actions
  function setOption(option) {
    optionName.value = option;
  }

  function setSelectedItem(selectedItem) {
    items.forEach(item => {
      item.isSelected = item.label === selectedItem.label;
    });
  }

  // getters
  const getOption = computed(() => optionName);

  return { optionName, items, getOption, setOption, setSelectedItem};
})