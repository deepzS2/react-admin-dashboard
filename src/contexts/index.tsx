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
	currentMode: 'Light' | 'Dark'
	currentColor: string
	themeSettings: boolean
	handleClick: (clicked: keyof IsClickedItems) => void
	setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>
	setIsClicked: React.Dispatch<React.SetStateAction<IsClickedItems>>
	setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>
	setColor: (color: string) => void
	setMode: (mode: 'Dark' | 'Light') => void
	setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>
}

const initialState = {
	isClicked: {
		chat: false,
		cart: false,
		userProfile: false,
		notification: false,
	},
	activeMenu: true,
	currentColor: '',
	currentMode: 'Light' as const,
	themeSettings: false,
	setActiveMenu: () => null,
	setIsClicked: () => null,
	setScreenSize: () => null,
	handleClick: () => null,
	setColor: () => null,
	setMode: () => null,
	setThemeSettings: () => null,
}

const StateContext = React.createContext<StateContextValues>(initialState)

interface ContextProviderProps {
	children: React.ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [screenSize, setScreenSize] = useState<number>()
	const [activeMenu, setActiveMenu] = useState(initialState.activeMenu)
	const [isClicked, setIsClicked] = useState(initialState.isClicked)
	const [currentColor, setCurrentColor] = useState('#03C9D7')
	const [currentMode, setCurrentMode] = useState<'Light' | 'Dark'>('Light')
	const [themeSettings, setThemeSettings] = useState(false)

	const setMode = (mode: 'Light' | 'Dark') => {
		setCurrentMode(mode)

		localStorage.setItem('themeMode', mode)

		setThemeSettings(false)
	}

	const setColor = (color: string) => {
		setCurrentColor(color)

		localStorage.setItem('colorMode', color)

		setThemeSettings(false)
	}

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
				currentColor,
				currentMode,
				setColor,
				setMode,
				setThemeSettings,
				themeSettings,
			}}
		>
			{children}
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext)
