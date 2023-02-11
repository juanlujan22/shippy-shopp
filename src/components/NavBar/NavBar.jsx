import { Link, Heading, Grid, Box } from "@chakra-ui/react";
import { CartWidget } from "../CartWidget/CartWidget";
import Logo from "/logo.png"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Grid padding={"10px"} templateColumns={"repeat(3, 2fr)"} borderBottomRadius="30px"  background={"#FBC252"} h="fit" >
      <NavLink to="/">
        <Box display={"flex"} alignItems="center" justifyContent="center" flexWrap="wrap" >
          <img src={Logo} style={{height: "50px" }} alt={"logo"} />
          <Heading as='b' fontSize="2xl" p='4'> Shippy Shopp </Heading>
        </Box>
      </NavLink>
      <Box display={"flex"} alignItems="center" justifyContent="center" flexWrap="wrap" >
        <NavLink to="category/men's clothing">
          <Link p='4'> men's clothing </Link>
        </NavLink> 
        <NavLink to="category/women's clothing">
          <Link p='4'> women's clothing </Link>
        </NavLink> 
        <NavLink to="category/jewelery">
         <Link p='4'> jewelery </Link>
        </NavLink>
        <NavLink to="category/electronics">
         <Link p='4'> electronics </Link>
        </NavLink>
      </Box>
      <Box display={"flex"} justifyContent="center" >
        <CartWidget />
      </Box>
    </Grid>
  );
};
export default NavBar;