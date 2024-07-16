export const useThemeModeStore = defineStore('themeMode', () => {
  // states
  const darkMode = ref(false);
  const icon = ref('');

  // actions
  const initializeTheme = () => {
    if (darkMode.value === true ) {
      document.documentElement.classList.add('p-dark');
      icon.value = 'pi pi-sun';
    } else {
      document.documentElement.classList.remove('p-dark');
      // document.documentElement.style.background = '#c8c8c8'
      icon.value = 'pi pi-moon';
    }
  }

  const toggleTheme = () => {
    darkMode.value = !darkMode.value;
    if (darkMode.value === true) {
      document.documentElement.classList.add('p-dark');
      icon.value = 'pi pi-sun';
    } else {
      document.documentElement.classList.remove('p-dark');
      // document.documentElement.style.background = '#c8c8c8'
      icon.value = 'pi pi-moon';
    }
  };

  // getters
  const actuallyThemeMode = computed(() => darkMode.value)

  return { darkMode, icon, initializeTheme, toggleTheme, actuallyThemeMode };
  
},  {persist: true})