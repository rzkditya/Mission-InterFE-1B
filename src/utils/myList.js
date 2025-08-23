import allFilms from "../allFilms.json";

export function getMyList() {
  return JSON.parse(localStorage.getItem("myList")) || [];
}

export function saveMyList(list) {
  localStorage.setItem("myList", JSON.stringify(list));
}

export function toggleMyList(movieId) {
  const saved = getMyList();
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

  saveMyList(updated);
  return updated;
}
