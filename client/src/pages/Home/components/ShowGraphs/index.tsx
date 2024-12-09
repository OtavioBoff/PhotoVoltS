import { Label, StyledImage } from "./styles";

export function ShowGraphs({
  timestamp,
  ip,
}: {
  timestamp: number;
  ip: string;
}) {
  return (
    <>
      <Label>Gráficos gerados:</Label>
      <StyledImage
        src={`http://${ip}:3000/octave-image/I_V_Irradiancia.png?${timestamp}`}
        alt="Gráfico IxV - Irradiancia"
      />
      <StyledImage
        src={`http://${ip}:3000/octave-image/I_V_Temperatura.png?${timestamp}`}
        alt="Gráfico IxV - Temperatura"
      />
      <StyledImage
        src={`http://${ip}:3000/octave-image/P_V_Irradiancia.png?${timestamp}`}
        alt="Gráfico PxV - Irradiancia"
      />
      <StyledImage
        src={`http://${ip}:3000/octave-image/P_V_Temperatura.png?${timestamp}`}
        alt="Gráfico PxV - Temperatura"
      />
    </>
  );
}
