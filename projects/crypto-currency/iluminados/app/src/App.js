import "./commons/global.css"
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./commons/constants/theme";
import { FormContainer } from "./components/LoginContainer";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/*<Btn variant="contained" color="primary">Button</Btn>*/}
        <FormContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
