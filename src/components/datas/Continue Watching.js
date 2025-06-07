// /src/data/movies.js
const imageModules = import.meta.glob('../../assets/posters/landscape/*.svg', { eager: true })

const imageMap = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const fileName = path.split('/').pop();
    return [fileName, mod.default];
  })
)

const Continue_Watching = [
  {
    id: 1,
    title: 'Sonic The Hedhegog 2',
    category: 'Films',
    genres: [
      'Action',
      'Adventure',
    ],
    age_rating: '13+',
    poster_path: imageMap['Sonic 2.svg'],
    rating: '4/5',
    badge: '',
    watched: true,
  },
  {
    id: 2,
    title: 'Alice In Borderland',
    category: 'Series',
    genres: [
      'Action',
      'Adventure',
      'Fantasy'
    ],
    age_rating: '13+',
    poster_path: imageMap['Alice In Borderland.svg'],
    rating: '4.5/5',
    badge: 'New',
    watched: true,
  },
  {
    id: 3,
    title: 'Spiderman Into The Multiverse',
    category: 'Films',
    genres: [
      'Action',
      'Adventure',
    ],
    age_rating: '13+',
    poster_path: imageMap['Spiderman ITM.svg'],
    rating: '4.6/5',
    badge: '',
    watched: true,
  },
  {
    id: 4,
    title: 'Guardian of The Galaxy Vol. 3',
    category: 'Films',
    genres: [
      'Action',
      'Adventure',
    ],
    age_rating: '13+',
    poster_path: imageMap['GOTG Vol 3.svg'],
    rating: '4.5/5',
    badge: '',
    watched: true,
  },
  {
    id: 5,
    title: 'Doctor Strange Multiverse of Madness',
    category: 'Films',
    genres: [
      'Action',
      'Adventure',
    ],
    age_rating: '13+',
    poster_path: imageMap['Doctor Strange MOM.svg'],
    rating: '4.2/5',
    badge: '',
    watched: true,
  },
  // ...more movies
];

export default Continue_Watching;
