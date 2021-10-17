import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header'
import Movie from './pages/Movie'
import Favorites from './pages/Favorites'
import Error from './pages/Error'
const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filmes/:id" component={Movie}/>
                <Route exact path="/favoritos" component={Favorites}/>
                <Route path="*" component={Error}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router