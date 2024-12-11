export interface TableProps {
  titles: string[];
  data: { [key: string]: string }[];
}
export interface EditSportProps {
  index: number;
  id?: string;
  name?: string;
  number?: string;
  email?: string;
}
export interface AddRowProps {
  id?: string;
  name?: string;
  number?: string;
  email?: string;
}
export interface DeleteRowProps {
  title: string;
  value: string;
}
export interface ShowRowsProps {
  title: string;
  value: string;
}
export interface ExistTableProps {
  exist: boolean;
}
