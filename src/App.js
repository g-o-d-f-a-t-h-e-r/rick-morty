import'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';



function App() {

  let [pageNumber, setPageNumber] = useState(1);

  let [search, setSearch] = useState("");


  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData;


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {

    (async function(){
      let data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })();

  }, [api]);



  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">Rick & Morty App</h1>

      <Search setPageNumber={setPageNumber} setSearch = {setSearch}/>

      <div className="container"> 
        <div className="row">
          <div className='col-12'>
            <div className="row d-flex justify-content-center">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>

    </div>
  );
}

export default App;
