import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../atoms/Logo";
import InputBox from "../molecules/InputField";
import Button from "../atoms/Button";
import Google from "../../assets/images/Google.svg";

const Form = ({ template = "login" }) => {
  const baseStyle =
    "flex flex-col justify-center w-xs md:w-md h-fit p-[20px] gap-6 bg-page-header/65 outline outline-black/5 rounded-xl text-sm md:text-lg text-light-primary";
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value.trim();
    const password = e.target.password.value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      navigate("/home");
    } else {
      alert("Username atau password salah!");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    let lastId = parseInt(localStorage.getItem("lastUserId") || "0", 10);
    const newId = lastId + 1;
    const username = e.target.username.value.trim();
    const password = e.target.password.value.trim();
    const confirmPassword = e.target["password-cfrm"].value;

    if (password !== confirmPassword) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      alert("Username sudah digunakan!");
      return;
    }

    const newUser = { id: newId, username, email: null, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("lastUserId", newId.toString());
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    navigate("/home");
  };

  const templateLogin = () => (
    <form onSubmit={handleLogin} className={baseStyle}>
      <Logo />
      <div className="flex flex-col justify-center items-center gap-2">
        <h3 className="text-2xl md:text-4xl font-medium">Masuk</h3>
        <p className="text-xs md:text-lg">Selamat datang Kembali!</p>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <div className="flex flex-col gap-4">
          <InputBox
            text="Username"
            variant="username"
            id="username"
            name="Username"
          />
          <InputBox
            text="Kata Sandi"
            variant="password"
            id="password"
            name="Password"
          />
        </div>
        <div className="flex justify-between text-xs md:text-lg">
          <p className="text-light-secondary">
            Belum punya akun?{" "}
            <Link to="/register" className="text-light-primary">
              Daftar
            </Link>
          </p>
          <Link to="/" className="text-light-primary">
            Lupa kata sandi?
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center text-xs md:text-lg">
        <Button type="submit" variant="extra" className="w-full py-1">
          Masuk
        </Button>
        <span className=" my-1 text-light-disabled">Atau</span>
        <Button variant="clean-white" className="w-full py-1">
          <img src={Google} alt="Google Icon" />
          Masuk dengan Google
        </Button>
      </div>
    </form>
  );

  const templateRegister = () => (
    <form onSubmit={handleRegister} className={baseStyle}>
      <Logo />
      <div className="flex flex-col justify-center items-center gap-2">
        <h3 className="text-2xl md:text-4xl font-medium">Daftar</h3>
        <p className="text-md:text-lg">Selamat Datang!</p>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <div className="flex flex-col gap-4">
          <InputBox
            text="Username"
            variant="username"
            id="username"
            name="Username"
          />
          <InputBox
            text="Kata Sandi"
            variant="password"
            id="password"
            name="Password"
          />
          <InputBox
            text="Konfirmasi Kata Sandi"
            variant="password"
            id="password-cfrm"
            name="Password"
          />
        </div>
        <div className="flex justify-between text-xs md:text-lg">
          <p className="text-light-secondary">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-light-primary">
              Masuk
            </Link>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center text-xs md:text-lg">
        <Button type="submit" variant="extra" className="w-full py-1">
          Daftar
        </Button>
        <span className=" my-1 text-light-disabled">Atau</span>
        <Button variant="clean-white" className="w-full py-1">
          <img src={Google} alt="Google Icon" />
          Daftar dengan Google
        </Button>
      </div>
    </form>
  );

  return template === "login" ? templateLogin() : templateRegister();
};

export default Form;
