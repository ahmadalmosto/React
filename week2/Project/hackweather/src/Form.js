import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";
import { FaSearch } from "react-icons/fa";

export default function Form({ handleOnChange, handleOnClick }) {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="my-input"></InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={handleOnChange}
        />
        <FormHelperText id="my-helper-text">
          Put City Name To Get Weather
        </FormHelperText>
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
