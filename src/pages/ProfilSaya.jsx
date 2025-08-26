import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import Button from "../components/atoms/Button";
import ProfileIcon from "@/assets/images/Profile.svg";
import WarningIcon from "../assets/images/Warning.svg";
import DaftarSaya from "../components/organisms/PortraitGrid";

const labelStyle = "text-light-disabled";
const inputStyle =
  "relative flex flex-col w-full px-3 py-1 bg-other-paper rounded-md outline-1 outline-light-disabled";

const ProfilSaya = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isEditable, setIsEditable] = useState({
    username: false,
    email: false,
    password: false,
  });

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const users = JSON.parse(localStorage.getItem("users")) || [];

  useEffect(() => {
    if (loggedInUser) {
      setFormData({
        username: loggedInUser.username || "",
        email: loggedInUser.email || "",
        password: "",
      });
    }
  }, []);

  const toggleEdit = (field) => {
    setIsEditable((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateUser = {
      ...loggedInUser,
      username: formData.username,
      email: formData.email,
    };

    if (formData.password.trim() !== "") {
      updateUser.password = formData.password.trim();
    }

    const updateUsers = users.map((u) =>
      u.id === loggedInUser.id ? updateUser : u
    );

    localStorage.setItem("users", JSON.stringify(updateUsers));
    localStorage.setItem("loggedInUser", JSON.stringify(updateUsers));

    alert("Profil berhasil diperbarui!");
  };

  return (
    <>
      <Header />
      <main className="flex flex-col w-full min-h-dvh justify-evenly items-start md:py-6 md:px-10 py-6 px-4 bg-page-header text-sm gap-10">
        <section className="flex flex-col-reverse sm:flex-row justify-between w-full gap-6 sm:gap-10">
          <div className="flex flex-col w-full sm:w-[50%] text-light-primary gap-8">
            <h1 className="text-light-primary text-3xl">Profil Saya</h1>
            <div className="flex justify-start items-center gap-4">
              <img
                className="w-17 lg:w-34"
                src={ProfileIcon}
                alt="Profile Icon"
              />
              <div className="flex flex-col gap-1 text-sm">
                <Button variant="primary-default" className="px-2">
                  Ubah Foto
                </Button>
                <p>Maksimal 2MB</p>
              </div>
            </div>
            <form
              action="submit"
              onSubmit={handleSubmit}
              className="flex flex-col gap-8"
            >
              <div className={inputStyle}>
                <label htmlFor="nama" className={labelStyle}>
                  Nama Pengguna
                </label>
                <input
                  id="nama"
                  name="username"
                  type="text"
                  placeholder={formData.username}
                  value={formData.username}
                  onChange={handleChange}
                  readOnly={!isEditable.username}
                />
                <button
                  type="button"
                  className="absolute top-1/3 right-4 cursor-pointer"
                  onClick={() => toggleEdit("username")}
                >
                  <FontAwesomeIcon icon="fa-solid fa-pencil" />
                </button>
              </div>
              <div className={inputStyle}>
                <label htmlFor="email" className={labelStyle}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={formData.email}
                  value={formData.email}
                  onChange={handleChange}
                  readOnly={!isEditable.email}
                />
                <button
                  type="button"
                  className="absolute top-1/3 right-4 cursor-pointer"
                  onClick={() => toggleEdit("email")}
                >
                  <FontAwesomeIcon icon="fa-solid fa-pencil" />
                </button>
              </div>
              <div className={inputStyle}>
                <label htmlFor="password" className={labelStyle}>
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="*****"
                  className="w-full"
                  value={formData.password}
                  onChange={handleChange}
                  readOnly={!isEditable.password}
                />
                <button
                  type="button"
                  className="absolute top-1/3 right-4 cursor-pointer"
                  onClick={() => toggleEdit("password")}
                >
                  <FontAwesomeIcon icon="fa-solid fa-pencil" />
                </button>
              </div>
              <Button
                type="submit"
                className="w-[15%] p-1 text-sm focus:bg-primary-300"
              >
                Simpan
              </Button>
            </form>
          </div>

          <div className="relative flex w-full sm:max-w-100 h-40 p-4 bg-other-extra rounded-lg text-sm text-light-primary gap-3">
            <img
              src={WarningIcon}
              alt="Warning Icon"
              className="w-[20%] h-[60%]"
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg">
                Saat ini anda belum berlangganan
              </h3>
              <p>
                Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
                Kamu!
              </p>
            </div>
            <Button
              variant="body"
              className="absolute bottom-2 right-2 px-2 py-1"
            >
              Mulai Berlangganan
            </Button>
          </div>
        </section>

        <section className="relative flex flex-col w-full text-light-primary gap-4">
          <DaftarSaya title="Daftar Saya" filterKey="myList" />

          <button className="absolute top-0 right-0 p-2 text-lg cursor-pointer">
            Lihat Semua
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProfilSaya;
