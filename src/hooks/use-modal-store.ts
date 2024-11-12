import { create } from 'zustand';

type ModalStore = {
  isOpen: boolean;
  open: (params?: { params?: any }) => void;
  close: () => void;
  params: any;
};

type AlertDeleteStore = {
  isAlertOpen: boolean;
  openAlert: (params?: { params?: any }) => void;
  closeAlert: () => void;
  alertParams: any;
};

const useModalStore = create<ModalStore & AlertDeleteStore>()((set) => ({
  isOpen: false,
  params: null,
  open: (params) => set({ isOpen: true, params: params?.params }),
  close: () => set({ isOpen: false, params: null }),
  isAlertOpen: false,
  alertParams: null,
  openAlert: (params) =>
    set({ isAlertOpen: true, alertParams: params?.params }),
  closeAlert: () => set({ isAlertOpen: false, alertParams: null }),
}));

export default useModalStore;
