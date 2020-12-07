import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DataContainer = styled.div`
  text-align: center;
`;

const Number = styled.p`
  font-size: 25px;
  font-weight: bold
`;

const Data = ({number, title}) => (
  <DataContainer>
    <Number>{number}</Number>
    <div>{title}</div>
  </DataContainer>
);

Data.protoTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default Data;
