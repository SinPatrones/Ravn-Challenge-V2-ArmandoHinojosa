import './itemlist.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ItemList(props) {
    let dataPeople = props.data;

    return (
        <ul className="item-list">
            {
                dataPeople.map((item, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            <Link to={"/info/" + item.id} >
                                <li className="item">
                                    <div className="text">
                                        <p className="name">{item.name}</p>
                                        <p className="position">{item.species? item.species.name: "Human"} from {item.homeworld.name}</p>
                                    </div>
                                    <span className="right-arrow">
                                     <FontAwesomeIcon icon="angle-right"/>
                                </span>
                                </li>
                            </Link>
                            <div className="divider"/>
                        </React.Fragment>
                    );
                })
            }
            <div className="load-more">
                <Link to={"/page/" + (props.nextPage)} className="btn-load-more">MORE...</Link>
            </div>
        </ul>
    );
}

export default ItemList;
