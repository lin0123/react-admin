export interface StoreDataI {
  type: string;
  menuKeys: string[];
  menuRefreshKey: number;
  winH: number;
  winW: number;
  isMenuFold?: boolean;
  leftMenuW?: number;
}

/** 提交时类型必传便可 */
export interface ActionData extends Partial<StoreDataI> {
  type: string;
}
