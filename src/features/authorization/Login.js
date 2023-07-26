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
        params: { name: dataSubmit.name, password: dataSubmit.password },
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
      <Label htmlFor="name">{strings.screen.NameUser}</Label>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder={strings.screen.NameUser}
        {...register("name", { required: true })}
      />
      <Label htmlFor="name">{strings.screen.Password}</Label>
      <Input
        type="password"
        name="password"
        id="password"
        placeholder={strings.screen.Password}
        {...register("password", { required: true, minLength: 6 })}
      />

      {Object.keys(errors).length !== 0 && (
        <Ul>
          {errors.name?.type === "required" && (
            <Error>
              {strings.screen.NameUser + strings.screen.MessageIsRequired}
            </Error>
          )}
          {errors.password?.type === "required" && (
            <Error>
              {strings.screen.Password + strings.screen.MessageIsRequired}
            </Error>
          )}
          {errors.password?.type === "minLength" && (
            <Error>{strings.screen.MessageLenght}</Error>
          )}
        </Ul>
      )}

      <Button type="submit">{strings.screen.Login}</Button>
    </Form>
  );
}
