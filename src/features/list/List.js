import { useNavigate } from "react-router-dom";
import { strings } from "../../localization/Localization";
import { useGetProductsQuery } from "../../services/api";
import { Table, Input, StyledInput, Ul} from "../../shared/styles";
import {useState, useEffect} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {urlApi, error, loading} from "../common/common"

function List() {
  const { data, isLoading, isError } = useGetProductsQuery();
  const [apiData, setApiData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [search, setSearch] = useState(false);
    useEffect(() => {
      // lấy 1 lần list api ngoài
      axios.get(urlApi).then((response) => {
        setApiData(response.data);
      });
    }, []);
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm();

  if (isError) return <div>{error}</div>;
  if (isLoading) return  <div>{loading}</div>;
  const handleCreateData = () => {
    navigate("/Create");
  };

  const handleDetailData = (id) => {
    navigate(`/Detail/${id}`);
  };

  const handleSearch = (dataSubmit) => {
    setSearch(true)
    const dataS = data.concat(apiData);
    if (dataSubmit.inputSearch !== ""){
      // fillter list apiLocal và api ngoài
      const fillData = dataS.filter((item) => {
        return Object.values(item.name).join("").toLowerCase().includes(dataSubmit.inputSearch);
      })
      setDataSearch(fillData);
    } else {
      setDataSearch(dataS);
    }
  };


  return (
    <form onSubmit={handleSubmit(handleSearch)}>
      <Table
        style={{
          margin: "auto",
          marginBottom: "5%",
          background: "#ffffff",
          overflow: "scroll",
        }}
      >
        <thead>
          <th colSpan={4}>
            <h1>{strings.screen.ListProduct}</h1>
          </th>
          <tr>     
            <td style={{width: "20%"}}>
              <StyledInput
                className="button"
                type="button"
                name="add"
                id="add"
                value={strings.screen.CreateProduct}
                onClick={handleCreateData}
              />
            </td>
            <td style={{width: "20%"}}>
              <StyledInput
                 className="button"
                 type="submit"
                 name="search"
                 id="search"
                 value={"Search"}
               />
            </td>
            <td colSpan={2} style={{paddingRight: "30px", width: "60%"}}>
              <Input
                 type="text"
                 name="inputSearch"
                 id="inputSearch"
                 {...register("inputSearch")}
              />
            </td>
          </tr>
          {/* check có data api thì hiển thị count record không thì hiển thị message */}
          {(((Object.keys(data).length > 0 || Object.keys(apiData).length > 0) && !search) || Object.keys(dataSearch).length > 0) ?
            <tr>
              <td>
                <span>{Object.keys(dataSearch).length > 0 ? Object.keys(dataSearch).length : Object.keys(data).length + Object.keys(apiData).length} {strings.screen.Record}</span> 
            </td>
          </tr> 
          : <tr><td colSpan={4}><Ul>{strings.screen.MessageSearch}</Ul></td></tr>}
          {/* check có data api thì hiển thị header */}
          {(((Object.keys(data).length > 0 || Object.keys(apiData).length > 0) && !search) || Object.keys(dataSearch).length > 0) &&       
           < tr>
             <th>ID</th>
             <th>{strings.screen.Name}</th>
             <th>{strings.screen.Origin}</th>
             <th>{strings.screen.Price}</th>
           </tr>}
        </thead>
        <tbody style={{height: "110px"}}>
          {/* search = true thì hiển thị dataSearch, search = flase thì hiển thị data và  apiData*/}
          {search
          ? dataSearch.map((item) => (
            <tr
              className="item"
              key={item.id}
              style={{ textAlign: "center" }}
              onClick={() => handleDetailData(item.id)}
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.origin}</td>
              <td>{item.price}</td>
            </tr>
          )) 
          : data.map((item) => (
            <tr
              className="item"
              key={item.id}
              style={{ textAlign: "center" }}
              onClick={() => handleDetailData(item.id)}
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.origin}</td>
              <td>{item.price}</td>
            </tr>
          ))}
          {!search && 
          apiData.map((item) => (
            <tr
              className="item"
              key={item.id}
              style={{ textAlign: "center" }}
              onClick={() => handleDetailData(item.id)}
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.origin}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </form>
  );
}

export default List;
