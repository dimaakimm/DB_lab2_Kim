import { useEffect, useState } from "react";
import styles from "./WelcomePage.module.scss";
import {
  clearTable,
  createTable,
  deleteTable,
  isExistTable,
  setBackupTable,
} from "../../../api/table";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button.tsx";
import Title from "../../atoms/Title/Title.tsx";

const WelcomePage = () => {
  const [exist, setExist] = useState(false);
  const navigate = useNavigate();
  const onSetBackupTableClick = async () => {
    try {
      await setBackupTable();
      window.location.reload();
      alert("Таблица возвращена до сохраненного состояния");
    } catch (e) {
      alert(e.response.data);
    }
  };
  const onDeleteClick = async () => {
    try {
      await deleteTable();
      window.location.reload();
      alert("Таблица удалена");
    } catch (e) {
      alert(e.response.data);
    }
  };
  const onCreateClick = async () => {
    try {
      await createTable();
      alert("Таблица создана");
      window.location.reload();
    } catch (e) {
      alert(e.response.data);
    }
  };
  const onClearClick = async () => {
    try {
      await clearTable();
      alert("Таблица успешно очищена");
    } catch (e) {
      alert(e.response.data);
    }
  };
  useEffect(() => {
    const doesExist = async () => {
      try {
        await isExistTable();
        setExist(true);
      } catch (e) {
        console.error(e);
        setExist(false);
      }
    };
    doesExist();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {exist ? (
          <div className={styles.mainContent}>
            <Title>Таблица существует</Title>
            <div className={styles.buttons}>
              <Button onClick={() => navigate("/table")}>open table</Button>
              <Button onClick={onClearClick}>clear table</Button>
              <Button onClick={onDeleteClick}>delete table</Button>
              <Button onClick={onSetBackupTableClick}>get backup</Button>
            </div>
          </div>
        ) : (
          <div className={styles.mainContent}>
            <div className={styles.buttons}>
              <Button onClick={onCreateClick}>create table</Button>
              <Button onClick={onSetBackupTableClick}>get backup</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
