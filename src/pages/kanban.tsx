import { NextPage } from 'next'
import React from 'react'

import { kanbanData, kanbanGrid } from '@/data/dummy'
import { Header } from '@components'
import {
	KanbanComponent,
	ColumnsDirective,
	ColumnDirective,
} from '@syncfusion/ej2-react-kanban'

const Kanban: NextPage = () => {
	return (
		<div className="m-2 md:m-10 mt-25 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="App" title="Kanban" />
			<KanbanComponent
				id="kanban"
				dataSource={kanbanData}
				cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
				keyField="Status"
			>
				<ColumnsDirective>
					{kanbanGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
			</KanbanComponent>
		</div>
	)
}

export default Kanban
