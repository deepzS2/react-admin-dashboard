import React, { useContext, useState } from 'react'

type IsClickedItems = {
	chat: boolean
	cart: boolean
	userProfile: boolean
	notification: boolean
}

interface StateContextValues {
	isClicked: IsClickedItems
	activeMenu: boolean
	screenSize?: number
	handleClick: (clicked: keyof IsClickedItems) => void
	setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>
	setIsClicked: React.Dispatch<React.SetStateAction<IsClickedItems>>
	setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>
}

const initialState = {
	isClicked: {
		chat: false,
		cart: false,
		userProfile: false,
		notification: false,
	},
	activeMenu: true,
	setActiveMenu: () => null,
	setIsClicked: () => null,
	setScreenSize: () => null,
	handleClick: () => null,
}

const StateContext = React.createContext<StateContextValues>(initialState)

interface ContextProviderProps {
	children: React.ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [screenSize, setScreenSize] = useState<number>()
	const [activeMenu, setActiveMenu] = useState(initialState.activeMenu)
	const [isClicked, setIsClicked] = useState(initialState.isClicked)

	const handleClick = (clicked: keyof IsClickedItems) => {
		setIsClicked({ ...initialState.isClicked, [clicked]: true })
	}

	return (
		<StateContext.Provider
			value={{
				isClicked,
				setIsClicked,
				activeMenu,
				setActiveMenu,
				handleClick,
				screenSize,
				setScreenSize,
			}}
		>
			{children}
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext)
