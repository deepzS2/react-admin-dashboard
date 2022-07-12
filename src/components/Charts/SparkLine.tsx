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

const SparkLine = ({
	id,
	height,
	width,
	color,
	data,
	type,
	currentColor,
}: Required<SparkLineProps>) => {
	return (
		<SparklineComponent
			id={id}
			height={height}
			width={width}
			lineWidth={1}
			valueType="Numeric"
			fill={color}
			border={{ color: currentColor, width: 2 }}
			dataSource={data}
			xName="x"
			yName="yval"
			type={type}
			tooltipSettings={{
				visible: true,
				format: '${x} : data ${yval}',
				trackLineSettings: {
					visible: true,
				},
			}}
		>
			<Inject services={[SparklineTooltip]} />
		</SparklineComponent>
	)
}

export default SparkLine
