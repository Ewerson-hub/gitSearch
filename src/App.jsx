import DataContainer from './DataContainer.jsx'
import Form from './Form.jsx'
import {Button, Group, HStack, Grid, GridItem} from "@chakra-ui/react"
import {useColorMode, ColorModeButton} from "./components/ui/color-mode"


const App = () => {
    const {toggleColorMode} = useColorMode();

    return ( 
        <Grid templateRows="repeat(3, 1fr)"  >
            <GridItem rowSpan={1} justifySelf="end">
                <ColorModeButton onClick={toggleColorMode}></ColorModeButton>
            </GridItem>
            <GridItem rowSpan={3} justifySelf="center">
                <Form />
            </GridItem>
            <GridItem justifySelf="center">
                 <DataContainer />
            </GridItem>
        </Grid>
    )
}
export default App