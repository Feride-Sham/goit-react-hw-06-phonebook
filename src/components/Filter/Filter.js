import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ filterValue, onToFilter }) => {
  return (
    <form className={s.container}>
      <label>
        Find contacts by name{" "}
        <input type="text" value={filterValue} onChange={onToFilter} />
      </label>
    </form>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onToFilter: PropTypes.func.isRequired,
};

export default Filter;
