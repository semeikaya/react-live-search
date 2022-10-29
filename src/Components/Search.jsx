import React from "react";

function Search({ classError, input, handleChange, handleBlur, empty }) {
  return (
    <>
      {" "}
      <form className="main-input">
        {" "}
        <input
          className={classError}
          type="text"
          value={input}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </form>
      <div className="err-block">
        {empty && <div className="err">Поле ввода не должно быть пустым!</div>}
      </div>
    </>
  );
}

export default Search;
