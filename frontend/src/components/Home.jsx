import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';

const Hero = () => {
    return (
        <Box py={'16'}>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                align="center"
                justify="space-between"
                px={{ base: 4, md: 8, lg: 16 }}
            >
                {/* Left Section - Text Content */}
                <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
                    <Heading as="h1" size="xl" mb={4}>
                        Your Catchy Title
                    </Heading>
                    <Text
                        fontSize="lg"
                        color={useColorModeValue('gray.600', 'gray.400')}
                        mb={6}
                    >
                        A brief description of your awesome content. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.
                    </Text>
                    <Flex justify="center"> {/* Center the button */}
                        <Button colorScheme="blue" width="200px">
                            Get Started
                        </Button>
                    </Flex>
                </Box>

                {/* Right Section - Image */}
                <Flex
                    flex="1"
                    justify={{ base: 'center', md: 'flex-end' }}
                    mt={{ base: 8, md: 0 }}
                >
                    <Image
                        src="https://img.freepik.com/free-photo/young-man-studying-bible-library-solitude-generated-by-ai_188544-54245.jpg?t=st=1699717172~exp=1699720772~hmac=032c59f00cf44fe1af29a59394039d87b93f970fecf9dbb14bf4e7629f6d69d5&w=826"
                        alt="Hero Image"
                        maxW="100%"
                        borderRadius="md"
                        boxShadow="lg"
                    />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Hero;
