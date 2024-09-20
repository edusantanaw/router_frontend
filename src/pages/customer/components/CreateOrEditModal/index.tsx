import { useReducer, useState } from "react";
import { findCepService } from "../../../../services/cep";
import { LoadingSpinner } from "../../../../shared/components/loadingSpinner";
import Modal from "../../../../shared/components/modal/modal";
import { Button } from "../../../../shared/styles/button";
import { Title } from "../../../../shared/styles/title";
import FormFields from "./FormFields";
import { FormContainer } from "./style";
import { IAction, ICustomerReducer, IState } from "./types";

const initialState: IState = {
  name: "",
  cep: "",
  city: "",
  number: "",
  province: "",
  state: "",
  street: "",
  cpfCnpj: "",
  personType: 0,
  dateOfBirth: "",
};

function customerReducer(data: IState, action: IAction<IState>) {
  return {
    ...data,
    [action.type]: action.value,
  };
}

interface Props {
  editMode?: boolean;
  data?: IState;
  action: (data: IState) => Promise<void>;
  handleCloseModal: () => void;
}

const CreateOrEditModal = ({
  handleCloseModal,
  action,
  editMode,
  data,
}: Props) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [customerState, customerDispatch] = useReducer<ICustomerReducer>(
    customerReducer,
    data ?? initialState
  );

  async function handleAction(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(() => true);
    await new Promise((resolve) => setTimeout(() => resolve(null), 1000));
    if (error) setError(() => null);
    try {
      await action(customerState);
    } catch (err) {
      const { message } = err as Error;
      setError(message);
    }
    setLoading(() => false);
  }

  async function handleCep(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value.length < 8) {
      customerDispatch({ value: value, type: "cep" });
      return;
    }
    customerDispatch({ value: value, type: "cep" });
    const cepResponse = await findCepService(value);
    if (!cepResponse) {
      customerDispatch({ value: value, type: "cep" });
      return;
    }
    customerDispatch({ value: cepResponse.cep, type: "cep" });
    customerDispatch({ value: cepResponse.bairro, type: "province" });
    customerDispatch({ value: cepResponse.uf, type: "state" });
    customerDispatch({ value: cepResponse.localidade, type: "city" });
    customerDispatch({ value: cepResponse.logradouro, type: "street" });
  }

  return (
    <Modal handleClose={handleCloseModal}>
      <FormContainer onSubmit={(e) => handleAction(e)}>
        <Title $size="1.7em">
          {editMode ? "Editar cliente" : "Novo cliente"}
        </Title>
        <FormFields
          customerDispatch={customerDispatch}
          customerState={customerState}
          handleCep={handleCep}
        />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Button type="submit" $w="15em">
            {editMode ? "Editar" : "Criar"}
          </Button>
        )}
      </FormContainer>
    </Modal>
  );
};

export default CreateOrEditModal;
