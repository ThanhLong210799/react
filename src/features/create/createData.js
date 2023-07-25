import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import createDataSlice from "./createDataSlice";
import { Button, Form, Ul, Error, Label, Input } from "../../shared/styles";
import { strings } from "../../localization/Localization";

function CreateData() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataSubmit) => {
    // set data vào store
    dispatch(
      createDataSlice.actions.createData1({
        name: dataSubmit.name,
        origin: dataSubmit.origin,
      })
    );
    navigate("/Create2");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="name">{strings.screen.Name}</Label>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder={strings.screen.Name}
        {...register("name", { required: true })}
      />
      <Label htmlFor="name">{strings.screen.Origin}</Label>
      <Input
        type="text"
        name="text"
        id="origin"
        placeholder={strings.screen.Origin}
        {...register("origin", { required: true })}
      />
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
        </Ul>
      )}

      <Button type="submit">{strings.screen.NextPage}</Button>
    </Form>
  );
}

export default CreateData;
