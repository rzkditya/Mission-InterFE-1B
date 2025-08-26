import { usePost, useGet, useDelete } from "./api-index";

export const useMyList = (userId) => {
  const {
    data: myListData,
    loading,
    error,
    refresh,
  } = useGet(`userAccounts/${userId}/myList`);
  const { postData } = usePost();
  const { deleteData } = useDelete();

  const toggleMyList = (movieId) => {
    const isInList = myListData?.find((m) => m.movieId === movieId);

    if (isInList) {
      deleteData(`userAccounts/${userId}/myList/${isInList.id}`, () => {
        refresh();
      });
    } else {
      postData(`userAccounts/${userId}/myList`, { movieId }, () => {
        refresh();
      });
    }
  };

  return { myListData, loading, error, toggleMyList };
};
