import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';

class DigimonsCard extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.item.img} />
                    <Card.Body>
                        <Card.Title>{this.props.item.name}</Card.Title>
                        <Card.Text>
                            {this.props.item.level}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>this.props.AddToFav(this.props.item)}>Add To Fav</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default DigimonsCard
