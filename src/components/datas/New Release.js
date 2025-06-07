// /src/data/movies.js
const posters = import.meta.glob('../../assets/posters/portrait/*.svg', { eager: true })

const imageMap = Object.fromEntries(
  Object.entries(posters).map(([path, mod]) => {
    const fileName = path.split('/').pop();
    return [fileName, mod.default];
  })
)


const New_Release = [
  {
    id: 1,
    title: 'Little Mermaid',
    category: 'Films',
    genres: [
      'Adventure',
      'Fantasy',
      'Romance',
    ],
    age_rating: 'PG',
    poster_path: imageMap['Little Mermaid.svg'],
    badge: '',
  },
  {
    id: 2,
    title: 'Shazam FOTG',
    category: 'Films',
    genres: [
      'Action',
      'Adventure',
    ],
    age_rating: '13+',
    poster_path: imageMap['Shazam FOTG.svg'],
    badge: 'Top10',
  },
  {
    id: 3,
    title: 'Bluelock',
    category: 'Series',
    genres: [
      'Adventure',
      'Sport',
    ],
    age_rating: 'PG',
    poster_path: imageMap['Bluelock.svg'],
    badge: '',
  },
  {
    id: 4,
    title: 'All Of Us Dead',
    category: 'Series',
    genres: [
      'Adventure',
      'Horror',
      'Thriller',
    ],
    age_rating: '18+',
    poster_path: imageMap['All Of Us Dead.svg'],
    badge: 'New',
  },
  {
    id: 5,
    title: 'Duty After School',
    category: 'Series',
    genres: [
      'Adventure',
      'Action',
    ],
    age_rating: '13+',
    poster_path: imageMap['Duty After School.svg'],
    badge: 'New',
  },
  // ...more movies
];

export default New_Release;
