import styles from "./MainPage.module.scss";
import Table from "../../organisms/Table/Table.tsx";
import DeleteSector from "../../molecules/DeleteSector/DeleteSector.tsx";
import SelectSector from "../../molecules/SelectSector/SelectSector.tsx";
import { useEffect, useState } from "react";
import { TableProps } from "../../../api/table/types.tsx";
import { getTable, isExistTable } from "../../../api/table";

const MainPage = () => {
  const [table, setTable] = useState<TableProps>({ titles: [], data: [] });
  useEffect(() => {
    const fetchTable = async () => {
      try {
        await isExistTable();
        const response = await getTable();
        setTable(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchTable();
  }, []);

  return (
    <div className={styles.wrapper}>
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
