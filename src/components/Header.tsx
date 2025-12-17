import { Flex, TextInput } from '@mantine/core'
import { Search } from 'lucide-react'

export default function Header() {
	const icon = <Search size={20} />

	return (
		<Flex
			display='flex'
			align='center'
			bg='var(--bg-color)'
			mah='10dvh'
			className='
					rounded-xl 
					p-8
					text-[var(--text-color)]
					'
		>
			<Flex
				display='flex'
				justify='space-between'
				align='center'
				w='100%'
				h='100%'
			>
				<div>
					<h1 className='text-2xl font-bold'>Каталог</h1>
				</div>
				<TextInput
					leftSection={icon}
					variant='unstyled'
					placeholder='Поиск по товарам'
					radius='md'
					w='200px'
					styles={{
						input: {
							backgroundColor: '#f8fafc',
							boxShadow: '#8b8b8b 0px 0px 5px 0px',
							'&:focus': {
								border: 'transparent',
							},
						},
					}}
				/>
			</Flex>
		</Flex>
	)
}
