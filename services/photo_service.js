import flightImage from '~/assets/teste.webp';
import worldImage from '~/assets/world.webp';
import mykonos from '~/assets/mykonos.webp';
import paris from '~/assets/paris.webp';
import file from '~/assets/file (1).jpg';
import hangingGardens from '~/assets/hanging_gardens.jpg'
import rayavadee from '~/assets/rayavadee.jpg'

export const PhotoService = {
  getData() {
    return {
      voos: [
        {
          itemImageSrc: mykonos,
          thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
          alt: 'Descrição para a Imagem 1',
          title: 'Mykonos'
        },
        {
          itemImageSrc: file,
          thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
          alt: 'Descrição para a Imagem 2',
          title: 'Paris'
        }
      ],
      hoteis: [
        {
          itemImageSrc: hangingGardens,
          thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
          alt: 'Descrição para a Imagem 3',
          title: 'Hanging Gardens of Bali'
        },
        {
          itemImageSrc: rayavadee,
          thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria3s.jpg',
          alt: 'Descrição para a Imagem 4',
          title: 'Rayavadee'
        }
      ]
    };
  },

  getImagesByCategory(category) {
    const data = this.getData();
    return Promise.resolve(data[category]);
  }
};
