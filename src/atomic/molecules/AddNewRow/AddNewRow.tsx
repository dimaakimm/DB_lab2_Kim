import React, { useState } from "react";
import styles from "./AddNewRow.module.scss";
import { addRow } from "../../../api/table";

interface AddNewRowProps {
  titles?: string[];
  onCancelClick: () => void;
}
const AddNewRow: React.FC<AddNewRowProps> = ({ titles, onCancelClick }) => {
  const initialFormData =
    titles?.reduce(
      (acc, key) => ({
        ...acc,
        [key]: "",
      }),
      {},
    ) || {};
  const [formData, setFormData] = useState<{ [key: string]: string }>(
    initialFormData,
  );
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
  const handleSubmit = async () => {
    try {
      await addRow(formData);
      window.location.reload();
    } catch (e) {
      alert(e?.response.data);
    }
  };
  return (
    <tr>
      {titles?.map((title) => (
        <td className={styles.box}>
          <input
            type="text"
            placeholder={title}
            onChange={(e) => handleInputChange(e, title)}
          />
        </td>
      ))}
      <td className={styles.box}>
        <img src="" alt="submit" onClick={handleSubmit} />
        <img src="" alt="cancel" onClick={onCancelClick} />
      </td>
    </tr>
  );
};

export default AddNewRow;
