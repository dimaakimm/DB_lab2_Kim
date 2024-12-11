import React from "react";
import styles from "./OutputBox.module.scss";
import Title from "../Title/Title.tsx";
import { TableProps } from "../../../api/table/types.tsx";

interface OutputBoxProps {
  table: TableProps;
}
const OutputBox: React.FC<OutputBoxProps> = ({ table }) => {
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
            <tr key={index}>
              {table?.titles?.map((title) => (
                <td className={styles.box} key={title}>
                  {item[title]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OutputBox;
