

import { soccerList } from "../util/SoccerList";
import SoccerItem from "./SoccerItem";
const SoccerStore = () => {
    return (
        <ul id="soccer-store">
            {soccerList.map((soccer) => (
                <SoccerItem soccer={soccer}/>
            ))}
        </ul>
    )
}

export default SoccerStore