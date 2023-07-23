import {create} from 'zustand';
import {devtools} from 'zustand/middleware';

export const useModalStore = create(
   devtools((
         set) => ({
            isOpen: false,
            onOpen: () => set({isOpen: true}),
            onClose: () => set({isOpen: false}),
         }
      ),
      {
         name: 'ModalStore'
      }
   )
)
