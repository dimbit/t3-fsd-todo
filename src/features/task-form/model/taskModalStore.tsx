import type { Task } from '@prisma/client'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { createSelectors } from '@/shared/storeUtils'

type Mode = 'editing' | 'creation'
type TaskInitialData = Partial<
	Pick<Task, 'id' | 'title' | 'description' | 'status'>
>
type State = {
	isOpen: boolean
	mode?: Mode | null
	taskInitialData: TaskInitialData | null
}

export type EditingFormInitialData = TaskInitialData &
	Required<Pick<TaskInitialData, 'id'>>
export type CreationFormInitialData = Omit<TaskInitialData, 'id'>

export type Actions = {
	openTaskEditingModal: (taskInitialData: EditingFormInitialData) => void
	openTaskCreationModal: (taskInitialData: CreationFormInitialData) => void
	closeModal: () => void
}

const initialState = {
	isOpen: false,
	mode: null,
	taskInitialData: null,
}

export const useTaskModalStoreBase = create<State & Actions>()(
	persist(
		devtools(
			immer((set) => ({
				...initialState,

				closeModal: () => {
					set((state) => {
						state.isOpen = initialState.isOpen
						state.mode = initialState.mode
						state.taskInitialData = initialState.taskInitialData
					})
				},
				openTaskEditingModal: (taskInitialData) => {
					set((state) => {
						state.isOpen = true
						state.mode = 'editing'
						state.taskInitialData = taskInitialData
					})
				},
				openTaskCreationModal: (taskInitialData) => {
					set((state) => {
						state.isOpen = true
						state.mode = 'creation'
						state.taskInitialData = taskInitialData
					})
				},
			})),
		),
		{ name: 'taskModalStore' },
	),
)

export const useTaskModalStore = createSelectors(useTaskModalStoreBase)
