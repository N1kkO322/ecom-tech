import { Flex } from '@mantine/core'
import { useState } from 'react'
import Header from './components/Header'
import Items from './components/Items'

function App() {
	const [searchQuery, setSearchQuery] = useState('')

	return (
		<Flex p='4dvh' direction='column'>
			<Header setSearchQuery={setSearchQuery} />
			<Items searchQuery={searchQuery} />
		</Flex>
	)
}

export default App
