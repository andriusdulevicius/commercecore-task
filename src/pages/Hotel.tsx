import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

interface Props {
  match: {
    params: {
      hotelName: string;
    };
  };
}

const Hotel: FC<Props> = ({ match }) => {
  const {
    params: { hotelName },
  } = match;

  return (
    <>
      <p>
        <strong>User ID: </strong>
        {hotelName}
      </p>
    </>
  );
};

export default Hotel;
