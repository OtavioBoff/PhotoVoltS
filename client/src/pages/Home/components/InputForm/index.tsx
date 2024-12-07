import { useForm } from "react-hook-form";
import { FormContainer, Input, InputBox, Label, SubmitButton } from "./styles";

export interface FormParams {
  TC: number;
  I_SC: number;
  V_dc: number;
  Vmp: number;
}
interface InputFormProps {
  onSubmit: (data: FormParams) => void;
}

export function InputForm({ onSubmit }: InputFormProps) {
  const { handleSubmit, register } = useForm<FormParams>();

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputBox>
        <Label>Coeficiente de temperatura (°C^-1)</Label>
        <Input
          placeholder="0"
          {...register("TC", { required: true, valueAsNumber: true })}
        />
      </InputBox>
      <InputBox>
        <Label>Corrente de curto-circuito (A)</Label>
        <Input
          placeholder="0"
          {...register("I_SC", { required: true, valueAsNumber: true })}
        />
      </InputBox>
      <InputBox>
        <Label>Tensão Máxima de Energia (V)</Label>
        <Input
          placeholder="0"
          {...register("V_dc", { required: true, valueAsNumber: true })}
        />
      </InputBox>
      <InputBox>
        <Label>Tensão no ponto de máxima potência (V)</Label>
        <Input
          placeholder="0"
          {...register("Vmp", { required: true, valueAsNumber: true })}
        />
      </InputBox>
      <SubmitButton type="submit">Gerar Gráficos</SubmitButton>
    </FormContainer>
  );
}
