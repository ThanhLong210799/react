import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { productRemainingSelector } from "../../redux/selectors";
import { useCreateProductMutation } from "../../services/api";
import { Button, Form, Label, Input } from "../../shared/styles";
import { strings } from "../../localization/Localization";
import { loading, InPutConfirm } from "../common/common";

function Confirm() {
  //   lấy ra các giá trị trong store
  const product = useSelector(productRemainingSelector);

  const [createProduct, createProductResult] = useCreateProductMutation();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (dataSubmit) => {
    if (
      dataSubmit.name !== "" ||
      dataSubmit.origin !== "" ||
      dataSubmit.price !== ""
    ) {
      console.log("aaaaaaaa")
      createProduct(dataSubmit);
      console.log("bbbbbbbb")
      navigate("/List");
      console.log("ccccccccccc")
    } else {
      alert(strings.screen.MessageAlert);
      navigate("/List");
    }
    // console.log("aaaaaaaa")
    navigate("/List");
  };

  if (createProductResult.isLoading) return <div>{loading}</div>;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* {InPutConfirm("name", register, product)}
      {InPutConfirm("origin", register, product)}
      {InPutConfirm("price", register, product)} */}
      <Label htmlFor="name">{strings.screen.Name}</Label>
      <Input
        type="text"
        name="name"
        id="name"
        value={product.name}
        readOnly
        {...register("name")}
      />
      <Label htmlFor="name">{strings.screen.Origin}</Label>
      <Input
        type="text"
        name="text"
        id="origin"
        value={product.origin}
        readOnly
        {...register("origin")}
      />
      <label htmlFor="name">{strings.screen.Price}</label>
      <Input
        type="text"
        name="price"
        id="price"
        value={product.price}
        readOnly
        {...register("price")}
      />

      <Button type="submit">{strings.screen.CreateProduct}</Button>
    </Form>
  );
}

export default Confirm;
