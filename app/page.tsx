"use client";
import Porta from "@/components/Porta";
import { atualizarPorta, criarPortas } from "@/functions/portas";
import PortaModel from "@/model/porta";
import { useState } from "react";

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(3, 2));

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

  return <div style={{ display: "flex" }}>{renderizarPortas()}</div>;
}
