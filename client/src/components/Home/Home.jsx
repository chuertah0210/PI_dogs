import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getDogs,
  filterDogsByTemps,
  getTemperaments,
  filterApi,
  orderWeight,
  orderAlfab,
} from "../../actions";
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs); //trae del reducer el state dogs con todas las razas a allDogs
  const temperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handlerClick = (e) => {
    e.preventDefault();
    dispatch(getDogs());
  };


  return (
    <div className={style.div}>
      
        <div>
          <div className={style.SearchLink}>
            <SearchBar allDogs={allDogs} />
            <Link to="/dog">
              {" "}
              <button className={style.b}>Crear raza de perros</button>
            </Link>
          </div>
          
    

          <div className={style.cards}>
            {allDogs?.map((elem) => {
              //tomo unicamente los dogs que me devuelve el paginado para mostrar
              return (
                <div className={style.cardH} key={elem.id}>
                  {/* <Link to={"/home/" + elem.id} id={style.link}>
                    <button className={style.button}>DETAIL</button>
                  </Link> */}
                  <Card
                  id={elem.id}
                    name={elem.nombre}
                    image={
                      elem.imagen
                        ? elem.imagen
                        : "https://st3.depositphotos.com/29384342/35239/v/450/depositphotos_352397770-stock-illustration-vector-image-dog-silhouette-default.jpg"
                    }
                    temperament={elem.temperament}
                    weight={elem.peso}
                    key={elem.id}
                  />
                </div>
              );
            })}
          </div>
        </div>

    </div>
  );
}
