"use client";
import styles from "@/styles/Jogo.module.css";
import Porta from "@/components/Porta";
import { atualizarPorta, criarPortas } from "@/functions/portas";
import PortaModel from "@/model/porta";
import { useState } from "react";
import Link from "next/link";

interface JogoProps {
  portas: number;
  temPresente: number;
}

export default function jogo({ params }: { params: JogoProps }) {
  const [portas, setPortas] = useState<PortaModel[]>(
    criarPortas(+params.portas, +params.temPresente)
  );

  const atualizarPortas = (novaPorta: PortaModel) => {
    setPortas(atualizarPorta(portas, novaPorta));
  };

  function renderizarPortas() {
    return portas.map((porta: PortaModel) => {
      return (
        <Porta key={porta.numero} value={porta} onChange={atualizarPortas} />
      );
    });
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>{renderizarPortas()}</div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
