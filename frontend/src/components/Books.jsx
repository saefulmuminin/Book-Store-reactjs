import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function BookCard({ id, title, author, image, publisher, year }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{ transform: "scale(1.05)", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
    >
      <Link to={`/books/${id}`}>
        <Image
          src={`http://localhost:8000/${image}`}
          alt={title}
          height="200px"
          objectFit="cover"
        />
      </Link>
      <Box p="4">
        <VStack align="start">
          <Heading as="h2" size="md" mb="2" fontWeight="bold">
            Judul: {title}
          </Heading>
          <Text fontSize="sm" color="gray.500" mb="2">
            Pembuat: {author}
          </Text>
          <Text fontSize="sm" color="gray.500" mb="2">
            Publisher: {publisher}
          </Text>
          <Text fontSize="sm" color="gray.500">
            Tahun: ({year})
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
