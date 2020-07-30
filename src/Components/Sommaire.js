import React, { Component } from 'react';
import {Card, ListGroup } from 'react-bootstrap';
import covid from './covid.jpg'
export default class Sommaire extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        
        fetch('https://api.covid19api.com/summary')
            .then(res => res.json())
            .then(json => (
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            ));
        console.log(this.state.items)       
    }

    render() {
       if(!this.state.isLoaded) {
           return(
               <div>Loading...</div>
           )
       } else {
           return(
            <div style={{"padding":"40px"}} >   
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={covid} />
                <Card.Body>
                
                <Card.Text>
                <ListGroup variant="flush">
                    <ListGroup.Item variant="info">Info Covid World Update</ListGroup.Item>
                    <ListGroup.Item variant="light"></ListGroup.Item> 
                    <ListGroup.Item variant="warning">New Confirmed : {this.state.items.Global.NewConfirmed}</ListGroup.Item>
                    <ListGroup.Item variant="warning">Total Confirmed : {this.state.items.Global.TotalConfirmed}</ListGroup.Item>
                    <ListGroup.Item variant="danger">New Deaths : {this.state.items.Global.NewDeaths}</ListGroup.Item>
                    <ListGroup.Item variant="danger">Total Deaths : {this.state.items.Global.TotalDeaths}</ListGroup.Item>
                    <ListGroup.Item variant="success">New Recovered : {this.state.items.Global.NewRecovered}</ListGroup.Item>
                    <ListGroup.Item variant="success">Total Recovered : {this.state.items.Global.TotalRecovered}</ListGroup.Item>
                </ListGroup>  
                </Card.Text>
                    </Card.Body>
                </Card>
            </div>
           )
       }
    }
}