import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface NavLinkProps {
	className(isActive: boolean): string
	href: string
	children: React.ReactNode
	onClick: React.MouseEventHandler<HTMLAnchorElement>
	style(isActive: boolean): React.CSSProperties
}

const NavLink = ({
	className,
	style,
	href,
	children,
	onClick,
}: NavLinkProps) => {
	const { pathname } = useRouter()

	return (
		<Link passHref href={href}>
			<a
				onClick={onClick}
				className={className(pathname === href)}
				style={style(pathname === href)}
			>
				{children}
			</a>
		</Link>
	)
}

export default NavLink
