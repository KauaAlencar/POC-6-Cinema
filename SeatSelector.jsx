"use client";

import { useState, useEffect } from "react";
import styles from "./SeatSelector.module.css";

const SeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState(null);
  const [seats, setSeats] = useState([]);

  // Função para alternar entre temas (dark ou light)
  const setTheme = (theme) => {
    const root = document.documentElement;
    const lightTheme = {
      "--bg-color": "#f0f0f0",
      "--text-color": "#000000",
      "--seat-empty": "#BABABA",
      "--seat-selected": "#DB3D2E",
      "--seat-occupied": "#333333",
      "--button-bg": "#c84b31",
      "--button-hover": "#a63924",
    };

    const darkTheme = {
      "--bg-color": "#1e1e2f",
      "--text-color": "#ffffff",
      "--seat-empty": "#ffffff",
      "--seat-selected": "#c84b31",
      "--seat-occupied": "#333333",
      "--button-bg": "#c84b31",
      "--button-hover": "#a63924",
    };

    const selectedTheme = theme === "dark" ? darkTheme : lightTheme;

    for (const [key, value] of Object.entries(selectedTheme)) {
      root.style.setProperty(key, value);
    }
  };

  // Detecta o tema preferido ao carregar
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  // Carrega os dados do JSON
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setSeats(jsonData.assentos || []);
      })
      .catch((error) => console.error("Erro ao carregar os dados do JSON:", error));
  }, []);

  const seatPrice = data?.preco || 0;

  const updateTotal = (newSelectedSeats) => {
    setTotal(newSelectedSeats.length * seatPrice);
  };

  const toggleSeat = (index) => {
    const seat = seats[index];
    if (!seat || !seat.disponivel) return;

    const isSelected = selectedSeats.includes(index);
    const newSelectedSeats = isSelected
      ? selectedSeats.filter((seatIndex) => seatIndex !== index)
      : [...selectedSeats, index];

    setSelectedSeats(newSelectedSeats);
    updateTotal(newSelectedSeats);
  };

  const getSeatClass = (index) => {
    const seat = seats[index];
    if (!seat) return styles.empty;
    if (!seat.disponivel) return styles.occupied;
    if (selectedSeats.includes(index)) return styles.selected;
    return styles.empty;
  };

  const handlePurchase = () => alert("Compra realizada com sucesso!");

  if (!data) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{data?.titulo || "Título não disponível"}</h2>
        <p className={styles.time}>{data?.horario || "Horário não disponível"}</p>
      </div>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <div className={styles.grid}>
            {seats.map((seat, index) => (
              <button
                key={index}
                className={`${styles.seat} ${getSeatClass(index)}`}
                onClick={() => toggleSeat(index)}
                disabled={!seat.disponivel}
              />
            ))}
          </div>
          <h3>tela</h3>
          <div className={styles.screen}></div>
          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.legendFree}`} />
              <span>livre</span>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.legendSelected}`} />
              <span>selecionado</span>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.legendOccupied}`} />
              <span>indisponível</span>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.mainInfo}>
            <h3 className={styles.description}>Sinopse do filme</h3>
            <p className={styles.description}>{data?.sinopse || "Sinopse não disponível"}</p>
            <h3 className={styles.description}>Data de lançamento</h3>
            <p className={styles.description}>{data?.dataLancamento || "Data não disponível"}</p>
            <h3 className={styles.description}>Direção</h3>
            <p className={styles.description}>{data?.direcao || "Direção não disponível"}</p>
          </div>
        </div>
      </div>
      <div className={styles.purchaseContainer}>
        <button className={styles.purchaseButton} onClick={handlePurchase}>
          <span className={styles.buyText}>Comprar</span>
          <span className={styles.totalPrice}>R${total.toFixed(2)}</span>
        </button>
      </div>
    </div>
  );
};

export default SeatSelector;
