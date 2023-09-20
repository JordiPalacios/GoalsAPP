import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { Context } from "../../services/memory";
import Details from "../new/details";

function PopUp() {
    const { id } = useParams();
    const [state, dispatch] = useContext(Context);

    return (  
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75">
            {JSON.stringify(state.objects[id])}
            <Details />
        </div>
    );
}

export default PopUp;