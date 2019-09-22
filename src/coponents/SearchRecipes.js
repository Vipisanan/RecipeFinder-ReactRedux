import React, {Component} from "react";
import {Button, Form, FormControl, FormGroup} from "react-bootstrap";

class SearchRecipes extends Component{
    constructor(props){
        super(props);

        this.state={
            ingredients :'',
            dish:'',
        }
    }

    search() {
        const {ingredients , dish} = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}/?q=${dish}`;
        console.log(url);

        fetch(url, {
            method: 'GET'
        }).then(response => console.log(response))
          .then(json => console.log("recipes", json));
}
    render() {
        return(
            <Form className="container" inline>
                <FormGroup>
                    <Form.Label>Ingredients</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="chiken"
                        onChange={event=>this.setState({ingredients :event.target.value})}/>

                    <Form.Label>Dish</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="adobe"
                        onChange={event => this.setState({dish: event.target.value})}/>
                    <br/>
                        <Button onClick={()=>this.search()}>submit</Button>
                </FormGroup>

            </Form>
        );
    }
}
export default SearchRecipes;