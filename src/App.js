import Header from "./Components/Header"
import Home from "./Components/Home"
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Home/>
      </Container>

    </div>
  );
}

export default App;
