import styles from "./MainPage.module.scss";
import Title from "../../atoms/Title/Title.tsx";
import Table from "../../organisms/Table/Table.tsx";
import DeleteSector from "../../molecules/DeleteSector/DeleteSector.tsx";
import SelectSector from "../../molecules/SelectSector/SelectSector.tsx";
import { useEffect, useState } from "react";
import { TableProps } from "../../../api/table/types.tsx";
import { getTable, isExistTable } from "../../../api/table";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [table, setTable] = useState<TableProps>({ titles: [], data: [] });
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTable = async () => {
      try {
        await isExistTable();
        const response = await getTable();
        setTable(response.data);
      } catch (e) {
        navigate("/");
      }
    };
    fetchTable();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Title className={styles.content}>Dima Kim LabWork 2</Title>
      <div className={styles.content}>
        <Table table={table} />
      </div>
      <div className={styles.additionalContent}>
        <SelectSector data={table.titles} />
        <DeleteSector data={table.titles} />
      </div>
    </div>
  );
};

export default MainPage;
