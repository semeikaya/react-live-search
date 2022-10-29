import { useState } from "react";
import Search from "./Components/Search";
import Sneaker from "./Components/Sneaker";
import { sneakersBase } from "./SneakersBase";

function App() {
  const [sneakers, setSneakers] = useState(sneakersBase);
  const [input, setInput] = useState("");
  const [empty, setEmpty] = useState(false);
  const [classError, setClassError] = useState("");
  const filterSneakers = sneakers.filter((sneaks) => {
    return sneaks.name.toLowerCase().includes(input.toLowerCase());
  });

  function handleBlur() {
    if (!input) {
      setEmpty(true);
      setClassError("is-error");
    }
  }

  function handleChange(e) {
    console.log(input);
    setInput(e.target.value);
    setEmpty(false);
    setClassError("borderInput");
  }

  function handleSubmit(i) {
    setSneakers(
      sneakers.map((item, index) => {
        if (index === i) {
          item.classBuyBtn = "afterBuy";
          item.textBuyBtn = "Уже есть в корзине";
          item.deleteBtn = true;
          item.stateBtn = false;
        }
        return item;
      })
    );
  }

  function handleDelete(i) {
    setSneakers(
      sneakers.map((item, index) => {
        if (index === i) {
          item.classBuyBtn = "addBtn";
          item.textBuyBtn = "Добавить в корзину";
          item.deleteBtn = false;
          item.stateBtn = true;
        }
        return item;
      })
    );
  }

  function handleDetail(i) {
    setSneakers(
      sneakers.map((item, index) => {
        if (index === i) {
          item.detail = true;
        }
        return item;
      })
    );
  }

  function handleDetailExit(i) {
    setSneakers(
      sneakers.map((item, index) => {
        if (index === i) {
          item.detail = false;
        }
        return item;
      })
    );
  }

  return (
    <>
      <Search
        classError={classError}
        input={input}
        handleChange={handleChange}
        handleBlur={handleBlur}
        empty={empty}
      />

      <Sneaker
        filterSneakers={filterSneakers}
        handleDetail={handleDetail}
        handleDetailExit={handleDetailExit}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
