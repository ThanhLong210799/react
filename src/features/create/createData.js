import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import createSlice from "./Slice";
import { Button, Form, Ul, Error, Label, Input } from "../../shared/styles";
import { strings } from "../../localization/Localization";
import InPutCreate, {PrintErrors} from "../common/common";

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
      createSlice.actions.createData1({
        name: dataSubmit.name,
        origin: dataSubmit.origin,
      })
    );
    navigate("/Create2");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {InPutCreate("name", register, "" )}
      {InPutCreate("origin", register, "" )}
      {PrintErrors(errors)}
      <Button type="submit">{strings.screen.NextPage}</Button>
    </Form>
  );
}

export default CreateData;
