import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'

import { ordersData, contextMenuItems, ordersGrid } from '@/data/dummy'
import { Header } from '@components/index'
import {
	ColumnsDirective,
	ColumnDirective,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	PdfExport,
	Edit,
	Inject,
	GridModel,
	GridTypecast,
} from '@syncfusion/ej2-react-grids'

const GridComponent = dynamic<(GridModel & { id: string }) | GridTypecast>(() =>
	import('@syncfusion/ej2-react-grids').then((res) => res.GridComponent)
)

const Orders: NextPage = () => {
	return (
		<div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="Page" title="Orders" />
			<GridComponent
				id="gridcomp"
				dataSource={ordersData}
				allowPaging
				allowSorting
				contextMenuItems={contextMenuItems}
			>
				<ColumnsDirective>
					{ordersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject
					services={[
						Resize,
						Page,
						Sort,
						ContextMenu,
						Filter,
						ExcelExport,
						Edit,
						PdfExport,
					]}
				/>
			</GridComponent>
		</div>
	)
}

export default Orders
