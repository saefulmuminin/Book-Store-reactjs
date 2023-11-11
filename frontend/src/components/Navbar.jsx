import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../modules/fetch";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogin, setIsLogin] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, [window.localStorage.getItem("token")]);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      w="full"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="transparent"
    >
      <Link to="/">
        <Flex align="center" mr={4} cursor="pointer">
          <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight="bold">
            Ibooku
          </Text>
        </Flex>
      </Link>
      <HStack display={{ base: "none", md: "flex" }}>
        {isLogin && (
          <Link to="/newbook">
            <Button colorScheme="blackAlpha">Create New Book</Button>
          </Link>
        )}
        {!isLogin ? (
          <Button
            onClick={onOpen}
            colorScheme="blue"
            w={{ base: "full", md: "auto" }} // Lebar tombol diatur menjadi "full" pada tampilan mobile dan "auto" pada tampilan desktop
            ml={{ base: 0, md: 2 }} // Margin-left diatur menjadi 0 pada tampilan mobile dan 2 pada tampilan desktop
          >
            Login
          </Button>
        ) : (
          <Button
            colorScheme="blue"
            onClick={() => {
              window.localStorage.removeItem("token");
              setIsLogin(false);
              navigate("/");
            }}
          >
            Logout
          </Button>
        )}
      </HStack>

      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        icon={<HamburgerIcon />}
        variant="ghost"
        colorScheme="blue"
        aria-label="Open menu"
      />

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Login</DrawerHeader>
          <DrawerBody>
            <form
              id="login-form"
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  const token = await loginUser(
                    e.target.email.value,
                    e.target.password.value
                  );
                  window.localStorage.setItem("token", token.token);
                  navigate("/");
                  onClose();
                } catch (err) {
                  toast({
                    title: "Error",
                    description: err.message,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                  });
                }
              }}
            >
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                    />
                    <InputRightElement>
                      <EmailIcon color="gray.300" />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                    />
                    <InputRightElement>
                      {showPassword ? (
                        <ViewOffIcon
                          color="gray.300"
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <ViewIcon
                          color="gray.300"
                          onClick={() => setShowPassword(true)}
                        />
                      )}
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button type="submit" colorScheme="blue">
                  Login
                </Button>
              </VStack>
            </form>
            <Link to="/register" onClick={onClose}>
              <Button variant="ghost" mt={4}>
                Doesn't Have Account? Click here
              </Button>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
