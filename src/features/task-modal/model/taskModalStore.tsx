import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type ModalType = 'editing' | 'creation'
type State = {
	taskId?: string
	isOpen: boolean
	modalType?: ModalType
}
type Actions = {
	openTaskEditingModal: (taskId?: string) => void
	openTaskCreationModal: () => void
	closeModal: () => void
}

export const useTaskModalStore = create<State & Actions>()(
	persist(
		devtools(
			immer((set) => ({
				isOpen: true,
				closeModal: () => {
					set((state) => {
						state.isOpen = false
						state.modalType = undefined
					})
				},
				openTaskEditingModal: (taskId) => {
					set((state) => {
						state.isOpen = true
						state.modalType = 'editing'
						state.taskId = taskId
					})
				},
				openTaskCreationModal: () => {
					set((state) => {
						state.modalType = 'creation'
						state.isOpen = true
					})
				},
			})),
		),
		{ name: 'taskModalStore' },
	),
)
