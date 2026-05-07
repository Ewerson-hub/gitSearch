import {Container, Group, IconButton, Input, Text} from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"

const Form = (props) => {
  return (
    <Container spaceY="3" centerContent gap={"0.5"}>
      <Text textStyle="6xl" fontWeight="bold">Git Search</Text>
      <Group attached>
        <Input w="xs" placeholder="Insert a github user name"/>
        <IconButton>
          <LuSearch/>
        </IconButton>
      </Group>
    </Container>
  )
}

export default Form
