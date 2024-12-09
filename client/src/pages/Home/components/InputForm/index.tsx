import { useForm } from "react-hook-form";
import { FormContainer, Input, InputBox, Label, SubmitButton } from "./styles";

export interface FormParams {
  T_0: number;
  TC: number;
  I_SC: number;
  V_DC: number;
  V_MP: number;
}
interface InputFormProps {
  onSubmit: (data: FormParams) => void;
}

export function InputForm({ onSubmit }: InputFormProps) {
  const { handleSubmit, register } = useForm<FormParams>();

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputBox>
        <Label>Temperatura ambiente (°C)</Label>
        <Input
          placeholder="0"
          {...register("T_0", { required: true, valueAsNumber: true })}
        />
      </InputBox>
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
        <Label>Tensão de circuito aberto (V)</Label>
        <Input
          placeholder="0"
          {...register("V_DC", { required: true, valueAsNumber: true })}
        />
      </InputBox>
      <InputBox>
        <Label>Tensão de máxima potencia (V)</Label>
        <Input
          placeholder="0"
          {...register("V_MP", { required: true, valueAsNumber: true })}
        />
      </InputBox>
      <SubmitButton type="submit">Gerar Gráficos</SubmitButton>
    </FormContainer>
  );
}
