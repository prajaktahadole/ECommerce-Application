import React from 'react'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  ButtonGroup,
  Divider,
  Center,
  Icon,

} from '@chakra-ui/react';
import { SearchIcon} from '@chakra-ui/icons';
import { AiOutlineShoppingCart , AiOutlineSmile } from "react-icons/ai";
import {Link} from "react-router-dom"

function Navbar() {

  return (
    <>
      <Box  
      bg={'rgb(247,247,247)'} 
      px={8} alignItems={'center'} 
     >
       <Box margin={"auto"} textAlign={"center"}  >
       <Flex 
        width={"60%"} 
        margin={"auto"} 
        spacing={4}
        height={"80px"}>
          <IconButton
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack >
            <Link to="/">
                <Image  
                    width={"100px"}
                    height={"50px"}
                    objectFit='fit'
                    marginRight={"70px"}
                 src='https://www.pngitem.com/pimgs/m/161-1619330_logos-e-commerce-png-transparent-png.png' alt='logo' />
            </Link>
            
            <HStack bg={ 'rgb(255,255,255)'}
                  spacing={0}
                  borderRadius={"10px"}
                  border={"3px solid grey"}
                  fontSize={"larger"}>
                  <Center height='25px'>
                  <Divider orientation='vertical' />
                  </Center>
            <Input 
            height={"40px"} 
            width={"400px"}
            border={"1px solid white"}
            placeholder={"Search Products"}
            ></Input>

            <IconButton aria-label='Search database' icon={<SearchIcon />}
             height={"40px"} 
             width={"60px"}
             border={"1px solid white"} />
            </HStack>

            </HStack>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>  
            </HStack>
          </HStack>

        </Flex>

        <Flex width={"80%"} 
            margin={"auto"} 
            variant='link' 
            justifyContent={"space-between"}
            fontWeight={'bold'}
           >
      
             <HStack paddingBottom={"20px"} spacing={10} align='center'>
              < Link to="/" >ALL</Link>
              < Link to="/mens">MEN</Link >
              < Link to="/women">WOMEN</Link >
              < Link to="" >NEW ARRIVALS</Link > 
             </HStack>
           

             <HStack paddingBottom={"20px"}>
              <ButtonGroup spacing={10} align='center'>
          
             <Link to="/offer" >Offers</Link>
             < ButtonGroup >
              <Icon as={AiOutlineSmile}   w={5} h={6}></Icon>
              < Link  to="/login" >Login/Signup</Link>
              </ButtonGroup >
              <ButtonGroup display={"flex"}>
                < Icon as={AiOutlineShoppingCart} w={6} h={6}></Icon>
                < Link  to="/cart" >Cart</Link>
              </ButtonGroup>
              
              </ButtonGroup>
             </HStack>
        </Flex>

       </Box>

      
      </Box>

    </>
  )
}

export default Navbar
