import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import createSlice from "./Slice";
import { Button, Form, Label, Input, Ul, Error } from "../../shared/styles";
import { strings } from "../../localization/Localization";
import InPutCreate, {PrintErrors} from "../common/Common";

function CreateData2() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataSubmit) => {
    // set data to store
    dispatch(
      createSlice.actions.createData2({
        price: dataSubmit.price,
      })
    );
    navigate("/Confirm");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {InPutCreate("price", register, /^\d*(\.\d+)?$/ )}
      {PrintErrors(errors)}
      <Button type="submit">{strings.screen.NextPage}</Button>
    </Form>
  );
}

export default CreateData2;
