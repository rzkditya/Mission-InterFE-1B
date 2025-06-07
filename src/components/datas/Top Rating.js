// /src/data/movies.js
const imageModules = import.meta.glob('../../assets/posters/portrait/*.svg', { eager: true })

const imageMap = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const fileName = path.split('/').pop();
    return [fileName, mod.default];
  })
)

const Top_Rating = [
  {
    id: 1,
    title: 'Avatar TWOW',
    category: 'Films',
    genres: [
      'Adventure',
      'Fantasy',
      'Romance',
    ],
    age_rating: 'PG',
    poster_path: imageMap['Avatar TWOW.svg'],
    badge: '',
  },
  {
    id: 2,
    title: 'Big Hero 6',
    genres: [
      'Adventure',
      'Fantasy',
      'Romance',
    ],
    age_rating: 'PG',
    poster_path: imageMap['Big Hero 6.svg'],
    badge: '',
  },
  {
    id: 3,
    title: 'Megan',
    genres: [
      'Adventure',
      'Fantasy',
      'Romance',
    ],
    age_rating: 'PG',
    poster_path: imageMap['Megan.svg'],
    badge: '',
  },
  {
    id: 4,
    title: 'Rio',
    genres: [
      'Adventure',
      'Fantasy',
      'Romance',
    ],
    age_rating: 'PG',
    poster_path: imageMap['Rio.svg'],
    badge: '',
  },
  {
    id: 5,
    title: 'The Tomorrow War',
    genres: [
      'Adventure',
      'Fantasy',
      'Romance',
    ],
    age_rating: 'PG',
    poster_path: imageMap['The Tomorrow War.svg'],
    badge: '',
  },
  // ...more movies
];

export default Top_Rating;
