import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box as="footer" bg="gray.800" color="white" mt="auto" w="full" p={4}>
            <Flex justify="center" align="center">
                <Text>&copy; 2023 Ibooku</Text>
            </Flex>
        </Box>
    );
};

export default Footer;
