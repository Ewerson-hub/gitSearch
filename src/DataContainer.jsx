import { Container, Image, Link, Text, Card, Button, For, SimpleGrid, Grid, GridItem } from "@chakra-ui/react"

const user = {
    avatar: "https://avatars.githubusercontent.com/u/79768454?v=4",
    name: "Ewerson Lucas",
    repos: [
        { name: 'gitSearch', description: 'A simple app that consumes the github api and serves some data to the front-end ', link: 'https://github.com/Ewerson-hub/gitSearch' },
        { name: 'teste2', description: 'A CRUD app using node, handlebars and mysql with JWT authentication and bcrypto encryption. ', link: 'link2' },
        { name: 'teste3', description: 'descrition3', link: 'link3' },
        { name: 'teste4', description: 'descrition4', link: 'link4' },
        { name: 'teste5', description: 'descrition5', link: 'link5' }

    ],
    url: "https://api.github.com/users/Ewerson-hub",
    bio: "Desenvolvedor há 40 anos, Microsoft MVP, ativo contribuidor com o Stack Overflow em português. Engenheiro de formação, escovador de bit de coração."
}
const DataContainer = (props) => {
    return (
        <Container spaceY="20px" >
            <Grid>
                <GridItem justifySelf="center">
                    <Image  src={user.avatar} alt="user.avatar" borderRadius="full" boxSize="200px" fit="cover" />
                </GridItem>

                <Text textStyle="2xl" fontWeight={"bold"} >
                    {user.name}
                </Text>

                <Text opacity={"0.8"} textStyle="1xl" fontWeight={"light"} maxW={{base: "base",sm:"300px", md:"350px", lg:"500px"}}>
                    {user.bio}
                </Text>
                
                <Link textStyle="1xl" maxW={100} href={user.url} colorPalette="blue" fontWeight="medium" target="_blank">
                    Github link
                </Link>
            </Grid>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap="20px">
                <For each={user.repos}>
                    {(repo) => (
                        <Card.Root maxW="xs">
                            <Card.Body gap="2">
                                <Card.Title>{repo.name}</Card.Title>
                                <Card.Description>
                                    {repo.description}
                                </Card.Description>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="surface">
                                    <Link href={repo.link} target="_blank">
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

export default DataContainer
