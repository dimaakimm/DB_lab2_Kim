import { AxiosPromise } from "axios";
import { axiosInstance } from "../instance";
import { Endpoints } from "../endpoints.ts";
import {
  AddRowProps,
  DeleteRowProps,
  EditSportProps,
  ExistTableProps,
  ShowRowsProps,
  TableProps,
} from "./types.tsx";

export const getTable = (): AxiosPromise<TableProps> =>
  axiosInstance.get(Endpoints.GET_TABLE);

export const addRow = (props: AddRowProps): AxiosPromise =>
  axiosInstance.put(Endpoints.ADD_ROW, props);

export const editRow = (props: EditSportProps): AxiosPromise =>
  axiosInstance.put(Endpoints.EDIT_ROW, props);

export const deleteRow = (props: DeleteRowProps): AxiosPromise =>
  axiosInstance.put(Endpoints.DELETE_ROW, props);

export const showRows = (props: ShowRowsProps): AxiosPromise<TableProps> =>
  axiosInstance.put(Endpoints.SHOW_ROWS, props);

export const saveTable = (): AxiosPromise =>
  axiosInstance.get(Endpoints.SAVE_BACKUP_TABLE);

export const createTable = (): AxiosPromise =>
  axiosInstance.get(Endpoints.CREATE_TABLE);

export const deleteTable = (): AxiosPromise =>
  axiosInstance.get(Endpoints.DELETE_TABLE);

export const setBackupTable = (): AxiosPromise =>
  axiosInstance.get(Endpoints.SET_BACKUP_TABLE);

export const clearTable = (): AxiosPromise =>
  axiosInstance.get(Endpoints.CLEAR_TABLE);

export const isExistTable = (): AxiosPromise<ExistTableProps> =>
  axiosInstance.get(Endpoints.DOES_TABLE_EXIST);
