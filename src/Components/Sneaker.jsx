import React from "react";

function Sneaker({
  filterSneakers,
  handleDetail,
  handleDetailExit,
  handleSubmit,
  handleDelete,
}) {
  return (
    <div className="mamain">
      {filterSneakers.map((item, index) => {
        return (
          <div key={index} className="main">
            <img src={item.img} alt="" />
            <div className="body-block">
              <div className="detail-block">
                <div className="name-price-block">
                  <div className="name-sneaker">{item.name}</div>
                  <div className="price">{item.price}</div>
                </div>
                <div className="detail-btn-block">
                  <button onClick={() => handleDetail(index)} className="btn">
                    Детали
                  </button>
                  {item.detail && (
                    <div className="infoblock">
                      <div className="endBlock">
                        <button
                          onClick={() => handleDetailExit(index)}
                          className="endInfo"
                        >
                          ✖
                        </button>
                      </div>
                      <div className="textInfo">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <hr />
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae aliquid cumque voluptate?
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(index);
                }}
              >
                <button
                  className={item.classBuyBtn}
                  type="submit"
                  disabled={!item.stateBtn}
                >
                  {item.textBuyBtn}
                </button>
              </form>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleDelete(index);
                }}
              >
                <div className="trash-block">
                  {item.deleteBtn && (
                    <button className="deleteBtn" type="submit">
                      Удалить из корзины
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Sneaker;
