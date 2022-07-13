import { NextPage } from 'next'
import React from 'react'

import { Header } from '@components'
import {
	ColorPickerComponent,
	ColorPickerEventArgs,
} from '@syncfusion/ej2-react-inputs'

const change = (args: ColorPickerEventArgs) => {
	const preview = document.getElementById('preview')

	if (preview) {
		preview.style.backgroundColor = args.currentValue.hex
	}
}

const ColorPicker: NextPage = () => {
	return (
		<div className="m-2 md:m-10 mt-25 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="App" title="Kanban" />
			<div className="text-center">
				<div id="preview"></div>
				<div className="flex justify-center items-center gap-20 flex-wrap">
					<div>
						<p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
						<ColorPickerComponent
							id="inline-pallete"
							mode="Palette"
							modeSwitcher={false}
							inline
							showButtons={false}
							change={change}
						/>
					</div>
					<div>
						<p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
						<ColorPickerComponent
							id="inline-pallete"
							mode="Picker"
							modeSwitcher={false}
							inline
							showButtons={false}
							change={change}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ColorPicker
