import { create } from 'zustand';

export interface BeanStoreData {
  beanData: any | null;
  setbeanData: (data: any) => void;
  }

export const BeanStoreData = create<BeanStoreData>((set) => ({
  beanData: null,
  setbeanData: (data) => {
    set({ beanData: data });
  },
  }));