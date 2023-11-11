import { VStack, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";
import Home from "../components/Home";
import Footer from "../components/Footer";  // Import the Home component


export default function Homepage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (
    <VStack w="full" >
      <Home />
      <Heading as="h2" size="3xl" mb={"32"}>
        Daftar Buku
      </Heading>
      {books?.books?.map((book) => (
        <Books key={`${book.id} ${book.title}`} {...book} />
      ))}
      <Footer mt={20} mb={4} />
    </VStack>
  );
}
