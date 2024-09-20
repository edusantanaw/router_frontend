import Select from "../../../../shared/components/select";
import TextField from "../../../../shared/components/textField";
import cpfCnpjMask from "../../utils/cpfCnpjMask";
import dateMask from "../../utils/dateMask";
import { IAction, IState } from "./types";

const LEGAL_PERSON_TYPE = 0;

const PersonOptions: Record<number, string> = {
  0: "Fisica",
  1: "Juridica",
};

interface Props {
  customerState: IState;
  customerDispatch: React.Dispatch<IAction<IState>>;
  handleCep: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

const FormFields = ({ customerState, customerDispatch, handleCep }: Props) => {
  return (
    <div className="fields">
      <TextField
        value={customerState.name}
        onChange={(e) =>
          customerDispatch({ type: "name", value: e.target.value })
        }
        name="name"
        placeholder="Nome"
        title="Nome:"
        $w="100%"
      />
      <div className="row">
        <Select
          value={PersonOptions[customerState.personType]}
          title="Tipo"
          $w="100%"
          options={["Fisica", "Juridica"]}
          handleChange={(value) =>
            customerDispatch({ type: "personType", value })
          }
        />
        <TextField
          name="cpfCnpj"
          $w="100%"
          placeholder={
            customerState.personType === LEGAL_PERSON_TYPE ? "CPF" : "CNPJ"
          }
          title={
            customerState.personType === LEGAL_PERSON_TYPE ? "CPF:" : "CNPJ:"
          }
          value={customerState.cpfCnpj}
          onChange={(e) =>
            customerDispatch({
              type: "cpfCnpj",
              value: cpfCnpjMask(e.target.value),
            })
          }
        />
      </div>
      {customerState.personType === LEGAL_PERSON_TYPE && (
        <TextField
          value={customerState.dateOfBirth}
          onChange={(e) =>
            customerDispatch({
              type: "dateOfBirth",
              value: dateMask(e.target.value),
            })
          }
          name="dateOfBirth"
          placeholder="20/12/2002"
          title="Data de aniversario:"
          $w="100%"
        />
      )}
      <div className="row">
        <TextField
          value={customerState.cep}
          onChange={handleCep}
          name="cep"
          placeholder="cep"
          title="CEP:"
          $w="100%"
        />
        <TextField
          value={customerState.city}
          onChange={(e) =>
            customerDispatch({
              type: "city",
              value: e.target.value,
            })
          }
          name="city"
          placeholder="cidade"
          title="Cidade:"
          $w="100%"
        />
      </div>
      <div className="row">
        <TextField
          value={customerState.state}
          onChange={(e) =>
            customerDispatch({
              type: "state",
              value: e.target.value,
            })
          }
          name="state"
          placeholder="estado"
          title="Estado:"
          $w="100%"
        />
        <TextField
          value={customerState.province}
          onChange={(e) =>
            customerDispatch({
              type: "province",
              value: e.target.value,
            })
          }
          name="province"
          placeholder="bairro"
          title="Bairro:"
          $w="100%"
        />
      </div>
      <div className="row">
        <TextField
          value={customerState.street}
          onChange={(e) =>
            customerDispatch({
              type: "street",
              value: e.target.value,
            })
          }
          name="street"
          placeholder="Rua"
          title="Rua:"
          $w="100%"
        />
        <TextField
          value={customerState.number}
          onChange={(e) =>
            customerDispatch({
              type: "number",
              value: e.target.value,
            })
          }
          name="number"
          placeholder="100"
          title="Numero:"
          $w="100%"
        />
      </div>
    </div>
  );
};

export default FormFields;
