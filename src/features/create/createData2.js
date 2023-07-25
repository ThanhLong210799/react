import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import createDataSlice from "./createDataSlice";
import { Button, Form, Label, Input, Ul, Error } from "../../shared/styles";
import { strings } from "../../localization/Localization";

function CreateData2() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataSubmit) => {
    dispatch(
      createDataSlice.actions.createData2({
        price: dataSubmit.price,
      })
    );
    navigate("/Confirm");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="name">{strings.screen.Price}</Label>
      <Input
        type="text"
        name="price"
        id="price"
        placeholder={strings.screen.Price}
        {...register("price", { required: true, pattern: /^\d*(\.\d+)?$/ })}
      />
      {Object.keys(errors).length !== 0 && (
        <Ul className="error-container">
          {errors.price?.type === "required" && (
            <Error>
              {strings.screen.Price + strings.screen.MessageIsRequired}
            </Error>
          )}
          {errors.price?.type === "pattern" && (
            <Error>{strings.screen.MessageErrorPrice}</Error>
          )}
        </Ul>
      )}

      <Button type="submit">{strings.screen.NextPage}</Button>
    </Form>
  );
}

export default CreateData2;
