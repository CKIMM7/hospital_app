import { useRouteMatch } from "react-router-dom";

import PromotionList from "../components/Promotions/PromotionList";

const Promotions = () => {
    const { path } = useRouteMatch()
    console.log(path)

    return (
        <section>
            <PromotionList />
        </section>
    )
};

export default Promotions;