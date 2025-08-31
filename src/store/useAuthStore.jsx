import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const api_url = import.meta.env.VITE_API_URL;

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      loading: false,
      loadingUpdate: false,
      loadingDelete: false,
      error: null,

      register: async (newUser) => {
        set({ loading: true, error: null });
        try {
          const existingUsersRes = await axios.get(api_url + "userAccounts");
          const existingUsers = existingUsersRes.data;

          const usernameTaken = existingUsers.some(
            (user) =>
              user.username.toLowerCase() === newUser.username.toLowerCase()
          );

          if (usernameTaken) {
            set({ error: "Username already taken", loading: false });
            return;
          }

          const res = await axios.post(api_url + "userAccounts", newUser);
          const user = res.data;
          const token = "mock-jwt-token";

          set({ user, token, loading: false });
        } catch (err) {
          set({
            error: err.response?.data?.message || "Registration failed",
            loading: false,
          });
        }
      },

      login: async ({ username, password }) => {
        set({ loading: true, error: null });

        try {
          const res = await axios.get(api_url + "userAccounts");
          const users = res.data;

          const matched = users.find(
            (u) => u.username === username && u.password === password
          );

          if (matched) {
            console.log("Matched users: ", matched);
            set({ user: matched, loading: false });
          } else {
            set({
              error: "Username atau password salah",
              user: null,
              loading: false,
            });
          }
        } catch (err) {
          set({ error: "Terjadi kesalahan jaringan", loading: false });
        }
      },

      logout: () => set({ user: null }),

      updateUser: async (updatedData) => {
        set({ loadingUpdate: true, error: null });
        try {
          const userId = get().user?.id;
          const res = await axios.put(
            `${api_url}userAccounts/${userId}`,
            updatedData
          );
          set({ user: res.data, loadingUpdate: false });
        } catch (err) {
          set({ error: "Failed to update profile", loadingUpdate: false });
          throw err;
        }
      },

      deleteUser: async (navigate) => {
        set({ loadingDelete: true, error: null });
        try {
          const userId = get().user?.id;
          if (!userId) throw new Error("No user logged in");
          await axios.delete(`${api_url}userAccounts/${userId}`);
          alert("Berhasil menghapus akun!");
          set({ user: null, token: null, loadingDelete: false });
          if (navigate) navigate("/login");
        } catch (err) {
          alert("Gagal menghapus akun");
          set({ error: "Failed to delete user", loadingDelete: false });
          throw err;
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user, token: state.token }),
    }
  )
);

export default useAuthStore;
