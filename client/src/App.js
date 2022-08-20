import React from "react";
import { Container } from "react-bootstrap";
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Import Pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MyPbs from "./pages/MyPbs";
import MyWorkoutplans from "./pages/MyWorkoutplans";
import MentalHealth from "./pages/MentalHealth";
import PhysicalBenefits from "./pages/PhysicalBenefits";
//Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <main>
            <Container>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/workoutplans" component={MyWorkoutplans} />
              <Route exact path="/fitnesshighscores" component={MyPbs} />
              <Route exact path="/mentalhealth" component={MentalHealth} />
              <Route
                exact path="/physicalbenefits" component={PhysicalBenefits} />
            </Container>
          </main>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
