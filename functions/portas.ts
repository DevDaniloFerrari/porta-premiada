import PortaModel from "@/model/porta";

export function criarPortas(
  quantidade: number,
  portaComPresente: number
): PortaModel[] {
  return Array.from({ length: quantidade }, (_, i) => {
    const numero = i + 1;
    const temPresente = numero === portaComPresente;
    return new PortaModel(numero, temPresente);
  });
}

export function atualizarPorta(
  portas: PortaModel[],
  portaModificada: PortaModel
): PortaModel[] {
  return portas.map((portaAtual) => {
    const igualAModificada = portaAtual.numero === portaModificada.numero;

    if (igualAModificada) 
        return portaModificada;

    return portaModificada.aberta ? portaAtual : portaAtual.desselecionar();
  });
}
