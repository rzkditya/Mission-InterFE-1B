import allFilms from "../allFilms.json";

export function getMyList(userId) {
  return JSON.parse(localStorage.getItem(`myList_${userId}`)) || [];
}

export function saveMyList(userId, list) {
  localStorage.setItem(`myList_${userId}`, JSON.stringify(list));
}

export function toggleMyList(userId, movieId) {
  const saved = getMyList(userId);
  const exists = saved.find((m) => m.id === movieId);

  let updated;
  if (exists) {
    updated = saved.filter((m) => m.id !== movieId);
  } else {
    const movie = allFilms.find((m) => m.id === movieId);
    if (movie) {
      updated = [...saved, { ...movie, myList: true }];
    } else {
      updated = saved;
    }
  }

  saveMyList(userId, updated);
  return updated;
}
