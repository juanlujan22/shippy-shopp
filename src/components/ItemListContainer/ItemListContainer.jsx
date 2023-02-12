import { ItemList } from "../ItemList/ItemList";
import { Spinner, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../../DB/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export function ItemListContainer() {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "productos");
    const pedido = getDocs(productosCollection);

    pedido
      .then((snapshot) => {
        const productos = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
       
        if (category) {
          setListaProductos(
            productos.filter((producto) => producto.category === category)
          );
          setLoading(false);
        } else {
          setListaProductos(productos);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);
  return (
    <>
      {!loading ? (
        <ItemList
          listaProductos={listaProductos}
          saludo={"Bienvenido a Shippy!!"}
        />
      ) : (
        <Flex justifyContent={"center"} m="30px">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}
    </>
  );
}
