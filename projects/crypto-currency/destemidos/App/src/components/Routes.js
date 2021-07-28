// import React from "react";
// import ReactDOM from "react-dom";
// import { 
//   BrowserRouter, 
//   Route, 
//   Switch 
// } from "react-router-dom";

// import SignUp from "./Pages/SignUp";
// import SignIn from "./Pages/SignIn";


// const Routes = () => (
//   <BrowserRouter>
//     <Switch>
//       <Route exact path="/SignUp" component={SignIn} />
//       <Route path="/" component={SignUp} />
//       <Route path="*" component={() => <h1>Page not found</h1>} />
//     </Switch>
//   </BrowserRouter>
// );

// export default Routes;
import React from "react";
import { 
  Routes, 
  Route,
} from "react-router-dom";

import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}