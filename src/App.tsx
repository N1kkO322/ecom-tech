import { Flex } from '@mantine/core'
import Header from './components/Header'
import Items from './components/Items'

function App() {
	return (
		<Flex p='4dvh' direction='column'>
			<Header />
			<Items />
		</Flex>
	)
}

export default App
