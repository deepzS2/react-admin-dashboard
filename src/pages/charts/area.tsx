import { NextPage } from 'next'
import React from 'react'

import {
	areaCustomSeries,
	areaPrimaryYAxis,
	areaPrimaryXAxis,
} from '@/data/dummy'
import { ChartsHeader } from '@components'
import { useStateContext } from '@contexts'
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	SplineAreaSeries,
	DateTime,
	Legend,
} from '@syncfusion/ej2-react-charts'

const Area: NextPage = () => {
	const { currentMode } = useStateContext()

	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
			<ChartsHeader category="Area" title="Inflation Rate In Percentage" />

			<ChartComponent
				id="area-chart"
				height="420px"
				primaryXAxis={areaPrimaryXAxis}
				primaryYAxis={areaPrimaryYAxis}
				chartArea={{ border: { width: 0 } }}
				tooltip={{ enable: true }}
				background={currentMode === 'Dark' ? '#33373E' : '#fff'}
			>
				<Inject services={[DateTime, Legend, SplineAreaSeries]} />
				<SeriesCollectionDirective>
					{areaCustomSeries.map((item, index) => (
						<SeriesDirective key={index} {...item} />
					))}
				</SeriesCollectionDirective>
			</ChartComponent>
		</div>
	)
}

export default Area
