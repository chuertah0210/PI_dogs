import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../../actions";
import style from "./SearchBar.module.css";

export default function SearchBar({ setCurrentPage, allDogs }) {
  const dispatch = useDispatch(); //trae del reducer el state dogs con todas las razas a allDogs

  const [name, setName] = useState("");

  const handlerInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value); //agarro el value del input y lo seteo en el useState
  };

  const handlerButton = (e) => {
    e.preventDefault();
    dispatch(getNameDogs(name)); //el name va a ser mi estado local y se lo mando a la acción, para que se lo pase al back
    //setCurrentPage(1);
  };

  return (
    <div>
      {" "}
      
        <div className={style.divGeneral}>
          <input
            className={style.input}
            type="text"
            name="search"
            placeholder="Buscar..."
            onChange={(e) => handlerInputChange(e)}
          />
          <button
            type="submit"
            onClick={(e) => handlerButton(e)}
            className={style.b}
          >
            Buscar
          </button>
        </div>
   
    </div>
  );
}
