import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Item extends React.Component {
    render() {
        return (
            <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.item.strDrinkThumb}/>
                <Card.Body>
                    <Card.Title>{this.props.item.strDrink}</Card.Title>
                    <Button variant="primary" onClick={() => this.props.addToFav(this.props.idx)}>Add to Favourite</Button>
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default Item;