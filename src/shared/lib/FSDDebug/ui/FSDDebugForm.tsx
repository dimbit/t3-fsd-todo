import { useFSDDebugStore } from '../model/FSDDebugStore'
import type { Layer } from '../model/types'

export const FSDDebugForm = () => {
	const toggleLayer = useFSDDebugStore.use.toggleLayer()
	const layers = useFSDDebugStore((state) => {
		return {
			entities: state.entities,
			features: state.features,
			widgets: state.widgets,
			pages: state.pages,
		}
	})

	const handleToggleLayer = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { dataset } = event.target
		toggleLayer(dataset.layer as Layer)
	}

	return (
		<div className={'fixed bottom-0 right-0 flex flex-col bg-neutral-500'}>
			FSD DEBUG FORM
			{Object.entries(layers).map(([layer, checked]) => {
				return (
					<label key={layer}>
						{layer}
						<input
							type='checkbox'
							name={layer}
							checked={checked}
							data-layer={layer}
							onChange={handleToggleLayer}
						/>
					</label>
				)
			})}
		</div>
	)
}
