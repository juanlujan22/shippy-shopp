import { Card, Image, Stack, CardBody, Flex, Button, Text, Heading } from "@chakra-ui/react";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import {  NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function ItemDetail({ item }) {
  const [added, setAdded]= useState(false)
  const {addToCart}=useContext(CartContext)

 const onAdd= (qty)=>{
    addToCart(item, qty)
    setAdded(true)
  }
 

  return (
    <>
    <Flex>
      <Card
        flexDirection="row"
        overflow="hidden"
        variant="outline"
        m="10"
        backgroundColor="#F0ECCF"
        boxShadow='2xl'
      >
        <Image
          pl="3"
          borderRadius="lg"
          objectFit="fill"
          maxW={{ base: "100%", sm: "200px" }}
          src={item.image}
          alt={item.title}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{item.title}</Heading>

            <Text py="2">
              {item.description}
            </Text>
            <Text color="blue.600" fontSize="2xl">
               $ {item.price}
            </Text>
          </CardBody>
          {
            added  
            ?
            <NavLink to="/cart"> 
              <Button>Ir al Carrito</Button>
            </NavLink>
            :
            <Stack pl="6" flexDirection="row" > 
              <ItemCount stock={10} incial={1} onAdd={onAdd} /> 
            </Stack>
          }
        </Stack>
      </Card>
    </Flex>
    </>
  );
}
