import "./App.scss";
import "unfonts.css";
import {
  Footer,
  Header,
  MovieInformations,
  SearchInput,
  TitlePresentation,
} from "./components";

function App() {
  return (
    <div className="container">
      <Header />
      <TitlePresentation />
      <SearchInput />
      <MovieInformations />
      <Footer />
    </div>
  );
}

export default App;
