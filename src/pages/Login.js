import { useFormik } from "formik"
import * as Yup from "yup"
import { Input, Button } from "@chakra-ui/react"
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control"
import { useContext } from "react"
import { UserContext } from "../contexts/IsLogged"
import { useNavigate } from "react-router-dom";


const Login = () => {

  const {setIsLogged, isLogged} = useContext(UserContext)
  let navigate = useNavigate(); 

  const formik = useFormik({
    initialValues: {
      username: "Benoit",
      password: "yoyoyoyo"
    },

    onSubmit: values => {
    setIsLogged(true)
    },

    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required("Username non renseigné")
        .max(15, "Username trop long"),
      password: Yup.string()
        .required("Password non renseigné")
        .min(6, "Password trop court")
    }),
    validateOnChange: false
  })

 const logout = () => {
   setIsLogged(false)
   console.log(isLogged);

 }



  return (
    <>
    {isLogged ? <button type="button" onClick={logout}>Logout</button>
    
    :
    <form onSubmit={formik.handleSubmit}>
      <FormControl id="username" w="300px" isInvalid={formik.errors.username}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
      </FormControl>

      <FormControl id="password" mt={5} w="300px" isInvalid={undefined}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
      </FormControl>

      <Button type="submit" colorScheme="teal" variant="solid" w="100%" mt={5} >
        Submit
      </Button>
      {navigate("/")}
    </form>
    
    }
    
    </>
  )


}

export default Login
