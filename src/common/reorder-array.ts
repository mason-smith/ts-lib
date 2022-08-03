import zipObject from 'lodash.zipobject';

type DataProp = { id: string };

export function reorderArray<T extends DataProp, A extends DataProp>(array: Array<T>, sortedArray: Array<A>) {
  // isolate items to be switched and their respective indices
  const filteredItems = array.filter((item) => sortedArray.map(itemData).includes(item.id));
  const filteredItemIndices = filteredItems.map((item) => array.findIndex((i) => i.id === item.id));

  const { orderedItems } = getOrderedItems({ filteredItems, sortedArray });

  // create a dictionary so we can apply the value to the correct index
  const mappedItemWithIndex = zipObject(filteredItemIndices, orderedItems as Array<T>);

  const reorderedArray = array.map((item, index) => {
    // this allows us to maintain the integrity of the value's position,
    if (mappedItemWithIndex[index]) {
      return mappedItemWithIndex[index];
    }
    return item;
  });

  return { reorderedArray };
}

function itemData<T extends DataProp>(sortedItem: T) {
  return sortedItem.id;
}

type GetOrderedItemsArgs<T, A> = {
  filteredItems: Array<T>;
  sortedArray: Array<A>;
};

/**
 *
 * @returns filtered items in the order dictated by the sorted array
 */
function getOrderedItems<T extends DataProp, A extends DataProp>({
  filteredItems,
  sortedArray,
}: GetOrderedItemsArgs<T, A>) {
  // create a Map to aid our search and sort
  const filteredItemsMap = new Map(filteredItems.map((item) => [item.id, item]));
  // set the items in the correct order
  const orderedItems = sortedArray
    .map((item) => filteredItemsMap.get(item.id))
    // remove any potential undefined or null values
    .filter((i) => i) as Array<T>;

  return { orderedItems };
}
