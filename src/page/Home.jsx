import React,{useState} from 'react'
import { Col,Container,Row } from 'react-bootstrap'
import Item from '../components/Item'

function Home() {
    const [items] = useState([
        {
            id:1,
            title: "Seven Deadly Sins",
            description: "Content",
            img: 'img/7deadly.jpeg'
            
        },
        {
            id:2,
            title: "Demon Slayer",
            description: "Content",
            img: 'img/demonslayer_frozen.jpeg'
            
        },
        {
            id:3,
            title: "Sword Art Online",
            description: "Content",
            img: 'img/Sword-Art-Online-Season-4.jpeg'
            
        },
        {
            id:4,
            title: "Seven Deadly Sins",
            description: "Content",
            img: 'img/7deadly.jpeg'
            
        },
        {
            id:5,
            title: "Jujutsu Kaisen",
            description: "Content",
            img: 'img/jujutsu-kaisen-15.jpeg'
            
        },
        {
            id:6,
            title: "One Punch",
            description: "Content",
            img: 'img/OnePunce.jpeg'
            
        }

    ])
    return (
        <Container>
            <Row>
                {items.map((item,idx)=>
                    <Col idx={idx} md={3} className="my-2">
                        <Item item={item} />
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default Home
