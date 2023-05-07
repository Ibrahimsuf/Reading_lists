import React from 'react';
import Booklist from './Booklist';
import SearchBar from './SearchBar';  

function App() {
  const [data, setData] = React.useState(null);
  const [searchString, setSearchString] = React.useState('');
  const [bookList, setBookList] = React.useState([]);
  const handleData = (data) => {
    setBookList(data);
  }
  console.log(bookList)

  return (
    <div className="container mt-3">
      <SearchBar search_string={searchString} methodName1={handleData} />
      <hr/>
      {data ? <Booklist book_list={bookList.bookList} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;