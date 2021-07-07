export interface StoreDataI {
  type: string;
}

/** 提交时类型必传便可 */
export interface ActionData extends Partial<StoreDataI> {
  type: string;
}
