import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cleanDog, getDetail } from "../../actions";
import style from "./Detail.module.css";

export default function Detail(props) {
  const dispatch = useDispatch();
console.log(props);
  useEffect(() => {
    dispatch(getDetail(props.match.params.id)); //accedo al id de ese perro
    return function () {
      dispatch(cleanDog()); //cuando sale del detail limpia el mismo
    };
  }, [props.match.params.id, dispatch]);

  const dogDetail = useSelector((state) => state.detail); //traigo el estado detail del reducer
  return (
    <div className={style.divDet}>
      <div>
        <Link to="/home">
          <button className={style.button}>Volver</button>
        </Link>
      </div>
      {dogDetail.length > 0 ? (
        <div className={style.detailText}>
          <h1>{dogDetail[0].nombre}</h1>
          <div className={style.info}>
            <p>
              Altura Promedio:
              <br />
              {dogDetail[0].altura} cm
            </p>
            <p>
              Peso Promedio:
              <br /> {dogDetail[0].peso} kg
            </p>
            <p>
              Años de vida:
              <br />
              {dogDetail[0].años_de_vida}
            </p>
          </div>
          <h3>Temperamentos: {dogDetail[0].temperaments.map(element => ` ${element.nombre}-`)}</h3>
          <img
            src={dogDetail[0].imagen}
            alt="img"
            className={style.detailPhoto}
          ></img>
        </div>
      ) : (
        <div className={style.loadingDet}>
          <h3>Loading...</h3>

        </div>
      )}
    </div>
  );
}
