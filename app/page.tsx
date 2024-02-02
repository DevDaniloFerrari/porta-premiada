'use client'
import styles from "@/styles/Formulario.module.css";
import Cartao from "@/components/Cartao";
import Link from "next/link";
import EntradaNumerica from "@/components/EntradaNumerica";
import { useState } from "react";

export default function Fomrulario() {
  const [quantidadePortas, setQuantidadePortas] = useState(3);

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quantidade Portas?" value={quantidadePortas} onChange={setQuantidadePortas} />
        </Cartao>
      </div>
      <div>
        <Cartao></Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/4/2`} className={styles.link}>
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
