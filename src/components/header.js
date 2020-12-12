import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { Link } from 'react-router-dom';

function Header(props){
    return (
        <div className="header">
            <span className="back">
            {
                props.backEnabled &&
                    <Link to="/">
                        <FontAwesomeIcon icon="arrow-left" className="back-icon"/>
                    </Link>
            }
            </span>
            <h4 className="title">
                {props.title}
            </h4>
            <span className="back"/>
        </div>
    );
}

export default Header;
