import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
function App() {
  type ItemType = {
    id: number;
    name: string;
  };
  const [items, setItems] = useState<ItemType[]>();

  useEffect(() => {
    const fetchItems = async () => {
      const resItems: ItemType[] = await API.get('myapi', '/item', {});
      console.log(resItems);
      setItems(resItems);
    };
    fetchItems();
  }, []);
  return <div className=''></div>;
}

export default App;
