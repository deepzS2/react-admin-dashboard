import React from 'react'

interface ButtonProps {
	bgColor: string
	color: string
	size?: string
	borderRadius: string
	text: string
}

const Button = ({
	bgColor,
	borderRadius,
	color,
	size = 'sm',
	text,
}: ButtonProps) => {
	return (
		<button
			type="button"
			style={{ backgroundColor: bgColor, color, borderRadius }}
			className={`text-${size} p-3 hover:drop-shadow-xl`}
		>
			{text}
		</button>
	)
}

export default Button
