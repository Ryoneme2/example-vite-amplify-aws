import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
function App() {
  type User = {
    name: string;
    surname: string;
  };
  type Product = {
    id: string;
    pName: string;
  };
  type ResponseWrapper<T> = {
    success: string;
    url: string;
    data: T;
  };

  const [users, setUsers] = useState<User[]>();
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchItems = async () => {
      const resUsers: ResponseWrapper<User[]> = await API.get(
        'apiv1',
        '/users/1',
        {}
      );
      // const resProducts: Product[] = await API.get('appAPi', '/products', {});
      console.log(resUsers);

      setUsers(resUsers.data);
      // setProducts(resProducts);
    };
    fetchItems();
  }, []);

  if (!users)
    return (
      <div>
        <span>loading</span>
      </div>
    );

  return (
    <div className="">
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            {user.name} {user.surname}
          </li>
        ))}
      </ul>
      <h1>Product</h1>
      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>{product.pName}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
