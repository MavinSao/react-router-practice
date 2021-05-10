import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

function Item({ item }) {
    return (
        <Card>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Button variant="light" as={Link} to={`detail/${item.id}`}>Read</Button>
            </Card.Body>
        </Card>
    )
}

export default Item
