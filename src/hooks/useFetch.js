import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl) => {
  const [items, setItems] = useState();

  const getApi = (path) => {
    const url = `${baseUrl}${path}`;
    axios
      .get(url)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const createNewItems = (path, data) => {
    const url = `${baseUrl}${path}`;
    axios
      .post(url, data)
      .then((res) => {
        setItems([...items, res.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteItem = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios
      .delete(url)
      .then((res) => {
        const itemsAvailable = items.filter((item) => item.id !== id);
        setItems(itemsAvailable);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const updateItem = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios
      .put(url, data)
      .then((res) => {
        const itemsUpdated = items.map((item) => {
          if (item.id === id) return data;
          return item;
        });
        setItems(itemsUpdated);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return [items, getApi, createNewItems, deleteItem, updateItem];
};

export default useFetch;
