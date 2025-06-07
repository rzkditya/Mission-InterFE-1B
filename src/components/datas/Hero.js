// /src/data/movies.js
const imageModules = import.meta.glob('../../assets/posters/*.svg', { eager: true })

const imageMap = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const fileName = path.split('/').pop();
    return [fileName, mod.default];
  })
)

const Hero = [
  {
    id: 1,
    title: 'Korea',
    poster_path: imageMap['Korea.svg'],
    badge: '',
  },
  
  // ...more movies
];

export default Hero;
