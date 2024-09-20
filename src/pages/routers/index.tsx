import { useState } from "react";
import {
  createRouterService,
  loadRoutersWithPagination,
} from "../../services/routers";
import { GridList, IGridListField } from "../../shared/components/gridList";
import { usePagination } from "../../shared/hooks/usePagination";
import { Button } from "../../shared/styles/button";
import { Title } from "../../shared/styles/title";
import CreateOrEditRouterModal from "./components/createOrEditModal";
import { RouterGridComponent } from "./components/RouterGridComponent";
import { RouterContainer } from "./style";
import { IRouter } from "../../@types/router";

const fields: IGridListField[] = [
  { name: "IP", width: "20%" },
  { name: "IPv6", width: "20%" },
  { name: "Marca", width: "20%" },
  { name: "Model", width: "20%" },
  { name: "Ações", width: "20%" },
];

export const RouterPage = () => {
  const [createClientModa, setCreateClientModal] = useState<boolean>(false);
  const { data, addItemToList } = usePagination({
    fetcher: loadRoutersWithPagination,
    limit: 20,
  });

  async function handleCreateCustomer(data: IRouter) {
    const response = await createRouterService(data);
    addItemToList(response);
    setCreateClientModal(false);
  }

  const handleCloseModal = () => setCreateClientModal(false);

  const handleShowModal = () => setCreateClientModal(true);

  return (
    <RouterContainer>
      <div className="header">
        <Title>Roteadores</Title>
        <Button onClick={handleShowModal}>Novo</Button>
      </div>
      <GridList
        fields={fields}
        data={data}
        ItemComponent={RouterGridComponent}
        identifier="IP"
      />
      {createClientModa && (
        <CreateOrEditRouterModal
          handleCloseModal={handleCloseModal}
          action={handleCreateCustomer}
        />
      )}
    </RouterContainer>
  );
};
