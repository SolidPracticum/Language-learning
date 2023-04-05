import Header from "../../components/header/Header";
import Main from "../../components/main/Main";

function HomePage(): JSX.Element {
  return (
    <>
      <div>
        <Header isHeader={false} color={""} />
        <Main isMain={undefined} top={undefined} />
      </div>
    </>
  );
}

export default HomePage;
