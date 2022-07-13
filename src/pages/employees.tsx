import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'

import { employeesData, employeesGrid } from '@/data/dummy'
import { Header } from '@components'
import {
	ColumnsDirective,
	ColumnDirective,
	Page,
	Search,
	Inject,
	GridModel,
	GridTypecast,
	Toolbar,
} from '@syncfusion/ej2-react-grids'

const GridComponent = dynamic<(GridModel & { id: string }) | GridTypecast>(() =>
	import('@syncfusion/ej2-react-grids').then((res) => res.GridComponent)
)

const Employees: NextPage = () => {
	return (
		<div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="Page" title="Employees" />
			<GridComponent
				dataSource={employeesData}
				allowPaging
				allowSorting
				width="auto"
				toolbar={['Search']}
			>
				<ColumnsDirective>
					{employeesGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Search, Toolbar]} />
			</GridComponent>
		</div>
	)
}

export default Employees
