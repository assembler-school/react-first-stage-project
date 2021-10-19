import "./withLayout.scss";
import Header from "../components/Organisms/Header/Header"


function withLayout(WrappedComponent) {
  
  function WrapperComponent({ ...props }) {
    return (
      <>
        <Main>
          <Header/>
          <WrappedComponent {...props} />
        </Main>

      </>
    );
  }
  return WrapperComponent;
}

export default withLayout;
