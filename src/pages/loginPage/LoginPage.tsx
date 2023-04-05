/* eslint-disable no-undef */
import  { useState } from "react";
import scss from "./LoginPage.module.scss";
import Input from "../../components/input/Input";
import { useNavigate } from "react-router-dom";
import { addLogin } from "../../store/loginSlice";
import {  useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../store";
import Main from "../../components/main/Main";
import  Header  from "../../components/header/Header";

function LoginPage() {
  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { t } = useTranslation();

 const dataLog:any = {
    id: Date.now(),
    login: login,
    email: email,
    password: password,
    password1: password1,
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const test = useAppSelector((state) => state.login.logins);
  console.log(dataLog);
  console.log(test);
  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert(password + password1);
    if (password !== password1) {
      setError(" Password incorrect, please try again! ");
      dispatch(addLogin(dataLog)
      );
    } else {
      navigate("/");
    }
  };
  const handleName = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLogin(e.target.value);
    setError("");
  };
  const handleEmail = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
    setError("");
  };
  const handlePassword = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setPassword(e.target.value);
  const handlePassword1 = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setPassword1(e.target.value);

  return (
    <div>
      <Header isHeader={true} color={"red"} />
      <Main isMain={true} top={640} />
      <form onSubmit={submit} className={scss.form}>
        <h4 className={scss.h4}>{t("akkaunt")}</h4>
        <Input onChange={handleName} type="text" placeholder="Login" required />
        <Input
          required
          onChange={handleEmail}
          type="text"
          placeholder="Email"
        />
        <Input
          required
          onChange={handlePassword}
          type="password"
          placeholder="Пароль"
        />
        <Input
          required
          onChange={handlePassword1}
          type="password"
          placeholder={t("pass1")}
        />
        <div className="error-message">{error}</div>
        <button className={scss.button}>{t("btnLog")}</button>
      </form>
    </div>
  );
}

export default LoginPage;
