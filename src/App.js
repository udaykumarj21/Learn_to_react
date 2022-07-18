import { isArguments } from 'lodash';
import * as React from 'react';
//Made this block scoped in App component
// const list = [
//   {
//     title: 'Book1',
//     id: 1,
//     pages: 250,
//     cost: 800.0,
//     site: 'mikybooks.com'
//   },
//   {
//     title: 'Book2',
//     id: 2,
//     pages: 200,
//     cost: 800.0,
//     site: 'mikybooks.com'
//   }
// ];

function ResComps() {
  const stories = [
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
  return <List myList={stories} />;
}

function List(props) {
  return (
    <div>
      <ul>
        {props.myList.map(function (i) {
          return <ItemSorter key={i.key} item={i} />;
        })}
      </ul>
    </div>
  );
}

const ItemSorter = (props) => {
  const item = props.item;
  return (
    <ul>
      <li key={props.key}>
        {item.title} <br />
        {item.pages}
        <br />
        <a href={item.site}>{item.site}</a>
      </li>
    </ul>
  );
};

// function Search() {
//   return (
//     <span>
//       <Title />
//       <label htmlFor="search">search</label>
//       <input id="search" type="text" />
//     </span>
//   );
// }

function Title() {
  return <h1>Welcome To Micky Books</h1>;
}

function App() {
  return (
    <div>
      <Search />
      <ResComps />
    </div>
  );
}

//Handler Function in JSX

function Search() {
  let temp = '';
  const [str, setUpdatedStr] = React.useState(temp);

  const hadlerConstant = (event) => {
    setUpdatedStr(event.target.value);
  };
  console.log(str);
  return (
    <span>
      <Title />
      <label htmlFor="search">search</label>
      <input id="search" type="text" onChange={hadlerConstant} />
      <p>Searching for: {str}</p>
    </span>
  );
}

export default App;
