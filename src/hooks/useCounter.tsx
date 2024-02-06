import {useState} from 'react';

export const useCounter = (valorInicial: number) => {
  const [contador, setContador] = useState<number>(valorInicial);
  const incrementar = (valor: number) => {
    setContador(contador + valor);
  };
  const decrementar = (valor: number) => {
    setContador(contador - valor);
  };
  return {
    contador,
    incrementar,
    decrementar,
  };
};
