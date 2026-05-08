import { Container, Image, Link, Text, Card, Button, For, SimpleGrid, Grid, GridItem, VStack, Spinner } from "@chakra-ui/react"



const DataContainer = (props) => {
    if (props.data.loading === null) return <></>

    if (props.data.loading === true) {
        return <VStack>
            <Spinner />
        </VStack>
    } else {
        return (
            <Container spaceY="20px" >
                <Grid>
                    <GridItem justifySelf="center">
                        <Image src={props.data.userData.avatar} alt="user.avatar" borderRadius="full" boxSize="200px" fit="cover" />
                    </GridItem>

                    <Text textStyle="2xl" fontWeight={"bold"} >
                        {props.data.userData.name}
                    </Text>

                    <Text opacity={"0.8"} textStyle="1xl" fontWeight={"light"} maxW={{ base: "base", sm: "300px", md: "350px", lg: "500px" }}>
                        {(props.data.userData.bio) ? props.data.userData.bio : ""}
                    </Text>

                    <Link textStyle="1xl" maxW={100} href={props.data.userData.github_link} colorPalette="blue" fontWeight="medium" target="_blank">
                        Github link
                    </Link>
                </Grid>

                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap="20px">
                    <For each={props.data.userData.repos}>
                        {(repo, id) => (
                            <Card.Root maxW="xs" key={id}>
                                <Card.Body gap="2">
                                    <Card.Title>{repo.name}</Card.Title>
                                    <Card.Description>
                                        {repo.description}
                                    </Card.Description>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="surface">
                                        <Link href={repo.url} target="_blank">
                                            Source Code
                                        </Link>
                                    </Button>
                                </Card.Footer>
                            </Card.Root>
                        )}
                    </For>
                </SimpleGrid>
            </Container>
        )

    }




}

export default DataContainer
