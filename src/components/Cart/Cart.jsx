import { CartContext } from "../../context/CartContext";
<<<<<<< HEAD
import { useContext } from "react";
import { Center, VStack, HStack, Image, Text, Button } from "@chakra-ui/react";
import CheckOut from "../CheckOut/CheckOut";
=======
import { useContext, useEffect, useState } from "react";
import {
  Center,
  VStack,
  HStack,
  Image,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

>>>>>>> dev
export function Cart() {
  const [visible, setVisible] = useState(false);
  console.log(visible);
  const { cartList, deleteItem, removeList, totalPrice } =
    useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartList.length > 0) {
      setVisible(true);
    }
  }, [cartList]);

  const renderBody = () => {
    return cartList.map((product) => {
      return (
        <Center>
          <VStack>
            <HStack
              w="100vw"
              key={product.id}
              boxShadow="lg"
              p="6"
              rounded="md"
              spacing={10}
              bg="white"
            >
              <Image src={product.image} w="100px" />
              <Text as="b">Cantidad: {product.qty}</Text>
              <Text as="b">Producto: {product.title}</Text>
              <Text as="b">Precio: ${product.price}</Text>
              <Button
                colorScheme="orange"
                onClick={() => {
                  deleteItem(product.id);
                }}
              >
                X
              </Button>
            </HStack>
          </VStack>
        </Center>
      );
    });
  };

  const onCompra = () => {
    navigate("/compra");
  };

  const renderBtns = () => {
    return (
      <Box display="flex" justifyContent="space-evenly" alignItems="center">
        <Box>
          <Button
            hidden={!visible}
            colorScheme="orange"
            onClick={() => removeList()}
          >
            {" "}
            Borrar Todo{" "}
          </Button>
        </Box>
        <Box p="5" textStyle="h1" color="orange">
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
        <Box>
          <Button
            hidden={!visible}
            colorScheme="orange"
            onClick={() => {
              onCompra();
            }}
          >
            Comprar
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <div>
        {renderBody()}
        {renderBtns()}
      </div>
    </>
  );
}
