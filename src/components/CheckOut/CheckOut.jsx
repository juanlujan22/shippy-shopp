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
    TableCaption,
    TableContainer,
    FormControl,
    FormLabel,
    Center,
    Input,
    Text,
    VStack,
    Button,
    Box
  } from '@chakra-ui/react'
const CheckOut = () => {
    const navigate = useNavigate();
    const [visible, setVisible]=useState(false)
    const [input, setInput] = useState({
        nombre:"",
        apellido:"",
        telefono:"",
    })

    console.log(input)
    const {cartList}  = useContext(CartContext)
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log("submit")
        setVisible(true)
    } 

    const handleClick =()=>{
        navigate("/orden")
    }

    const handleChange= e=>{
        setInput({...input, 
        [e.target.name] : e.target.value})
    }
    const handleCancel =()=>{
        navigate("/cart")
    }
    const renderFormulario =()=>{
        return (
            <VStack hidden={visible}>
                <Text> Para continuar con la compra, por favor brindanos tus datos</Text>
                <Center border="solid 0.5px black" p={10}>
                <FormControl>
                    <form onSubmit={handleSubmit}>
                        <FormControl isRequired>
                        <FormLabel>Nombre Completo</FormLabel>
                        <Input value={input.name} onChange={handleChange} name="nombre" placeholder='Nombre Completo' />
                        </FormControl>
                        <FormControl isRequired>
                        <FormLabel>Apellido</FormLabel>
                        <Input value={input.apellido} onChange={handleChange} name="apellido" placeholder='Apellido' />
                        </FormControl>
                        <FormControl isRequired>
                        <FormLabel>Telefono</FormLabel>
                        <Input value={input.telefono} type="number" onChange={handleChange} name="telefono" placeholder='Telefono' />
                        </FormControl>
                        <Button type="submit" >Aceptar</Button>
                        <Button onClick={()=>{handleCancel()}} > Cancelar </Button>
                    </form>
                </FormControl>
                </Center>
            </VStack>
        )
    }


    const renderTable=()=>{
        return cartList.map((product) => {
        return (
        <TableContainer p={10}>
            <Table variant='striped' colorScheme='teal'>
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
            <Box display="flex" flexDirection="row-reverse" justifyContent="space-around" >
              <Button hidden={!visible} colorScheme="orange" onClick={()=>{handleClick()}} >Terminar la Comprar</Button>
            </Box>
        </TableContainer>
        );
        });
    };

  return (
    <div>
        {renderFormulario()}
        {renderTable()}
    </div>
  )
}
export default CheckOut 