"use client";
import styles from "../../styles/Jogo.module.css";
import Porta from "@/components/Porta";
import { atualizarPorta, criarPortas } from "@/functions/portas";
import PortaModel from "@/model/porta";
import { useState } from "react";

export default function jogo() {
  const [portas, setPortas] = useState(criarPortas(4, 2));

  const atualizarPortas = (novaPorta: PortaModel) => {
    setPortas(atualizarPorta(portas, novaPorta));
  };

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta key={porta.numero} value={porta} onChange={atualizarPortas} />
      );
    });
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>{renderizarPortas()}</div>
      <div className={styles.botoes}>

      </div>
    </div>
  );
}
