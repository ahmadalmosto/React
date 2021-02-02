import React from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { FaSearch } from "react-icons/fa";

export default function Form({ handleOnChange, handleOnClick, cityName }) {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="my-input"></InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={handleOnChange}
          value={cityName}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleOnClick}
          style={{ marginTop: 10 }}
        >
          <FaSearch />
        </Button>
      </FormControl>
    </>
  );
}
