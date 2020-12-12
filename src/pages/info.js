import './info.css';

import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Header from '../components/header';
import LoadError from '../components/loaderror';
import Loading from '../components/loading';

function Info(props) {
    const { id } = props.match.params;

    const PEOPLE = gql`
{
  person(id:"${id}"){
    name
    eyeColor
    hairColor
    skinColor
    birthYear
    vehicleConnection {
      vehicles {
        name
      }
    }
  }
}
`;
    const {error, data} = useQuery(PEOPLE);

    return (
        <React.Fragment>
            <Header backEnabled={true}  title={data? data.person.name: ""}/>
            {
                error?
                    <LoadError/>
                    :
                    data ?
                        <div className="content">
                            <ul className="item-list">
                                <li className="item-title">
                                    <div className="text">
                                        <p className="name">General Information</p>
                                    </div>
                                </li>

                                <li className="item-character">
                                    <div className="text">
                                        <p className="character">Eye Color</p>
                                    </div>
                                    <span className="value">
                                        {data.person.eyeColor}
                                    </span>
                                </li>
                                <div className="divider"/>

                                <li className="item-character">
                                    <div className="text">
                                        <p className="character">Hair Color</p>
                                    </div>
                                    <span className="value">
                                        {data.person.hairColor}
                                    </span>
                                </li>
                                <div className="divider"/>

                                <li className="item-character">
                                    <div className="text">
                                        <p className="character">Skin Color</p>
                                    </div>
                                    <span className="value">
                                        {data.person.skinColor}
                                    </span>
                                </li>
                                <div className="divider"/>

                                <li className="item-character">
                                    <div className="text">
                                        <p className="character">Birth Year</p>
                                    </div>
                                    <span className="value">
                                        {data.person.birthYear}
                                    </span>
                                </li>
                                <div className="divider"/>
                            </ul>

                            <ul className="item-list">
                                <li className="item-title">
                                    <div className="text">
                                        <p className="name">Vehicles</p>
                                    </div>
                                </li>

                                {
                                    data.person.vehicleConnection.vehicles.map((item, idx) => {
                                        return (
                                            <React.Fragment key={idx}>
                                                <li className="item">
                                                    <div className="text">
                                                        <p className="character">{item.name}</p>
                                                    </div>
                                                </li>
                                                <div className="divider"/>
                                            </React.Fragment>

                                        );
                                    })
                                }
                            </ul>

                        </div>
                        :
                        <Loading/>

            }
        </React.Fragment>
    );
}

export default Info;
