import { GridListContainer, Header } from "./style";

export type IGridListField = {
  name: string;
  width?: string;
};

interface Props<T> {
  fields: IGridListField[];
  data: T[];
  ItemComponent: (props: { data: T; fields: IGridListField[] }) => JSX.Element;
  identifier: keyof T;
}

export function GridList<T>({
  fields,
  data,
  ItemComponent,
  identifier,
}: Props<T>) {
  return (
    <GridListContainer>
      <ul className="header">
        {fields.map((e) => (
          <Header key={e.name} $w={e.width}>
            {e.name}
          </Header>
        ))}
      </ul>
      <ul className="data">
        {data.map((e) => (
          <li className="field" key={String(e[identifier])}>
            <ItemComponent fields={fields} data={e} />
          </li>
        ))}
      </ul>
    </GridListContainer>
  );
}
