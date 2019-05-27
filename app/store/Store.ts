import { types } from "mobx-state-tree";

const Store = types
  .model({
    appVersion: types.string   
  });

export type IStore = typeof Store.Type;

let store: IStore | null = null;
const getRootStore = (): IStore => {
  if (store === null) {
    store = Store.create({ appVersion: "1.0.0" });
  }
  return store;
};

export default Store;
export { getRootStore };
