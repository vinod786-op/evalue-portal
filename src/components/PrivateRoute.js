// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// const PrivateRoute = ({ auth, element: Element, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (auth) return <element {...props} />;
//         if (!auth)
//           return (
//             <Navigate to={{ path: "/login", state: { from: props.location } }} />
//           );
//       }}
//     />
//   );
// };

// export default PrivateRoute;