import React from 'react'

import { useStateContext } from '@contexts'
import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	AccumulationLegend,
	PieSeries,
	AccumulationDataLabel,
	Inject,
	AccumulationTooltip,
} from '@syncfusion/ej2-react-charts'

interface PieProps {
	id: string
	data: any[]
	legendVisibility: boolean
	height: string
}

const PieChart = ({ data, height, id, legendVisibility }: PieProps) => {
	const { currentMode } = useStateContext()

	return (
		<AccumulationChartComponent
			id={id}
			legendSettings={{ visible: legendVisibility, background: 'white' }}
			height={height}
			background={currentMode === 'Dark' ? '#33373E' : '#fff'}
			tooltip={{ enable: true }}
		>
			<Inject
				services={[
					AccumulationLegend,
					PieSeries,
					AccumulationDataLabel,
					AccumulationTooltip,
				]}
			/>
			<AccumulationSeriesCollectionDirective>
				<AccumulationSeriesDirective
					name="Sale"
					dataSource={data}
					xName="x"
					yName="y"
					innerRadius="40%"
					startAngle={0}
					endAngle={360}
					radius="70%"
					explode
					explodeOffset="10%"
					explodeIndex={2}
					dataLabel={{
						visible: true,
						name: 'text',
						position: 'Inside',
						font: {
							fontWeight: '600',
							color: '#fff',
						},
					}}
				/>
			</AccumulationSeriesCollectionDirective>
		</AccumulationChartComponent>
	)
}

export default PieChart
