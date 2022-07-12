import * as React from 'react';

const list = [
  {
    title: 'Book1',
    id: 1,
    pages: 250,
    cost: 800.0,
    site: 'mikybooks.com'
  },
  {
    title: 'Book2',
    id: 2,
    pages: 200,
    cost: 800.0,
    site: 'mikybooks.com'
  }
];

function App() {
  return (
    <div>
      <ul>
        {list.map(function (i) {
          return (
            <li id={i.id}>
              <span>{i.title}</span>
              <br />
              <span>{i.pages}</span>
              <br />
              <span>
                <a href={i.site}>{i.site}</a>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Search() {
  return (
    <span>
      <Title />
      <label htmlFor="search">search</label>
      <input id="search" type="text" />
    </span>
  );
}

function Title() {
  return <h1>Welcome To Micky Books</h1>;
}

function Main() {
  return (
    <div>
      <Search />
      <App />
    </div>
  );
}

export default Main;
