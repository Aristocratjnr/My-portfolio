import { Box, Button, Container, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import * as React from 'react'

export default function Freelancer() {
    return (

        <Box id='freelance' as="section" >
            <Container py={{ base: '16', md: '24' }}>
                <Stack spacing={{ base: '8', md: '10' }}>
                    <Stack spacing={{ base: '4', md: '5' }} align="center">
                        <Heading size={useBreakpointValue({ base: 'sm', md: 'lg' })} color={'primary.800'}>Looking For Freelancer ?</Heading>
                        <Text color="gray.500" maxW="2xl" textAlign="center" fontSize="xl">
                        I have spent enough time on simple and complex full-fledged Projects. I have created apps, websites, scripts, and deployed admin panels and databases/backends on the cloud. I love taking on new challenges and working on experimental projects.
                            <br/>
                            
                        </Text>
                    </Stack>
                    <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify="center">

                        <Button variant={'primary'} size='lg' bg={'primary.700'}
                            href={'mailto:ayimobuobi@gmail.com'}
                            _hover={{
                                bg: 'primary.900',
                            }}>
                            Send an Email                        
                            </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}