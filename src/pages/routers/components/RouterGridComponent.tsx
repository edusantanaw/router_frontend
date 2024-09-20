import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { Brand, IRouter } from "../../../@types/router";
import ConfirmModal from "../../../shared/components/confirmModal";
import { IGridListField } from "../../../shared/components/gridList";
import { GridItemList } from "../../../shared/components/gridList/style";
import {
  disableRouterService,
  updateRouterService,
} from "../../../services/routers";
import CreateOrEditRouterModal from "./createOrEditModal";
import { loadCustomersByRouterService } from "../../../services/customer";
import { useFetcher } from "../../../shared/hooks/useFetcher";

export const RouterGridComponent = ({
  data,
  fields,
}: {
  data: IRouter;
  fields: IGridListField[];
}) => {
  const [currentData, setCurrentData] = useState<IRouter>(data);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [showDisable, setShowDisable] = useState<boolean>(false);

  const loadCustomerFetcher = () => loadCustomersByRouterService(data.IP);

  const { data: customers } = useFetcher({ fetcher: loadCustomerFetcher });
  const selectedCustomers = customers.map((e) => e.id);

  const handleEditModal = () => setShowEdit(!showEdit);
  const handleDisableModal = () => setShowDisable(!showDisable);

  async function handleUpdate(data: IRouter) {
    const response = await updateRouterService(data);
    setCurrentData(response);
    handleEditModal();
  }

  async function handleDisableCustomer() {
    const customer = await disableRouterService(data.IP);
    handleDisableModal();
    setCurrentData(customer);
  }

  if (!currentData.active) return <></>;

  return (
    <>
      <GridItemList $w={fields[0].width}>{currentData.IP}</GridItemList>
      <GridItemList $w={fields[1].width}>{currentData.IPv6}</GridItemList>
      <GridItemList $w={fields[2].width}>
        {Brand[currentData.brand]}
      </GridItemList>
      <GridItemList $w={fields[3].width}>
        {currentData?.model ?? ""}
      </GridItemList>
      <GridItemList $w={fields[4].width}>
        <ul className="icons">
          <li>
            <MdEditSquare
              onClick={handleEditModal}
              className="icon edit"
              color="#240dee"
            />
          </li>
          <li>
            <FaTrash
              onClick={handleDisableModal}
              className="icon"
              color="#ff0000"
            />
          </li>
        </ul>
      </GridItemList>
      {showEdit && (
        <CreateOrEditRouterModal
          data={{ ...currentData, customers: selectedCustomers }}
          action={handleUpdate}
          editMode={true}
          handleCloseModal={handleEditModal}
        />
      )}
      {showDisable && (
        <ConfirmModal
          message="Deseja desabilitar este roteador?"
          action={handleDisableCustomer}
          cancelAction={handleDisableModal}
        />
      )}
    </>
  );
};
