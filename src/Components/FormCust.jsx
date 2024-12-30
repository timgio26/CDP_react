import styled from "styled-components";
import { useForm } from "react-hook-form";
import { AddCustomer } from "./apiCustomer";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const Form = styled.form`
  width: 100%;
`;

const Label = styled.label`
  margin: 10px 0 5px;
  font-size: 16px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;
const CancelButton = styled(Button)`
  background-color: #cae2ff;
  color: #202a78;
  &:hover {
    opacity: 0.8;
  }
`;
const AddCustomerButton = styled(Button)`
  background-color: #7989ff;
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 15px;
`;

export function FormCust({ onCancel, onConfirm, isloading }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    onConfirm(data);
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">Nama</Label>
        <Input
          disabled={isloading}
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name?.type === "required" && (
          <ErrorMessage role="alert">Harus diisi</ErrorMessage>
        )}

        <Label htmlFor="email">Email</Label>
        <Input
          disabled={isloading}
          type="email"
          id="email"
          {...register("email")}
        />

        <Label htmlFor="phone">No HP</Label>
        <Input
          disabled={isloading}
          type="text"
          id="phone"
          {...register("phone", {
            required: true,
            pattern: {
              value: /^(0|[1-9]\d*)(\.\d+)?$/,
            },
          })}
        />
        {errors.phone?.type === "required" && (
          <ErrorMessage role="alert">Harus diisi</ErrorMessage>
        )}
        {errors.phone?.type === "pattern" && (
          <ErrorMessage role="alert">Masukan Nomor yang benar</ErrorMessage>
        )}

        <ButtonContainer>
          <CancelButton onClick={onCancel} disabled={isloading}>
            Cancel
          </CancelButton>
          <AddCustomerButton disabled={isloading}>
            Add Customer
          </AddCustomerButton>
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
}
