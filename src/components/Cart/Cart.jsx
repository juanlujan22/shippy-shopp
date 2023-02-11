import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Center, VStack, HStack, Image, Text, Button, Box } from "@chakra-ui/react";
export function Cart() {
  const { cartList, deleteItem, removeList, totalPrice } = useContext(CartContext);
  const render= () => { return cartList.map( product =>{ 
    return (
      <Center  > 
        <VStack>
          <HStack w="100vw" key={product.id} boxShadow="lg" p="6" rounded="md" spacing={10} bg="white" >
            <Image src={product.image} w="100px" /> 
            <Text as="b">Cantidad: {product.qty}</Text>
            <Text as="b">Producto: {product.title}</Text>
            <Text as="b">Precio: ${product.price}</Text>
            <Button colorScheme="orange" onClick={()=>{deleteItem(product.id)}}>X</Button>
          </HStack>
        </VStack>
      </Center>      
    )})} 
    return (
      <>
      <div>
        {render()}
        <Box display="flex" justifyContent="space-evenly" alignItem="center" >
         <Box  p="5" textStyle='h1' color="orange" >
          <Text display="flex" justifyContent="center" border= "solid 0.5px black" > Total Price: ${totalPrice()}</Text>
         </Box>
          <Button  colorScheme="orange" onClick={()=>removeList()}> Borrar Todo </Button>
        </Box>
      </div>
      
    </>
  );
}
