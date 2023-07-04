import { ThemeToggleButton } from '@/features/theme-toggle'

type Props = {
	children: React.ReactNode
}

export const HomeLayout = ({ children }: Props) => {
	return (
		<main className={'h-full'}>
			<header className={'flex h-14 w-full items-center justify-end px-4'}>
				<ThemeToggleButton withLabel />
			</header>
			{children}
		</main>
	)
}
