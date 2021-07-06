import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class Favourite extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            favArray : []
        }
    }

    componentDidMount = async() => {
        const server = process.env.SERVER_URL;
        const favData = await axios.get(`${server}/getFav`);

        this.setState({
            favArray : favData.data
        })
    }

    deleteFav = async (id) => {
        const server = process.env.SERVER_URL;
        const newArray = await axios.delete(`${server}/deleteFav?id=${id}`);

        this.setState({
            favArray : newArray.data
        })
    }

    render() {
        return (
            <>
             <Row xs={1} md={1}>
             {this.state.favArray.map((item) =>(
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img}/>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Button variant="primary" onClick={() => this.deleteFav(item._id)}>Delete</Button>
                </Card.Body>
            </Card>
            ))}  
            </Row>
           
            </>
        )
    }
}

export default Favourite;