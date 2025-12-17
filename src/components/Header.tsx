import { Flex, TextInput } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Search } from 'lucide-react'
import { useState } from 'react'

export default function Header({ setSearchQuery }) {
	const isMobile = useMediaQuery('(max-width: 710px)')

	const icon = <Search size={20} />

	const [inputValue, setInputValue] = useState('')

	const handleInputChange = value => {
		setInputValue(value)
		if (setSearchQuery) {
			setSearchQuery(value)
		}
	}

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
				<div style={{ display: isMobile ? 'none' : 'block' }}>
					<h1 className='text-2xl font-bold'>Каталог</h1>
				</div>
				<TextInput
					leftSection={icon}
					variant='unstyled'
					placeholder='Поиск по товарам'
					radius='md'
					value={inputValue}
					onChange={event => handleInputChange(event.currentTarget.value)}
					// w='200px'
					w={isMobile ? '100%' : '200px'}
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
