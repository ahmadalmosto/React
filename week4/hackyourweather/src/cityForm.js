import React from "react";

const CityForm = (props) => {
  return (
    <div className="forminfo">
      <form onSubmit={props.handleOnSubmit}>
        <label>
          <input
            type="text"
            placeholder="Enter City Name"
            value={props.cityInput}
            onChange={props.handleOnChange}
          />
        </label>
        <input type="submit" value="Get Weather" className="buttonSub" />
      </form>
    </div>
  );
};
export default CityForm;
