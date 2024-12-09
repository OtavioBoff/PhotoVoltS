import { useState } from "react";
import { FormParams, InputForm } from "./components/InputForm";
import { Box, Container, Label } from "./styles";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { ShowGraphs } from "./components/ShowGraphs";

export function Home() {
  const [isGraphVisible, setIsGraphVisible] = useState<boolean>(false);
  const [isCreatingGraph, setIsCreatingGraph] = useState<boolean>(false);
  const [timestamp, setTimestamp] = useState<number>(Date.now());

  const handleFormSubmit = async (data: FormParams) => {
    try {
      setIsCreatingGraph(true);
      setIsGraphVisible(false);

      const payload = {
        temperatureCoefficient: data.TC,
        voltage: data.V_DC,
        temperature: data.T_0,
        current: data.I_SC,
      };

      await axios.post(`http://192.168.0.13:3000/run-model`, payload);
      console.log("Dados enviados com sucesso");

      setTimestamp(Date.now());
      setIsGraphVisible(true);
      setIsCreatingGraph(false);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <Container>
      <Box>
        <Label>SIMULADOR DE CÉLULA FOTOVOLTAICA</Label>
        <InputForm onSubmit={handleFormSubmit} />
      </Box>
      {isGraphVisible && (
        <Box>
          <ShowGraphs timestamp={timestamp} />
        </Box>
      )}
      {isCreatingGraph && (
        <Box>
          <BeatLoader color="white" loading={isCreatingGraph} size={8} />
        </Box>
      )}
    </Container>
  );
}
