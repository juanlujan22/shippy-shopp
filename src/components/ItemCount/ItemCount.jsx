import { useState } from "react";
import { HStack, Button, Text } from "@chakra-ui/react";

export function ItemCount({ stock, incial, onAdd }) {
  const [count, setCount] = useState(incial);

  const suma = () => count < stock && setCount(count + 1);

  const resta = () => count > incial && setCount(count - 1);

  return (
    <>
      <HStack alignItems="flex-end" justifyContent="space-evenly">
        <Text> Cantidad: {count} </Text>
        <Button colorScheme="orange" onClick={resta}>
          {" "}
          -{" "}
        </Button>
        <Button colorScheme="orange" onClick={suma}>
          {" "}
          +{" "}
        </Button>
      </HStack>
      <Button colorScheme="orange" onClick={() => onAdd(count)}>
        {" "}
        Agregar al Carrito{" "}
      </Button>
    </>
  );
}
