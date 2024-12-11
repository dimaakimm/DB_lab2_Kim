import React from "react";

interface EditRowProps {
  titles: string[];
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    title: string,
  ) => void;
}
const EditRow: React.FC<EditRowProps> = ({ titles, handleInputChange }) => {
  return (
    <tr>
      {titles.map((title) => (
        <td>
          <input
            onChange={(e) => handleInputChange(e, title)}
            placeholder={title}
            type="text"
          />
        </td>
      ))}
    </tr>
  );
};

export default EditRow;
