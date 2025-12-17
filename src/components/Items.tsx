import { Flex } from '@mantine/core'
import ItemCard from './ItemCard'

export default function Items() {
	return (
		<Flex
			h='78dvh'
			bg='var(--bg-color)'
			mt='4dvh'
			className='rounded-xl p-8 text-[var(--text-color)]'
			wrap='wrap'
			gap='md'
		>
			<ItemCard />
		</Flex>
	)
}
