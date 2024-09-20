import { useState } from "react";
import { loadCustomersWithPagination } from "../../services/customer";
import { GridList, IGridListField } from "../../shared/components/gridList";
import { usePagination } from "../../shared/hooks/usePagination";
import { Button } from "../../shared/styles/button";
import { Title } from "../../shared/styles/title";
import CreateOrEditModal from "./components/CreateOrEditModal";
import { CustomerGridComponent } from "./components/CustomerGridComponent";
import { CustomerContainer } from "./styles";

const fields: IGridListField[] = [
  { name: "id", width: "25%" },
  { name: "Nome", width: "20%" },
  { name: "Cpf / CNPJ", width: "20%" },
  { name: "Nasc", width: "20%" },
  { name: "tipo", width: "20%" },
];

export const CustomerPage = () => {
  const [createClientModa, setCreateClientModal] = useState<boolean>(false);

  const { data } = usePagination({
    fetcher: loadCustomersWithPagination,
    limit: 100,
  });

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
        <CreateOrEditModal handleCloseModal={handleCloseModal} />
      )}
    </CustomerContainer>
  );
};
