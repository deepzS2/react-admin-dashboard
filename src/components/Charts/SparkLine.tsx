import dynamic from 'next/dynamic'
import React from 'react'

import {
	Inject,
	SparklineTooltip,
	SparklineModel,
} from '@syncfusion/ej2-react-charts'

const SparklineComponent = dynamic<SparklineModel & { id?: string }>(
	() =>
		import('@syncfusion/ej2-react-charts').then((res) => {
			return res.SparklineComponent
		}),
	{ ssr: false }
)

interface SparkLineProps {
	id: string
	height: SparklineModel['height']
	width: SparklineModel['width']
	color: string
	data: SparklineModel['dataSource']
	currentColor: string
	type: SparklineModel['type']
}

class SparkLine extends React.PureComponent<Required<SparkLineProps>> {
	render() {
		const { id, height, width, color, data, type, currentColor } = this.props

		return (
			<SparklineComponent
				id={id}
				height={height}
				width={width}
				lineWidth={1}
				valueType="Numeric"
				fill={color}
				border={{ color: currentColor, width: 2 }}
				tooltipSettings={{
					visible: true,
					// eslint-disable-next-line no-template-curly-in-string
					format: '${x} : data ${yval}',
					trackLineSettings: {
						visible: true,
					},
				}}
				markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
				dataSource={data}
				xName="x"
				yName="yval"
				type={type}
			>
				<Inject services={[SparklineTooltip]} />
			</SparklineComponent>
		)
	}
}

export default SparkLine
