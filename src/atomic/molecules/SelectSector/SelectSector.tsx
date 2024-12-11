import React, { useRef, useState } from "react";
import Button from "../../atoms/Button/Button.tsx";
import Text from "../../atoms/Text/Text.tsx";
import { showRows } from "../../../api/table";
import styles from "./SelectSector.module.scss";
import OutputBox from "../../atoms/OutputBox/OutputBox.tsx";
import { TableProps } from "../../../api/table/types.tsx";

interface SelectSectorProps {
  data: string[];
}
const SelectSector: React.FC<SelectSectorProps> = ({ data }) => {
  const [table, setTable] = useState<TableProps>({ titles: [], data: [] });
  const titleRef = useRef<HTMLSelectElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);
  const onClick = async () => {
    try {
      const response = await showRows({
        title: titleRef.current?.value || "",
        value: valueRef.current?.value || "",
      });
      console.log(response.data);
      setTable(response.data);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "Возникла ошибка.";
      alert(errorMessage);
    }
  };
  return (
    <div className={styles.wrapper}>
      <Text>
        SHOW ROWS WHERE
        <select className={styles.select} ref={titleRef} name="select" id="1">
          {data.map((title) => (
            <option value={title}>{title}</option>
          ))}
        </select>
        = <input className={styles.input} type="text" ref={valueRef} />
        <Button onClick={onClick}>Submit!</Button>
      </Text>
      {table?.titles?.length > 0 && <OutputBox table={table} />}
    </div>
  );
};

export default SelectSector;
