import React from "react";

// CUSTOM REACT HOOK
function useLocalStorage(itemName, initialValue) {

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItems;
  
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItems = initialValue;
    } else {
      parsedItems = JSON.parse(localStorageItem);
    }
    const [item, SetItem] = React.useState(parsedItems);
  
    const saveItem = (newItem) => {
      const strTaks = JSON.stringify(newItem);
      localStorage.setItem(itemName, strTaks);
      SetItem(newItem)
    } 
    return [
      item,
      saveItem
    ];
  };

  export {useLocalStorage
  };