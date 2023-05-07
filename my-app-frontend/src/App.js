import React from 'react';
import Booklist from './Booklist';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.bookList));
  }, []);

  console.log(data)

  return (
    <div className="container">
      <h1>My Book List</h1>
      {data ? <Booklist book_list={data} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
