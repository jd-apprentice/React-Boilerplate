import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const RootStoreModel = types.model("RootStore").props({});

export const rootStore = RootStoreModel.create();
export type RootStore = Instance<typeof RootStoreModel>;
export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>;
