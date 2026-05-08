import DataContainer from './DataContainer.jsx'
import Form from './Form.jsx'
import {Button, Group, HStack, Grid, GridItem} from "@chakra-ui/react"
import {useColorMode, ColorModeButton} from "./components/ui/color-mode"
import { useState } from 'react'


const App = () => {
    const {toggleColorMode} = useColorMode();

   const [userData, setUserData] = useState({userData: null, loading: null});

   const handleSetUserData = (data) => {
        setUserData(data)
   }

    return ( 
        <Grid templateRows="repeat(3, 1fr)" gap={"1.5"} >
            <GridItem rowSpan={1} justifySelf="end">
                <ColorModeButton onClick={toggleColorMode}></ColorModeButton>
            </GridItem>
            <GridItem rowSpan={3} justifySelf="center">
                <Form setUser={handleSetUserData}/>
            </GridItem>
            <GridItem justifySelf="center">
                <DataContainer data = {userData}/>
            </GridItem>
        </Grid>
    )
}
export default App