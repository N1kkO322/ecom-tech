import { Flex, ScrollArea } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ItemCard from './ItemCard'

export default function Items({ searchQuery = '' }) {
	const [products, setProducts] = useState([])
	const [searchProducts, setSearchProducts] = useState([])

	const isMobile = useMediaQuery('(max-width: 710px)')
	const isTablet = useMediaQuery('(max-width: 1010px)')

	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_API_BASE_URL}/items`)
			.then(response => {
				setProducts(response.data)
				setSearchProducts(response.data)
			})
			.catch(error => {
				console.log(error)
			})
	}, [])

	useEffect(() => {
		const searchLower = searchQuery.toLowerCase()

		const filtered = products.filter(product =>
			product.title.toLowerCase().includes(searchLower)
		)

		setSearchProducts(filtered)
	}, [searchQuery, products])

	return (
		<Flex
			h='78dvh'
			bg='var(--bg-color)'
			mt='4dvh'
			className='rounded-xl p-8 text-[var(--text-color)]'
			wrap='wrap'
		>
			<ScrollArea
				h='100%'
				type='auto'
				styles={{
					root: {
						height: '100%',
						borderRadius: '32px',
					},
					viewport: {
						'& > div': {
							display: 'block !important',
						},
					},
					scrollbar: {
						display: 'none',
					},
				}}
			>
				{searchProducts.length === 0 ? (
					<Flex
						display='flex'
						p='8px'
						m='auto'
						justify={
							isMobile ? 'center' : isTablet ? 'space-around' : 'space-between'
						}
						style={{ textAlign: 'center' }}
					>
						<h1 style={{ fontSize: '36px', fontWeight: '700' }}>
							По вашему запросу ничего не найдено
						</h1>
					</Flex>
				) : (
					<Flex
						wrap='wrap'
						gap='40px'
						display='flex'
						justify={
							isMobile ? 'center' : isTablet ? 'space-around' : 'space-between'
						}
						style={{ minHeight: '100%' }}
					>
						{searchProducts.map(product => (
							<ItemCard key={product.id} product={product} />
						))}
					</Flex>
				)}
			</ScrollArea>
		</Flex>
	)
}
