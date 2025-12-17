import { Flex, Image, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import ModalContent from './ModalContent'

interface ItemCardProps {
	product: {
		id: number
		title: string
		price: number
		image: string
	}
}

export default function ItemCard({ product }: ItemCardProps) {
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<Modal
				opened={opened}
				padding='lg'
				centered
				radius='lg'
				size='xl'
				onClose={close}
				overlayProps={{
					backgroundOpacity: 0.55,
					blur: 3,
				}}
				title='Информация о товаре'
				styles={{
					title: {
						fontSize: '20px',
						fontWeight: 700,
						color: 'var(--text-color)',
					},
				}}
			>
				<ModalContent product={product} closeModal={close} />
			</Modal>
			<Flex
				display='flex'
				wrap='wrap'
				direction='column'
				align='center'
				justify='space-around'
				onClick={open}
				bg='#fff'
				w='260px'
				h='360px'
				p='lg'
				c='var(--text-color)'
				style={{
					borderRadius: '32px',
					boxShadow: '#c3c3c3 0px 0px 5px 0px',
					cursor: 'pointer',
				}}
			>
				<div>
					<Image
						radius='xl'
						w='100%'
						h='200px'
						src={`/itemImages/${product.image}`}
					/>
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignContent: 'center',
						textAlign: 'center',
						gap: '8px',
					}}
				>
					<h2 style={{ fontWeight: '700', fontSize: '20px' }}>
						{product.title}
					</h2>
					<h1 style={{ fontWeight: '700', fontSize: '20px' }}>
						{product.price} р.
					</h1>
				</div>
			</Flex>
		</>
	)
}
