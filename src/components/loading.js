import './loading.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Loading() {
    return <div className="loading-section">
        <span><FontAwesomeIcon icon="fas fa-spinner"/></span> Loading
    </div>;
}

export default Loading;
