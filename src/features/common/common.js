import { Label, Input, Ul, Error } from "../../shared/styles";
import { strings } from "../../localization/Localization";
import { useState } from "react";

export const url = "http://localhost:8080/";
export const user = "user";
export const product = "product";
export const urlApi =
  "https://62b0161ee460b79df03c6dc5.mockapi.io/api/demo/Product";
export const error = "An error has occurred";
export const loading = "Loading...";

export default function InPutCreate(input, register, pattern) {
  const [type, setType] = useState("");
  const [text, setText] = useState(() => {
    if(input === "password"){
      setType("password")
    }else{
      setType("text")
    }
    switch (input) {
      case "name":
        return strings.screen.Name;
      case "origin":
        return strings.screen.Origin;
      case "price":
        return strings.screen.Price;
        case "userName":
          return strings.screen.UserName;
        case "password":
          return strings.screen.Password;
    }
  });

  return (
    <div>
      <Label htmlFor={input}>{text}</Label>
      <Input
        type={type}
        name={input}
        id={input}
        placeholder={text}
        {...register(input, { required: true, pattern: pattern })}
      ></Input>
    </div>
  );
}

export function PrintErrors(errors) {
  return (
    <div>
      {Object.keys(errors).length !== 0 && (
        <Ul className="error-container">
          {errors.name?.type === "required" && (
            <Error>
              {strings.screen.Name + strings.screen.MessageIsRequired}
            </Error>
          )}
          {errors.origin?.type === "required" && (
            <Error>
              {strings.screen.Origin + strings.screen.MessageIsRequired}
            </Error>
          )}
          {errors.price?.type === "required" && (
            <Error>
              {strings.screen.Price + strings.screen.MessageIsRequired}
            </Error>
          )}
          {errors.price?.type === "pattern" && (
            <Error>{strings.screen.MessageErrorPrice}</Error>
          )}
          {errors.userName?.type === "required" && (
            <Error>
              {strings.screen.NameUser + strings.screen.MessageIsRequired}
            </Error>
          )}
          {errors.password?.type === "required" && (
            <Error>
              {strings.screen.Password + strings.screen.MessageIsRequired}
            </Error>
          )}
        </Ul>
      )}
    </div>
  );
}

export function InPutConfirm(input, register, product) {
  const[data, setData] = useState("");
  const [text, setText] = useState(() => {
    switch (input) {
      case "name":
        setData(product.name)
        return strings.screen.Name;
      case "origin":
        setData(product.origin)
        return strings.screen.Origin;
      case "price":
        setData(product.price)
        return strings.screen.Price;
    }
  });

  return (
    <div>
      <Label htmlFor={input}>{text}</Label>
      <Input
        type="text"
        name={input}
        id={input}
        value={data}
        readOnly
        {...register(input)}
      />
    </div>
  );
}
