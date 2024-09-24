import { ICustomer } from "../../../@types/customer";
import { IGridListField } from "../../../shared/components/gridList";
import { GridItemList } from "../../../shared/components/gridList/style";
import cpfCnpjMask from "../utils/cpfCnpjMask";
import { MdEditSquare } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import CreateOrEditModal from "./CreateOrEditModal";
import dataToState from "../utils/dataToState";
import {
  disableCustomerService,
  updateCustomerService,
} from "../../../services/customer";
import ConfirmModal from "../../../shared/components/confirmModal";
import { IState } from "./CreateOrEditModal/types";

const PersonOptions: Record<number, string> = {
  0: "Fisica",
  1: "Juridica",
};

export const CustomerGridComponent = ({
  data,
  fields,
}: {
  data: ICustomer;
  fields: IGridListField[];
}) => {
  const [currentData, setCurrentData] = useState<ICustomer>(data);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [showDisable, setShowDisable] = useState<boolean>(false);

  const handleEditModal = () => setShowEdit(!showEdit);
  const handleDisableModal = () => setShowDisable(!showDisable);

  async function handleUpdate(data: IState) {
    const mappedData = { ...currentData, ...dataToState.stateToData(data) };
    const response = await updateCustomerService(mappedData);
    setCurrentData(response);
    handleEditModal();
  }

  async function handleDisableCustomer() {
    const customer = await disableCustomerService(data.id);
    handleDisableModal();
    setCurrentData(customer);
  }

  if (!currentData.active) return <></>;

  return (
    <>
      <GridItemList $w={fields[0].width}>{currentData.name}</GridItemList>
      <GridItemList $w={fields[1].width}>
        {cpfCnpjMask(currentData.cpfCnpj)}
      </GridItemList>
      <GridItemList $w={fields[2].width}>
        {currentData.address.city}
      </GridItemList>
      <GridItemList $w={fields[3].width}>
        {currentData?.address.state ?? ""}
      </GridItemList>
      <GridItemList $w={fields[4].width}>
        {PersonOptions[currentData.personType]}
      </GridItemList>
      <GridItemList $w={fields[5].width}>
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
        <CreateOrEditModal
          data={dataToState.dataToState(currentData)}
          editMode={true}
          handleCloseModal={handleEditModal}
          action={handleUpdate}
        />
      )}
      {showDisable && (
        <ConfirmModal
          message="Deseja desabilitar este cliente?"
          action={handleDisableCustomer}
          cancelAction={handleDisableModal}
        />
      )}
    </>
  );
};
