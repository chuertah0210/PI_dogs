import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={style.divLand}>
      <h1>¡Bienvenidos al PI DOGS!</h1>
      <div>
        <Link to="/home">
          <button className={style.button}>Ingresar</button>
        </Link>
      </div>
    </div>
  );
}
