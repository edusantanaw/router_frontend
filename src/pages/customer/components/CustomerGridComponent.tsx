import { ICustomer } from "../../../@types/customer";
import { IGridListField } from "../../../shared/components/gridList";
import { GridItemList } from "../../../shared/components/gridList/style";

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
  return (
    <>
      <GridItemList $w={fields[0].width}>{data.id}</GridItemList>
      <GridItemList $w={fields[1].width}>{data.name}</GridItemList>
      <GridItemList $w={fields[2].width}>{data.cpfCnpj}</GridItemList>
      <GridItemList $w={fields[3].width}>
        {data?.dateOfBirth ?? ""}
      </GridItemList>
      <GridItemList $w={fields[4].width}>
        {PersonOptions[data.personType]}
      </GridItemList>
    </>
  );
};
