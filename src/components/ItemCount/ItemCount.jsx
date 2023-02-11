import { useState } from "react"
import { HStack, Button, Text } from "@chakra-ui/react";


export function  ItemCount ({stock, incial, onAdd}) {

   const [count, setCount]=useState(incial)
   
   

   const suma= ()=> count < stock && setCount(count+1) 

   const resta=()=> count > incial && setCount(count-1)

   
  return (
    <>
        <HStack >
            <Text> Cantidad:  {count} </Text> 
            <Button onClick={resta}> - </Button>
            <Button onClick={suma}> + </Button>
        </HStack>
        <Button onClick={()=> onAdd(count)}> Agregar al Carrito </Button>
        
    </>
  )
}
