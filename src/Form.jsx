import { Container, Group, IconButton, Input, Text } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import { getUserData } from "./reciveData"
import { useState } from "react"



const Form = (props) => {

  const [input, setInput] = useState(null);

  const handleSetInput = (data) => setInput(data)

  const handleCallFetch = async (props) => {
    
    props.setUser({loading: true})

    if (input && input !== "") {
      props.setUser({userData: await getUserData(input), loading: false})
    }
  }
  return (
    <Container spaceY="3" centerContent gap={"0.5"}>
      <Text textStyle="6xl" fontWeight="bold">Git Search</Text>
      <Group attached>
        <Input w="xs" placeholder="Insert a github user name" onChange={(e) => {
          if(e.target.value !== ""){
            handleSetInput(e.target.value)
          }
        }} required/>
        <IconButton>
          <LuSearch onClick={() => handleCallFetch(props)} />
        </IconButton>
      </Group>
    </Container>
  )
}

export default Form
