import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchRecipes from "./SearchRecipes";
class App extends Component{
    render() {
        return(
            <div>
                <h2 className="container text-center">Recipes Finder</h2>

                <SearchRecipes></SearchRecipes>
            </div>
        );
    }
}
export default App;