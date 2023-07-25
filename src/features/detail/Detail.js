import { useParams } from "react-router-dom";
import {
  useGetProductQuery,
  useDeleteProductMutation,
} from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Button, Td, Th, Div, Table } from "../../shared/styles";
import { strings } from "../../localization/Localization";
// import Common from "../common/common";

function DetailData() {
  let { id } = useParams();
  const { data, isLoading, isError } = useGetProductQuery(id);
  const [deleteProduct, deleteProductResult] = useDeleteProductMutation();
  const navigate = useNavigate();
  if (isError) return <div>An error has occurred</div>;
  if (isLoading) return <div>Loading...</div>;

  const handleBack = () => {
    navigate("/List");
  };

  const handleDelete = () => {
    deleteProduct(id);
    handleBack();
  };

  if (deleteProductResult.isLoading) return <div>Loading...</div>;

  return (
    <Div>
      {/* <Common/> */}
      <Table
        style={{
          margin: "auto",
        }}
      >
        <tr>
          <Th>ID</Th>
          <Td style={{ textAlign: "center" }}>{Object.keys(data).length > 0 &&  data[0].id}</Td>
        </tr>
        <tr>
          <Th>{strings.screen.Name}</Th>
          <Td style={{ textAlign: "center" }}>{Object.keys(data).length > 0 &&  data[0].name}</Td>
        </tr>
        <tr>
          <Th>{strings.screen.Origin}</Th>
          <Td style={{ textAlign: "center" }}>{Object.keys(data).length > 0 &&  data[0].origin}</Td>
        </tr>
        <tr>
          <Th>{strings.screen.Price}</Th>
          <Td style={{ textAlign: "center" }}>{Object.keys(data).length > 0 &&  data[0].price}</Td>
        </tr>
        <tr>
          <td>
            <Button type="button" onClick={handleBack}>
              {strings.screen.Back}
            </Button>
          </td>
          <td>
            <Button type="button" onClick={handleDelete}>
              {strings.screen.Delete}
            </Button>
          </td>
        </tr>
      </Table>
    </Div>
  );
}

export default DetailData;
