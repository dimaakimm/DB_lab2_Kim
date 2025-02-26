import { useState } from "react";
import styles from "./WelcomePage.module.scss";

import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button.tsx";
import Input from "../../atoms/Input/Input.tsx";
import Text from "../../atoms/Text/Text.tsx";

const WelcomePage = () => {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  const onClickSubmit = () => {
    localStorage.setItem("userId", userId);
    navigate("/");
  };
  const onClickEnter = () => {
    navigate("/");
  };
  const onClickExit = () => {
    localStorage.removeItem("userId");
    location.reload();
  };
  const currentUserId = localStorage.getItem("userId");

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {currentUserId ? (
          <div className={styles.loggedIn}>
            <Text>Вы можете зайти как поьзователь с id={currentUserId}</Text>
            <div className={styles.buttons}>
              <Button onClick={onClickEnter}>На главную страницу</Button>
              <Button onClick={onClickExit}>Выйти</Button>
            </div>
          </div>
        ) : (
          <div className={styles.flex} />
        )}
        <div className={styles.mainContent}>
          <Text>Вы должны ввсти свой userId</Text>
          <Input
            placeholder="userID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            type="number"
          />
          <Button onClick={onClickSubmit}>Отослать!</Button>
        </div>
        <div className={styles.flex}></div>
      </div>
    </div>
  );
};

export default WelcomePage;
