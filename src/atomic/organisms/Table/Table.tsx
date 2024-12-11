import React, { useState } from "react";
import styles from "./Table.module.scss";
import Title from "../../atoms/Title/Title.tsx";
import { TableProps } from "../../../api/table/types.tsx";
import AddNewRow from "../../molecules/AddNewRow/AddNewRow.tsx";
import Button from "../../atoms/Button/Button.tsx";
import {
  clearTable,
  deleteTable,
  editRow,
  saveTable,
  setBackupTable,
} from "../../../api/table";
import { useNavigate } from "react-router-dom";
import EditRow from "../../molecules/EditRow/EditRow.tsx";

type MainPageStatuses = "default" | "addRow" | "editRow" | "deleteRow";
interface TableComponentProps {
  table: TableProps;
}
const Table: React.FC<TableComponentProps> = ({ table }) => {
  const navigate = useNavigate();
  const [state, setState] = useState<MainPageStatuses>("default");
  const [editedIndex, setEditedIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    title: string,
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [title]: value,
    }));
  };
  const onSaveClick = async () => {
    try {
      await saveTable();
      alert("Успешно сохранен backup файл");
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "Возникла ошибка.";
      alert(errorMessage);
    }
  };
  const onClearClick = async () => {
    try {
      await clearTable();
      window.location.reload();
      alert("Таблица успешно очищена");
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "Возникла ошибка.";
      alert(errorMessage);
    }
  };
  const onSetBackupTableClick = async () => {
    try {
      await setBackupTable();
      window.location.reload();
      alert("Таблица возвращена до сохраненного состояния");
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "Возникла ошибка.";
      alert(errorMessage);
    }
  };
  const onDeleteClick = async () => {
    try {
      await deleteTable();
      window.location.reload();
      alert("Таблица удалена");
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "Возникла ошибка.";
      alert(errorMessage);
    }
  };
  const onMenuClick = () => {
    navigate("/");
  };
  const onEditRow = async (index: number) => {
    try {
      await editRow({ index: index, ...formData });
      window.location.reload();
    } catch (e) {
      alert(e?.response.message);
    }
  };
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {table?.titles.map((title) => (
              <th className={styles.box} key={title}>
                <Title>{title}</Title>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table?.data?.map((item, index) => (
            <>
              <tr key={index}>
                {table?.titles?.map((title) => (
                  <td className={styles.box} key={title}>
                    {item[title]}
                  </td>
                ))}
                <td className={styles.box}>
                  {index === editedIndex ? (
                    <>
                      <img
                        src=""
                        alt="confirm"
                        onClick={() => onEditRow(index)}
                      />
                      <img
                        src=""
                        alt="cancel"
                        onClick={() => setEditedIndex(null)}
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src=""
                        alt="edit"
                        onClick={() => setEditedIndex(index)}
                      />
                    </>
                  )}
                </td>
              </tr>
              {index === editedIndex && (
                <EditRow
                  titles={table?.titles}
                  handleInputChange={handleInputChange}
                />
              )}
            </>
          ))}
          {state === "default" && (
            <tr className={styles.lastRow}>
              <td className={styles.row} onClick={() => setState("addRow")}>
                add
              </td>
            </tr>
          )}
          {state === "addRow" && (
            <AddNewRow
              onCancelClick={() => setState("default")}
              titles={table?.titles}
            />
          )}
        </tbody>
      </table>
      <div className={styles.buttonsBox}>
        <Button onClick={() => window.location.reload()}>update</Button>
        <Button onClick={onSaveClick}>save</Button>
        <Button onClick={onClearClick}>clear</Button>
        <Button onClick={onSetBackupTableClick}>get backup</Button>
        <Button onClick={onDeleteClick}>delete table</Button>
        <Button onClick={onMenuClick}>go to menu</Button>
      </div>
    </div>
  );
};

export default Table;
