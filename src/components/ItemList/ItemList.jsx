import { Heading } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import Item from "../Item/Item";

export function ItemList ({saludo, listaProductos}){
  return (
    <>
      <Grid>
        <Heading
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign={"center"}
        >
          {saludo}
        </Heading>
        <Grid
          justifyContent="center"
          templateRows={"repeat(1, 1fr)"}
          templateColumns={"repeat(4, 3fr)"}
          gap="3"
        >
          {listaProductos.map((producto) => {
            return (
              <Item
                key={producto.id}
                image={producto.image}
                titulo={producto.title}
                precio={producto.price}
                descripcion={producto.description}
                categoria={producto.category}
                id={producto.id}
              />
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

