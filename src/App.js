import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const topics = [
  {
    name: "React Router",
    id: "react-router",
    description: "Declarative, component based routing for React",
    resources: [
      {
        name: "URL Parameters",
        id: "url-parameters",
        description: "url Parameters Desciptoin",
        url: "https://react.com",
      },
      {
        name: "Programaticslly Navigate",
        id: "programmiticaly-navigate",
        description: "url Parameters Desciptoin",
        url: "https://react.com",
      },
    ],
  },
  {
    name: "React Js",
    id: "react-js",
    description: "A Javascript Library for building user interface",
    resources: [
      {
        name: "React Lifecycle Events",
        id: "react-lifecycle-events",
        description:
          "React lifecycle allows you to ahfhakdh akjshdakjdjkd lhaslkdjkaljd lkajsldkjaj dlaj d",
        url: "https://react.com",
      },
      {
        name: "React AHA Moments",
        id: "react-aha-moments",
        description:
          "React aha moments to ahfhakdh akjshdakjdjkd lhaslkdjkaljd lkajsldkjaj dlaj d",
        url: "https://react.com",
      },
    ],
  },
  {
    name: "Functiional Programming",
    id: "functional-programming",
    description:
      "In computer sience, functioncal programing is akjshdakjdjkd lhaslkdjkaljd lkajsldkjaj dlaj d",
    resources: [
      {
        name: "Imerative vs Decorative Programming",
        id: "imerative-decorative",
        description:
          "A guide to understanding the diffrence between imertative and decorative",
        url: "https://react.com",
      },
      {
        name: "Building Userinterface with pure functions and functiions composition",
        id: "fn-composition",
        description: "A guid to building Ui with pure funvyion  and function composotion",
        url: "https://react.com",
      },
    ],
  },
];

function Home() {
  return <h1>Home</h1>;
}

function Resource() {
  const { topicId, subId } = useParams();
  const topic = topics
    .find(({ id }) => id === topicId)
    .resources.find(({ id }) => id === subId);

  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <a href={topic.url}>More info</a>
    </div>
  );
}

function Topic() {
  const { topicId } = useParams();
  const { url, path } = useRouteMatch();

  const topic = topics.find(({ id }) => id === topicId);

  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <ul>
        {topic.resources.map((sub) => (
          <li key={sub.id}>
            <Link to={`${url}/${sub.id}`}>{sub.name}</Link>
          </li>
        ))}
      </ul>

      <Route path={`${path}/:subId`}>
        <Resource />
      </Route>
    </div>
  );
}

function Topics() {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Route path={`${path}/:topicId`}>
        <Topic />
      </Route>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Home</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
      </div>
    </Router>
  );
}

export default App;
