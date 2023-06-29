import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import type { Task } from '@prisma/client'

type Mode = 'editing' | 'creation'
type InitialTaskData = Partial<
	Pick<Task, 'id' | 'title' | 'description' | 'statusId'>
>
type State = {
	isOpen: boolean
	mode?: Mode
	initialTaskData: InitialTaskData | null
}
type Actions = {
	openTaskEditingModal: (
		initialTaskData: InitialTaskData & Required<Pick<InitialTaskData, 'id'>>,
	) => void
	openTaskCreationModal: (initialTaskData: Omit<InitialTaskData, 'id'>) => void
	closeModal: () => void
}

export const useTaskModalStore = create<State & Actions>()(
	persist(
		devtools(
			immer((set) => ({
				isOpen: false,
				initialTaskData: null,
				mode: undefined,

				closeModal: () => {
					set((state) => {
						state.isOpen = false
						state.initialTaskData = null
						delete state.mode
					})
				},
				openTaskEditingModal: (initialTaskData) => {
					set((state) => {
						state.isOpen = true
						state.mode = 'editing'
						state.initialTaskData = initialTaskData
					})
				},
				openTaskCreationModal: (initialTaskData) => {
					set((state) => {
						state.mode = 'creation'
						state.isOpen = true
						state.initialTaskData = initialTaskData
					})
				},
			})),
		),
		{ name: 'taskModalStore' },
	),
)
