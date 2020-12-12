import React from 'react';
import Header from '../components/header';

import { useQuery, gql } from '@apollo/client';

import Loading from "../components/loading";
import ItemList from "../components/itemlist";
import LoadError from "../components/loaderror";

function Page(props){
    const {num} = props.match.params;

    const PEOPLE = gql`
{
  allPeople(first: ${num * 5}) {
    people {
      id
      name
      homeworld {
        name
      }
      species {
        name
        classification
      }      
    }
    totalCount
    pageInfo {
      hasNextPage
    }
  }
}
`;

    const {error, data} = useQuery(PEOPLE);

    return (
        <div className="container">
            <Header title={"People of Star Wars"} backEnabled={false}/>

            <div className="content">
                {
                    error ?
                        <LoadError/>:
                        ((!data && !error) ?
                            <Loading /> : <ItemList data={data.allPeople.people} nextPage={parseInt(num) + 1}/>)
                }


            </div>
        </div>
    );
}


export default Page;
