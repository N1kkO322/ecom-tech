import { Button, Flex, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useState } from 'react'

interface ModalContentProps {
	product: {
		id: number
		title: string
		price: number
		image: string
		description: string
	}
	closeModal: () => void
}

export default function ModalContent({
	product,
	closeModal,
}: ModalContentProps) {
	const [isPaid, setIsPaid] = useState(false)
	const isMobile = useMediaQuery('(max-width: 710px)')

	const handleClickBuy = () => {
		setIsPaid(true)
		setTimeout(() => {
			closeModal()
		}, 1000)
	}

	return (
		<Flex
			display='flex'
			direction={isMobile ? 'column' : 'row'}
			p='xl'
			gap='lg'
			w='100%'
		>
			<div style={{ width: isMobile ? '100%' : '60%' }}>
				<Image
					radius='xl'
					w='600px'
					h='100%'
					src={`/itemImages/${product.image}`}
				/>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-evenly',
					// alignItems: 'center',
					// textAlign: 'center',
					gap: '8px',
					width: isMobile ? '100%' : '40%',
				}}
			>
				<h2 style={{ fontWeight: '700', fontSize: '24px' }}>{product.title}</h2>
				<h1 style={{ fontSize: '24px', color: '#000' }}>{product.price} р.</h1>
				<div style={{ gap: '8px', display: 'flex', flexDirection: 'column' }}>
					<h4 style={{ color: '#838383', textDecoration: 'underline' }}>
						Описание
					</h4>
					<h3 style={{ color: '#838383' }}>{product.description}</h3>
				</div>

				<div style={{ width: '100%' }}>
					<Button
						w='100%'
						onClick={handleClickBuy}
						radius='lg'
						styles={{
							root: {
								backgroundColor: isPaid ? '#46d74c' : 'var(--text-color)',
								boxShadow: '#8b8b8b 0px 0px 5px 0px',
								transition: 'background-color .2s ease-in-out',
								':hover': 'var(--bg-secondary-color)',
								'&:focus': {
									border: 'transparent',
								},
							},
						}}
					>
						<h1>{isPaid ? 'Оплачено' : 'Купить'}</h1>
					</Button>
				</div>
			</div>
		</Flex>
	)
}
