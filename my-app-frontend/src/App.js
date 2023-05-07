import React from 'react';
import Booklist from './Booklist';
import SearchBar from './SearchBar';

function App() {
  const [data, setData] = React.useState(null);
  const [searchString, setSearchString] = React.useState('');
  const handleSearch = (searchString) => {
    setSearchString(searchString);
  }
  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.bookList));
  }, []);

  console.log(searchString)
  return (
    <div className="container mt-3">
      <SearchBar search_string={searchString} methodName1={handleSearch} />
      <hr/>
      {data ? <Booklist book_list={data} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
