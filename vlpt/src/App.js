import React, { useRef, useState } from 'react';
import UserList from './component/UserList';
import CreateUser from './component/CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
  ]);

  const nextId = useRef(3); // 파라미터는 current 값의 기본값
  // nextId를 수정 및 조회할 때에는 .current의 값을 수정/조회하면 된다

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;