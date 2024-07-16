import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const Noir = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#ffffff',
          100: '#8B9989',
          200: '#8B9989',
          300: '#8B9989',
          400: '#8B9989',
          500: '#ffffff',
          600: '#8B9989',
          700: '#8B9989',
          800: '#8B9989',
          900: '#8B9989',
          950: '#121212'
        },
        primary: {
          color: '#8B9989',
          inverseColor: '#ffffff',
          hoverColor: '#3b4734',
          activeColor: '#3b4734',
          borderColor: '#3b4734',
          background: '#8B9989',
        },
        highlight: {
          color: '{zinc.950}',
          hoverColor: '#ffffff',
        },
        text: {
          hoverColor: '#ffffff',
          placeholderColor: '#8B9989',
        },
        formField: {
          placeholderColor: '#8B9989',
        }
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
        },
        primary: {
          color: '#8B9989',
          inverseColor: '#ffffff',
          hoverColor: '#3b4734',
          activeColor: '#3b4734',
          borderColor: '#3b4734',
          backgroundColor: '#687367'
        },
        highlight: {
          background: '#687367',
          focusBackground: '#3b4734',
          color: '#3b4734',
          focusColor: '#3b4734',
        },
      },
    },
  },
  components: {
    card: {
      colorScheme: {
        light: {
          root: {
            background: '{zinc.50}',
            color: '{zinc.950}'
          },
          subtitle: {
            color: '{zinc.50}'
          }
        },
        dark: {
          root: {
            background: '{surface.950}',
            color: '{surface.50}'
          },
          subtitle: {
            color: '{zinc.950}'
          }
        }
      }
    },
    button: {
      primary: {
        colorScheme: {
          light: {
            root: {
              background: '{red.500}',
              color: '{red.500}',
            }
          },
          dark: {
            root: {
              borderColor: '{zinc.950}',
              background: '{zinc.950}',
              color: '{zinc.50}',
            }
          }
        }
      }
    },
    dock: {
      colorScheme: {
        light: {
          root: {
            background: '{zinc.50}',
          }
        },
        dark: {
          root: {
            background: '#121212',
          },
          border: {
            color: '#121212'
          }
        }
      }
    },
    selectbutton: {
      colorScheme: {
        light: {
          root: {
            background: '{indigo.50}',
            color: '{zinc.950}'
          },
        },
        dark: {
          root: {
            background: '{surface.950}',
            color: '{surface.50}'
          },
        }
      }
    },
    select: {
      colorScheme: {
        light: {
          placeholder: {
            root:{
              color: '#8B9989'
            }
          }
        },
        dark: {
          placeholder: {
            root: {
              color: '{indigo.500}'
            }
          }
        }
      }
    }
  }
});

export default {
  preset: Noir,
  options: {
    darkModeSelector: '.p-dark',
  },
};
