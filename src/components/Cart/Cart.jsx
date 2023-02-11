import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Center, VStack, HStack, Image, Text, Button } from "@chakra-ui/react";
import CheckOut from "../CheckOut/CheckOut";
export function Cart() {
  const { cartList, deleteItem, removeList, totalPrice } = useContext(CartContext);
  const render= () => { return cartList.map( product =>{ 
    return (
      <Center  > 
        <VStack>
          <HStack key={product.id} boxShadow="lg" p="6" rounded="md" spacing={10} bg="white" >
            <Image src={product.image} w="100px" /> 
            <Text as="b">Cantidad: {product.qty}</Text>
            <Text as="b">Producto: {product.title}</Text>
            <Text as="b">Precio: {product.price}</Text>
            <Button colorScheme="orange" onClick={()=>{deleteItem(product.id)}}>X</Button>
          </HStack>
        </VStack>
      </Center>      
    )})} 
  return (
    <>
      {render()}
    </>
  );
}
