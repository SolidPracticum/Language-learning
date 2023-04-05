/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import scss from "./Main.module.scss";

function Main({ isMain, top }: { isMain: any; top: any }) {
  const { t } = useTranslation();
  return (
    <main className={scss.main}>
      <img
        className={scss.recta}
        src="/images/main/Rectangle 33.png"
        alt="logo"
      />
      {isMain ? (
        " "
      ) : (
        <>
          {" "}
          <h2 className={scss.h2}>{t("main")}</h2>
          <h5 className={scss.h5}>{t("main_second")}</h5>
          <button className={scss.btn}>{t("enter")}</button>
        </>
      )}
      <img
        className={scss.rect}
        src="/images/main/Rectangle 47.png"
        alt="logo"
      />
      <img
        className={scss.rectan}
        src="/images/main/Rectangle 40.png"
        alt="logo"
      />
      <img className={scss.Main} src="/images/main/Main.png" alt="logo" />
      <hr
        className={scss.hr}
        style={{
          top: `${top}px`,
        }}
      />
    </main>
  );
}

export default Main;
