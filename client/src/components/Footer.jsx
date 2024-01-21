import {
	Button,
	ButtonGroup,
	Container,
	Divider,
	IconButton,
	Input,
	Stack,
	Text,
	useColorMode as mode,
	Box,
	Flex,
	Icon,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { BsPhoneFlip } from 'react-icons/bs';

const Footer = () => (
	<Box width='100%' bg={mode('cyan.300', 'gray.300')}>
		<Container as='footer' maxW='7xl'>
			<Stack
				spacing='8'
				direction={{ base: 'column', md: 'row' }}
				justify='space-between'
				py={{ base: '12', md: '16' }}
			></Stack>
		</Container>
	</Box>
);

export default Footer;
