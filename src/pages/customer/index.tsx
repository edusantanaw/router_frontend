import { loadCustomersWithPagination } from "../../services/customer";
import { GridList, IGridListField } from "../../shared/components/gridList";
import { usePagination } from "../../shared/hooks/usePagination";
import { Title } from "../../shared/styles/title";
import { CustomerGridComponent } from "./components/CustomerGridComponent";
import { CustomerContainer } from "./styles";

const fields: IGridListField[] = [
  { name: "id", width: "25%" },
  { name: "Nome", width: "20%" },
  { name: "Cpf / CNPJ", width: "20%" },
  { name: "Aniversario", width: "20%" },
  { name: "tipo", width: "20%" },
];

export const CustomerPage = () => {
  const { data } = usePagination({
    fetcher: loadCustomersWithPagination,
    limit: 100,
  });
  return (
    <CustomerContainer>
      <Title>Clientes</Title>
      <GridList
        fields={fields}
        data={data}
        ItemComponent={CustomerGridComponent}
        identifier="id"
      />
    </CustomerContainer>
  );
};
