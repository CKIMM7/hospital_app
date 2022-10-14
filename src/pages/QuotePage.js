import { Switch, Route, useRouteMatch } from "react-router-dom";
import PrivateRoute from "../components/Auth/PrivateRoute";

import NewQuote from "../components/Quotes/newQuotes/NewQuotes";
import QuotesList from "../components/Quotes/quotes/QuotesList";

const QuotePage = () => {

    const { path } = useRouteMatch();
    console.log('quotepage')
    console.log(path)

    return (
      <Switch>
        <PrivateRoute exact path={`${path}`} component={QuotesList} />
        {/* <Route path={`${path}`} component={NewQuote} /> */}
        {/* <Route path={`${path}`} component={QuotesList} /> */}
      </Switch>
    )
};

export default QuotePage;