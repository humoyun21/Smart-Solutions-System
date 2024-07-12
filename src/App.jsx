import Header from "@component/header";
import Footer from "@component/footer";
import { Main } from "@containers";
import { Intro, SecondSection, ThridSection, Fourth } from "@sections";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Intro />

        <Fourth />
      </Main>
      <Footer />
    </>
  );
};

export default App;
