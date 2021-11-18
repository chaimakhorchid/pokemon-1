import { Link } from "react-router-dom"
import { Flex, Button } from "@chakra-ui/react"

const Nav = () => {
  return (
    <Flex justifyContent="flex-end" p={5} position="fixed" width="100%">
      <Link to="/">
        <Button colorScheme="teal" variant="ghost">
          Home
        </Button>
      </Link>
      <Link to="/login">
        <Button colorScheme="teal" variant="ghost" ml={5}>
          Login
        </Button>
      </Link>
    </Flex>
  )
}

export default Nav