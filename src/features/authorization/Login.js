import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { strings } from "../../localization/Localization";
import {
  Button,
  Form,
  Ul,
  Error,
  Label,
  Input,
  IMG,
} from "../../shared/styles";
import logo from "../../assets/Luvina.png";
import axios from "axios";
import { url, user } from "../common/common";
import InPutCreate, {PrintErrors} from "../common/common";

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataSubmit) => {
    axios
      .post(url + user, null, {
        params: { name: dataSubmit.userName, password: dataSubmit.password },
      })
      .then((response) => {
        if (response.data) {
          navigate("/List", { replace: true });
        } else {
          setError(strings.screen.MessageErrorLogin);
        }
      });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <IMG src={logo} className="App-logo" alt="logo" />
      {error !== "" && <Ul>{error}</Ul>}
      {InPutCreate("userName", register, "")}
      {InPutCreate("password", register, "")}
      {PrintErrors(errors)}
      <Button type="submit">{strings.screen.Login}</Button>
    </Form>
  );
}
