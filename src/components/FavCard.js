import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap/'

class FavCard extends Component {
    render() {
        return (
            <div>
                     <Card style={{ width: '18rem' }}key={this.props.idx}>
                    <Card.Img variant="top" src={this.props.item.img} />
                    <Card.Body>
                        <Card.Title>{this.props.item.name}</Card.Title>
                        <Card.Text>
                            {this.props.item.level}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>this.props.deleteFav(this.props.index)}>Delete</Button>
                        <Button variant="primary" onClick={()=>this.props.updateFav(this.props.index)}>Updata</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default FavCard
