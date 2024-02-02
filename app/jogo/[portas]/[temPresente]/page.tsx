"use client";
import styles from "@/styles/Jogo.module.css";
import Porta from "@/components/Porta";
import { atualizarPorta, criarPortas } from "@/functions/portas";
import PortaModel from "@/model/porta";
import { useEffect, useState } from "react";
import Link from "next/link";

interface JogoProps {
  portas: number;
  temPresente: number;
}

export default function jogo({ params }: { params: JogoProps }) {
  const [valido, setValido] = useState<boolean>(false);
  const [portas, setPortas] = useState<PortaModel[]>(
    criarPortas(+params.portas, +params.temPresente)
  );

  useEffect(() => {
    const quantidadePortasValidas =
      +params.portas >= 3 && +params.portas <= 100;
    const temPresentValido =
      +params.temPresente >= 1 && +params.temPresente <= +params.portas;

    setValido(quantidadePortasValidas && temPresentValido);
  }, [portas]);

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
      <div className={styles.portas}>
        {valido ? renderizarPortas() : <h1>Valores inválidos</h1>}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
