import React from "react";
import { useNavigate } from "react-router-dom";
import { strings } from "../../localization/Localization";
import { Button, Div } from "../../shared/styles";

export const url = "http://localhost:8080/";
export const user = "user";
export const product = "product";
export const urlApi = "https://62b0161ee460b79df03c6dc5.mockapi.io/api/demo/Product";

// export default function Common() {
//   const navigate = useNavigate();

//   const handleHome = () => {
//     navigate("/List");
//   };
//   const handlLogout = () => {
//     navigate("/");
//   };
//   return (

//     <Div>
//         <Button type="button" onClick={handleHome}>
//               {strings.screen.Home}
//         </Button>
//         <Button type="button" onClick={handlLogout}>
//               {strings.screen.Logout}
//         </Button>
//     </Div>
//   );
// }
