import styled from "styled-components";

export const Button = styled.button`
  text-transform: uppercase;
  background-color: darkslateblue;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  display: block;
  padding: 0.8rem;
  outline: none;
  font-size: inherit;
  font-family: inherit;
  margin-top: 1rem;
  margin-bottom: 1.1rem;
  border: 1px solid lightgrey;
`;

export const Form = styled.form`
  width: 500px;
  margin: 0 auto;
`;

export const Ul = styled.ul`
  list-style-position: inside;
  color: lightcoral;
  padding: 1rem;
  width: 100%;
`;

export const Error = styled.li`
  border: 1px dashed lightgray;
  padding: 1rem;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  display: block;
  padding: 0.8rem;
  outline: none;
  font-size: inherit;
  font-family: inherit;
  margin-top: 1rem;
  margin-bottom: 1.1rem;
  border: 1px solid lightgrey;
  border-radius: 5px;
`;

export const Th = styled.th`
  border: 1px solid black;
`;

export const Td = styled.td`
  border: 1px solid black;
`;

export const Div = styled.div`
  overflow: auto;
  height: 700;
`;

export const Table = styled.table`
  width: 80%;
  margin: auto,
  overflow: auto,
  border: 1px solid black;  
  border-collapse: collapse; 
  background: #ffffff;
`;

export const IMG = styled.img`
  max-height: 150px;
`;

export const StyledInput = styled(Input)`
    padding: 15px;
  `;
