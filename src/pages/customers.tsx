import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'

import { customersData, customersGrid } from '@/data/dummy'
import { Header } from '@components'
import {
	ColumnsDirective,
	ColumnDirective,
	Page,
	Selection,
	Inject,
	Edit,
	Toolbar,
	Sort,
	Filter,
	GridModel,
	GridTypecast,
} from '@syncfusion/ej2-react-grids'

const GridComponent = dynamic<(GridModel & { id: string }) | GridTypecast>(() =>
	import('@syncfusion/ej2-react-grids').then((res) => res.GridComponent)
)

const Customers: NextPage = () => {
	return (
		<div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="Page" title="Customers" />
			<GridComponent
				dataSource={customersData}
				allowPaging
				allowSorting
				width="auto"
				toolbar={['Delete']}
				editSettings={{ allowDeleting: true, allowEditing: true }}
			>
				<ColumnsDirective>
					{customersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Selection, Edit, Sort, Filter, Toolbar]} />
			</GridComponent>
		</div>
	)
}

export default Customers
