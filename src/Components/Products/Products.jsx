import React, { useEffect } from "react";
import "./Products.css";

const Products = (props) => {
  const table = props.table;
  const table2 = props.table2 ? props.table2 : "";
  useEffect(() => {
    // let observer = new IntersectionObserver(
    //   (entries, observer) => {
    //   entries.forEach(entry => {
    //       /* Placeholder replacement */
    //       entry.target.src = entry.target.dataset.src;
    //       observer.unobserve(entry.target);
    //     });
    //   },
    //   {rootMargin: "0px 0px -200px 0px"});

    let leftObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.boundingClientRect.top > 0) {
          if (entry.isIntersecting) {
            entry.target.classList.add("leftSlide");
            observer.unobserve(entry.target);
          }
        }
      });
    });

    let rightObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.boundingClientRect.top > 0) {
          if (entry.isIntersecting) {
            entry.target.classList.add("rightSlide");
            observer.unobserve(entry.target);
          }
        }
      });
    });

    document.querySelectorAll(".left").forEach((p) => {
      leftObserver.observe(p);
    });
    document.querySelectorAll(".right").forEach((p) => {
      rightObserver.observe(p);
    });
  });
  return (
    <div className="products container my-5">
      <div
        className={`row align-items-center mb-5 ${
          props.class ? props.class : ""
        }`}
      >
        <div className="col-md-6 col-12 text-center left">
          <img src={props.img} className="img-width" alt="" />
        </div>
        <div className="col-md-6 col-12 d-flex align-items-center right">
          <div>
            {props.circle ? (
              <h3 className="title mb-4 title-char">
                <span className="char">{props.circle}</span>
                {props.title}
              </h3>
            ) : (
              <h3 className="title mb-4">{props.title}</h3>
            )}
            {props.children}
          </div>
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="tableContainer">
          <h5 className="medium">
            Below, we provide {props.title} specification guide for a range of
            grades.
          </h5>
          <table className="table table-striped text-center mt-3">
            <thead>
              {table.title
                ? table.title.map((item) => {
                    return (
                      <tr key={item}>
                        <th colSpan="100">{item}</th>
                      </tr>
                    );
                  })
                : null}
              <tr>
                {table.head.map((item) => {
                  return <th key={item}>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {table.body.map((item) => {
                return (
                  <tr key={item}>
                    {item.map((i) => {
                      return <td key={i}>{i}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          {table2 ? (
            <table className="table table-striped text-center mt-3">
              <thead>
                {table2.title
                  ? table2.title.map((item) => {
                      return (
                        <tr key={item}>
                          <th colSpan="100">{item}</th>
                        </tr>
                      );
                    })
                  : null}
                <tr>
                  {table2.head.map((item) => {
                    return <th key={item}>{item}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {table2.body.map((item) => {
                  return (
                    <tr key={item}>
                      {item.map((i) => {
                        return <td key={i}>{i}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
