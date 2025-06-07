// /src/data/movies.js
const imageModules = import.meta.glob('../../assets/posters/portrait/*.svg', { eager: true })

const imageMap = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const fileName = path.split('/').pop();
    return [fileName, mod.default];
  })
)

const Trending = [
  {
    id: 1,
    title: 'Korea',
    genres: [
      'Adventure',
      'Fantasy',
      'Romance',
    ],
    age_rating: 'PG',
    poster_path: imageMap['Korea.svg'],
    badge: '',
  },
  {
    id: 2,
    title: 'Missing',
    genres: [
      'Adventure',
      'Fantasy',
      'Romance',
    ],
    age_rating: 'PG',
    poster_path: imageMap['Missing.svg'],
    badge: '',
  },
  {
    id: 3,
    title: 'Suzume',
    genres: [
      'Adventure',
      'Fantasy',
      'Romance',
    ],
    age_rating: 'PG',
    poster_path: imageMap['Suzume.svg'],
    badge: 'Top10',
  },
  {
    id: 4,
    title: 'The Batman',
    genres: [
      'Adventure',
      'Fantasy',
      'Romance',
    ],
    age_rating: 'PG',
    poster_path: imageMap['The Batman.svg'],
    badge: 'Top10',
  },
  {
    id: 5,
    title: 'Fast X',
    genres: [
      'Adventure',
      'Fantasy',
      'Romance',
    ],
    age_rating: 'PG',
    poster_path: imageMap['Fast X.svg'],
    badge: '',
  },
  // ...more movies
];

export default Trending;
