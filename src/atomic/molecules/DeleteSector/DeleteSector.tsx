import React, { useRef } from "react";
import Button from "../../atoms/Button/Button.tsx";
import Text from "../../atoms/Text/Text.tsx";
import { deleteRow } from "../../../api/table";
import styles from "./DeleteSector.module.scss";

interface DeleteSectorProps {
  data: string[];
}
const DeleteSector: React.FC<DeleteSectorProps> = ({ data }) => {
  const onClick = async () => {
    try {
      await deleteRow({
        title: titleRef.current?.value || "",
        value: valueRef.current?.value || "",
      });
      window.location.reload();
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "Возникла ошибка.";
      alert(errorMessage);
    }
  };
  const titleRef = useRef<HTMLSelectElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);
  return (
    <div className={styles.wrapper}>
      <Text>
        DELETE ROWS WHERE{" "}
        <select className={styles.select} ref={titleRef} name="select" id="1">
          {data.map((title) => (
            <option value={title}>{title}</option>
          ))}
        </select>
        = <input className={styles.input} type="text" ref={valueRef} />
        <Button onClick={onClick}>Submit!</Button>
      </Text>
    </div>
  );
};

export default DeleteSector;
