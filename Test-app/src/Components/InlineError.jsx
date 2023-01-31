import styled from 'styled-components'

const Container = styled.p`
margin: 5px 0px;
color:red;
`

export default function InlineError({error}){
    return(
        <>
        <Container>{error}</Container>
        </>
    )
}