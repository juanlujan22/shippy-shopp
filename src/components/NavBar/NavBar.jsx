import { Heading, Grid, Box } from "@chakra-ui/react";
import { CartWidget } from "../CartWidget/CartWidget";
import Logo from "/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Grid
      padding={"10px"}
      templateColumns={"repeat(3, 2fr)"}
      borderBottomRadius="30px"
      background={"#FBC252"}
      h="fit"
    >
      <Link to="/">
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          <img src={Logo} style={{ height: "50px" }} alt={"logo"} />
          <Heading as="b" fontSize="2xl" p="4">
            {" "}
            Shippy Shopp{" "}
          </Heading>
        </Box>
      </Link>
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Box m="5px">
          <Link to="category/men's clothing">men's clothing</Link>
        </Box>
        <Box m="5px">
          <Link to="category/women's clothing">women's clothing</Link>
        </Box>
        <Box m="5px">
          <Link to="category/jewelery">jewelery</Link>
        </Box>
        <Box m="5px">
          <Link to="category/electronics">electronics</Link>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent="center">
        <CartWidget />
      </Box>
    </Grid>
  );
};
export default NavBar;
