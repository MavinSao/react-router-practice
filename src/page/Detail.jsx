import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'

function Detail() {
    let {id} =  useParams();
    return (
        <Container>
            Detail {id}
        </Container>
    )
}

export default Detail
