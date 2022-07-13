import React from 'react'

import {
	stackedCustomSeries,
	stackedPrimaryXAxis,
	stackedPrimaryYAxis,
} from '@/data/dummy'
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	StackingColumnSeries,
	Tooltip,
} from '@syncfusion/ej2-react-charts'

interface StackedProps {
	width?: string
	height?: string
}

const Stacked = ({ width, height }: StackedProps) => {
	return (
		<ChartComponent
			id="charts"
			primaryXAxis={stackedPrimaryXAxis}
			primaryYAxis={stackedPrimaryYAxis}
			width={width}
			height={height}
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
			legendSettings={{ background: 'white' }}
		>
			<Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
			<SeriesCollectionDirective>
				{stackedCustomSeries.map((item, index) => (
					<SeriesDirective key={index} {...item} />
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	)
}

export default Stacked
