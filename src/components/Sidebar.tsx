import Link from 'next/link'
import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { SiShopware } from 'react-icons/si'

import { links } from '@/data/dummy'
import { useStateContext } from '@contexts/index'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import NavLink from './NavLink'

const Sidebar = () => {
	const { activeMenu, setActiveMenu, screenSize } = useStateContext()

	const handleCloseSideBar = () => {
		if (activeMenu && screenSize && screenSize <= 900) {
			setActiveMenu(false)
		}
	}

	const activeLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
	const normalLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

	return (
		<div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
			{activeMenu && (
				<>
					<div className="flex justify-between items-center">
						<Link href="/" passHref>
							<a
								onClick={handleCloseSideBar}
								className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
							>
								<SiShopware /> <span>Shoppy</span>
							</a>
						</Link>
						<TooltipComponent content="Menu" position="BottomCenter">
							<button
								type="button"
								onClick={() => {
									setActiveMenu((prev) => !prev)
								}}
								className="text-lx rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
							>
								<MdOutlineCancel />
							</button>
						</TooltipComponent>
					</div>
					<div className="mt-10">
						{links.map((category) => (
							<div key={category.title}>
								<p className="text-gray-400 m-3 mt-4 uppercase">
									{category.title}
								</p>
								{category.links.map((link) => (
									<NavLink
										key={link.name}
										href={`/${link.href}`}
										onClick={handleCloseSideBar}
										className={(isActive) =>
											isActive ? activeLink : normalLink
										}
									>
										{link.icon}
										<span className="capitalize">{link.name}</span>
									</NavLink>
								))}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	)
}

export default Sidebar
