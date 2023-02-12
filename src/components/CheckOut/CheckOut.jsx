<<<<<<< HEAD
import {  useNavigate } from "react-router-dom";
import { Card, Image, Stack, CardBody, Button, Text, Heading } from "@chakra-ui/react";
import { useContext } from "react";

const CheckOut = () => {
    const {cartList}  = useContext(CartContext)

    const context = CartContext()
  return (
    <div>

    </div>
  )
}
export default CheckOut
=======
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  FormControl,
  FormLabel,
  Center,
  Input,
  Text,
  VStack,
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";

const CheckOut = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
  });

  const { cartList, totalPrice } = useContext(CartContext);
  console.log(cartList[0].title);
  function handleSubmit(e) {
    e.preventDefault();
    setVisible(true);
  }

  const handleClick = () => {
    VerticallyCenter();
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleCancel = () => {
    navigate("/cart");
  };

  const handleClose = ()=>{
    navigate("/");
  }
  const renderFormulario = () => {
    return (
      <VStack hidden={visible}>
        <Text color="black" fontSize="3xl">
          Para continuar con la compra, por favor brindanos tus datos
        </Text>
        <Center border="solid 0.5px black" p={10}>
          <FormControl>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Nombre Completo</FormLabel>
                <Input
                  value={input.name}
                  onChange={handleChange}
                  name="nombre"
                  placeholder="Nombre Completo"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Apellido</FormLabel>
                <Input
                  value={input.apellido}
                  onChange={handleChange}
                  name="apellido"
                  placeholder="Apellido"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Telefono</FormLabel>
                <Input
                  value={input.telefono}
                  type="number"
                  onChange={handleChange}
                  name="telefono"
                  placeholder="Telefono"
                />
              </FormControl>
              <Button m={10} colorScheme="orange" type="submit">
                Aceptar
              </Button>
              <Button
                m={10}
                colorScheme="orange"
                onClick={() => {
                  handleCancel();
                }}
              >
                Cancelar
              </Button>
            </form>
          </FormControl>
        </Center>
      </VStack>
    );
  };

  const renderTable = () => {
    return cartList.map((product) => {
      return (
        <Stack>
            <TableContainer key={product.id} p={10}>
            <Table variant="striped" colorScheme="yellow">
                <Thead>
                <Tr>
                    <Th>Producto</Th>
                    <Th>Cantidad</Th>
                    <Th>Precio</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>{product.title}</Td>
                    <Td>{product.qty}</Td>
                    <Td>{product.price}</Td>
                </Tr>
                </Tbody>
            </Table>
            </TableContainer>
        </Stack>
      );
    });
  };

  function VerticallyCenter() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Stack hidden={!visible}>
            <Box p="5" textStyle="h1" >
                <Text
                    p={3}
                    display="flex"
                    justifyContent="center"
                    border="solid 0.5px black"
                >
                    {" "}
                    Total Price: ${totalPrice()}
                </Text>
            </Box>
          <Button m={10} p={10} colorScheme="whatsapp" onClick={onOpen}>
            Finalizar Compra
          </Button>
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Datos de la Compra</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {" "}
                {cartList.map((prod) => {
                  return (
                    <Stack key={prod.id}>
                      <Text>Id: {prod.id}</Text>
                      <Text>Producto: {prod.title}</Text>
                      <Text>Cantidad: {prod.qty}</Text>
                      <Text>Precio: ${prod.price}</Text>
                      <Text color="green" fontSize="xl">
                        Estado: Compra Realizada
                      </Text>
                    </Stack>
                  );
                })}
              </ModalBody>
              <ModalFooter justifyContent="space-around">
                <Text>En breve nos pondremos en contacto</Text>
                
                <Button colorScheme="orange" onClick={(onClose, handleClose)}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Stack>
      </>
    );
  }

  return (
    <>
      {renderFormulario()}
      {renderTable()}
      {VerticallyCenter()}
    </>
  );
};
export default CheckOut;
>>>>>>> dev
