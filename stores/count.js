export const useCounterStore = defineStore('counter', () => {
    const count = ref(0) // state
    const name = ref('Eduardo') // state

    const doubleCount = computed(() => count.value * 2) // getter
    
    function increment() { // action
      count.value++
    }
  
    return { count, name, doubleCount, increment }
  })