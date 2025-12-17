import { Flex, Image, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import pic from './../../public/itemImages/airpods.jpg'
import ModalContent from './ModalContent'

export default function ItemCard() {
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
				<ModalContent closeModal={close} />
			</Modal>
			<Flex
				display='flex'
				wrap='wrap'
				direction='column'
				align='center'
				justify='space-around'
				onClick={open}
				bg='#fff'
				w='240px'
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
					<Image radius='xl' w='100%' h='200px' src={pic} />
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
						Air Pods Pro 3
					</h2>
					<h1 style={{ fontWeight: '700', fontSize: '20px' }}>22 000 р.</h1>
				</div>
			</Flex>
		</>
	)
}
