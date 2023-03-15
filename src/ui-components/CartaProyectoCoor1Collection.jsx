/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Proyecto } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CartaProyectoCoor1 from "./CartaProyectoCoor1";
import { Collection } from "@aws-amplify/ui-react";
export default function CartaProyectoCoor1Collection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Proyecto,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          Profesor: await item.Profesor,
          Estudiantes: await item.Estudiantes.toArray(),
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "CartaProyectoCoor1Collection")}
      {...rest}
    >
      {(item, index) => (
        <CartaProyectoCoor1
          proyecto={item}
          height="auto"
          width="auto"
          margin="1em 1px 1em 1em"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CartaProyectoCoor1>
      )}
    </Collection>
  );
}
