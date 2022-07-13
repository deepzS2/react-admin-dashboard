import Image from 'next/image'
import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiNotification3Line } from 'react-icons/ri'

import avatar from '@/data/avatar.jpg'
import { useStateContext } from '@contexts'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Cart, Chat, Notification, UserProfile } from '.'

interface NavButtonProps {
	title: string
	onClick: React.MouseEventHandler<HTMLButtonElement>
	icon: React.ReactNode
	color: React.CSSProperties['color']
	dotColor?: React.CSSProperties['color']
}

const NavButton = ({
	color,
	onClick,
	dotColor,
	icon,
	title,
}: NavButtonProps) => (
	<TooltipComponent content={title} position="BottomCenter">
		<button
			type="button"
			onClick={onClick}
			className="relative text-xl rounded-full p-3 hover:bg-light-gray"
			style={{ color }}
		>
			<span
				style={{ background: dotColor }}
				className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
			/>
			{icon}
		</button>
	</TooltipComponent>
)

const Navbar = () => {
	const {
		setActiveMenu,
		isClicked,
		handleClick,
		setScreenSize,
		screenSize,
		currentColor,
	} = useStateContext()

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth)

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [setScreenSize])

	useEffect(() => {
		if (!screenSize) return

		setActiveMenu(screenSize >= 900)
	}, [screenSize, setActiveMenu])

	return (
		<div className="flex justify-between p-2 md:mx-6 relative">
			<NavButton
				title="Menu"
				onClick={() => setActiveMenu((prev) => !prev)}
				color={currentColor}
				icon={<AiOutlineMenu />}
			/>

			<div className="flex">
				<NavButton
					title="Cart"
					onClick={() => handleClick('cart')}
					color={currentColor}
					icon={<FiShoppingCart />}
				/>
				<NavButton
					title="Chat"
					color={currentColor}
					onClick={() => handleClick('chat')}
					dotColor="#03C9D7"
					icon={<BsChatLeft />}
				/>
				<NavButton
					title="Notifications"
					color={currentColor}
					onClick={() => handleClick('notification')}
					dotColor="#03C9D7"
					icon={<RiNotification3Line />}
				/>
				<TooltipComponent content="Profile" position="BottomCenter">
					<div
						className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
						onClick={() => handleClick('userProfile')}
					>
						<div className="relative overflow-hidden rounded-full w-8 h-8">
							<Image src={avatar} layout="fill" alt="Avatar" />
						</div>
						<p>
							<span className="text-gray-400 text-14">Hi, </span>{' '}
							<span className="text-gray-400 font-bold ml-1 text-14">
								Michael
							</span>
						</p>
						<MdKeyboardArrowDown className="text-gray-400 text-14" />
					</div>
				</TooltipComponent>

				{isClicked.cart && <Cart />}
				{isClicked.chat && <Chat />}
				{isClicked.notification && <Notification />}
				{isClicked.userProfile && <UserProfile />}
			</div>
		</div>
	)
}

export default Navbar
