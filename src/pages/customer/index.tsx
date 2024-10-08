import { useState } from "react";
import {
  createCustomerService,
  loadCustomersWithPagination,
} from "../../services/customer";
import { GridList, IGridListField } from "../../shared/components/gridList";
import { usePagination } from "../../shared/hooks/usePagination";
import { Button } from "../../shared/styles/button";
import { Title } from "../../shared/styles/title";
import CreateOrEditModal from "./components/createOrEditModal";
import { CustomerGridComponent } from "./components/CustomerGridComponent";
import { CustomerContainer } from "./styles";
import dataToState from "./utils/dataToState";
import { IState } from "./components/createOrEditModal/types";

const fields: IGridListField[] = [
  { name: "Nome", width: "20%" },
  { name: "Cpf / CNPJ", width: "20%" },
  { name: "Cidade", width: "20%" },
  { name: "Estado", width: "10%" },
  { name: "Tipo", width: "20%" },
  { name: "Ações", width: "10%" },
];

export const CustomerPage = () => {
  const [createClientModa, setCreateClientModal] = useState<boolean>(false);

  const { data, addItemToList } = usePagination({
    fetcher: loadCustomersWithPagination,
    limit: 20,
  });

  async function handleCreateCustomer(data: IState) {
    const response = await createCustomerService(dataToState.stateToData(data));
    addItemToList(response);
    setCreateClientModal(false);
  }

  const handleCloseModal = () => setCreateClientModal(false);

  const handleShowModal = () => setCreateClientModal(true);

  return (
    <CustomerContainer>
      <div className="header">
        <Title>Clientes</Title>
        <Button onClick={handleShowModal}>Novo</Button>
      </div>
      <GridList
        fields={fields}
        data={data}
        ItemComponent={CustomerGridComponent}
        identifier="id"
      />
      {createClientModa && (
        <CreateOrEditModal
          action={handleCreateCustomer}
          handleCloseModal={handleCloseModal}
        />
      )}
    </CustomerContainer>
  );
};
