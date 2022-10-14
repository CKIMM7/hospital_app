import { useParams, Route, Switch } from "react-router-dom"
import EnglishRouter from "./EnglishRouter";

const LanguageRouter = () => {
    const params = useParams();

    console.log(params)

    return(<div>
        <Switch>
          {params.lang === 'en' && <Route path='/en' exact>
            <EnglishRouter />  
          </Route>}
        </Switch>
    </div>)
}

export default LanguageRouter;