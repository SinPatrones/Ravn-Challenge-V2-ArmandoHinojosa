import '../Home.css';

import { useQuery, gql } from '@apollo/client';

import Loading from "../components/loading";
import ItemList from "../components/itemlist";
import LoadError from "../components/loaderror";
import Header from "../components/header";

const PEOPLE = gql`
{
  allPeople(first: 5) {
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

function Home() {
    const {error, data} = useQuery(PEOPLE);

    return (
        <div className="container">
            <Header title={"People of Star Wars"} backEnabled={false}/>

            <div className="content">
                {
                    error ?
                        <LoadError/>:
                        ((!data && !error) ?
                            <Loading /> : <ItemList data={data.allPeople.people} nextPage={2}/>)
                }

            </div>
        </div>
    );
}

export default Home;
