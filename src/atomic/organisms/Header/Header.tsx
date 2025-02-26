import { Outlet } from "react-router-dom";
import Button from "../../atoms/Button/Button.tsx";
import Title from "../../atoms/Title/Title.tsx";
import styles from "./Header.module.scss";

const Header = () => {
  const logOut = () => {
    localStorage.removeItem("userId");
    location.reload();
  };
  const userId = localStorage.getItem("userId");

  return (
    <>
      <header className={styles.wrapper}>
        <div className={styles.content}>
          <Title className={styles.content}>
            Вы залогинены как userId={userId}
          </Title>
          <Button onClick={logOut}>Выйти из аккаунта</Button>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
