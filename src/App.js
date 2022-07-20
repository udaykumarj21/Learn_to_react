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
  console.log('ResComps Initiated');
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
  return <UpdatedList myList={stories} />;
}

function List(props) {
  console.log('List Initiated');
  console.log(props.tempList);
  return (
    <div>
      <ul>
        {props.tempList.map(function (i) {
          console.log('I value' + i);
          return <ItemSorter key={i.key} item={i} />;
        })}
      </ul>
    </div>
  );
}

const ItemSorter = (props) => {
  console.log('ItemSorter Initiated');
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

function UpdatedList(props) {
  console.log('UpdatedList Initiated');
  const [str, setUpdatedStr] = React.useState('');

  const handlerConstant = (event) => {
    return setUpdatedStr(event.target.value);
  };
  const searchFiltereList = props.myList.filter((story) => {
    return story.title.toLowerCase().includes(str.toLowerCase());
  });
  return (
    <div>
      <Search onSearch={handlerConstant} />
      <List tempList={searchFiltereList} />
    </div>
  );
}
function Title() {
  console.log('Title Initiated');
  return <h1>Welcome To Micky Books</h1>;
}

function App() {
  console.log('App Initiated');
  return (
    <div>
      <ResComps />
    </div>
  );
}

//Handler Function in JSX

function Search(props) {
  console.log('Search Initiated');
  return (
    <span>
      <Title />
      <label htmlFor="search">search</label>
      <input id="search" type="text" onChange={props.onSearch} />
    </span>
  );
}

export default App;
