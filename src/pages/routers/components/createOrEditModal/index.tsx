import React, { useReducer, useState } from "react";
import { IAction, IRouterReducer } from "./types";
import Modal from "../../../../shared/components/modal/modal";
import { FormContainer } from "../../../customer/components/CreateOrEditModal/style";
import { Title } from "../../../../shared/styles/title";
import { LoadingSpinner } from "../../../../shared/components/loadingSpinner";
import { Button } from "../../../../shared/styles/button";
import { Brand, IRouter } from "../../../../@types/router";
import TextField from "../../../../shared/components/textField";
import Select from "../../../../shared/components/select";
import { usePagination } from "../../../../shared/hooks/usePagination";
import { loadCustomersWithPagination } from "../../../../services/customer";
import { MultSelect } from "../../../../shared/components/select/MultSelect";
import { isSchemaValid } from "../../../../shared/validation";
import { routerSchema } from "../../../../shared/validation/router.validation";

const initialState: IRouter = {
  customers: [],
  brand: 0,
  IP: "",
  IPv6: "",
  model: "",
};

const BrandOptions = ["Huawei", "Cisco", "Mikrotik", "Juniper"];

function routerReducer(data: IRouter, action: IAction<IRouter>) {
  switch (action.type) {
    case "customers": {
      const customerAlreadySelected = data.customers.find(
        (e) => e === action.value
      );
      if (customerAlreadySelected) {
        return {
          ...data,
          customers: data.customers.filter((e) => e != action.value),
        };
      }
      return {
        ...data,
        customers: [...data.customers, action.value] as string[],
      };
    }
    default: {
      return {
        ...data,
        [action.type]: action.value,
      };
    }
  }
}

interface Props {
  editMode?: boolean;
  data?: IRouter;
  action: (data: IRouter) => Promise<void>;
  handleCloseModal: () => void;
}

const CreateOrEditRouterModal = ({
  data,
  action,
  handleCloseModal,
  editMode,
}: Props) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [routerState, customerDispatch] = useReducer<IRouterReducer>(
    routerReducer,
    data ?? initialState
  );

  // não é o ideal, mas por não ter um filtro de busca, vai servir para limitar a quantidade de itens renderizados
  const { data: customers } = usePagination({
    fetcher: loadCustomersWithPagination,
    limit: 20,
  });

  async function handleAction(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (error) setError(() => null);
    const maybeError = isSchemaValid(routerState, routerSchema);
    if (maybeError) {
      setError(maybeError);
      return;
    }
    setLoading(() => true);
    try {
      await action(routerState);
    } catch (err) {
      const { message } = err as Error;
      setError(message);
    }
    setLoading(() => false);
  }

  const options = customers.map((e) => {
    return {
      value: e.name,
      identifier: e.id,
    };
  });

  return (
    <Modal handleClose={handleCloseModal}>
      <FormContainer onSubmit={handleAction}>
        <Title $size="1.7em">
          {editMode ? "Editar Roteador" : "Novo Roteador"}
        </Title>
        <div className="fields">
          <TextField
            value={routerState.IP}
            onChange={(e) =>
              customerDispatch({ type: "IP", value: e.target.value })
            }
            readOnly={editMode}
            name="ip"
            placeholder="192.168.0.1"
            title="IP:"
            $w="100%"
          />
          <TextField
            value={routerState.IPv6}
            onChange={(e) =>
              customerDispatch({ type: "IPv6", value: e.target.value })
            }
            name="ipv6"
            placeholder="ipv6"
            title="IPv6:"
            $w="100%"
          />
          <Select
            value={Brand[routerState.brand]}
            title="Tipo"
            $w="100%"
            options={BrandOptions}
            handleChange={(value) => customerDispatch({ type: "brand", value })}
          />
          <TextField
            value={routerState.model}
            onChange={(e) =>
              customerDispatch({ type: "model", value: e.target.value })
            }
            name="model"
            placeholder="modelo"
            title="Modelo:"
            $w="100%"
          />
          <MultSelect
            selecteds={routerState.customers}
            handleChange={(e) =>
              customerDispatch({ type: "customers", value: e })
            }
            options={options}
            title="Clientes:"
            $w="100%"
          />
        </div>
        {error && <span className="error">{error}</span>}
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

export default CreateOrEditRouterModal;
