import { useCallback, useRef, useState } from "react"
import Button from "./components/Button/Button";
import { List } from "./components/List/List";
import Listitem from "./components/Listitem/Listitem";
import Textinline from "./components/Textinline/Textinline";
import { Wrapper } from "./ui/Wrapper/Wrapper";
import Input from "./components/Input/Input";

const App = () => {
  const [users,setUsers] = useState([
    {name: 'Narek', surname: 'Xudoyan', id: 1},
    {name: 'Ash', surname: 'Saxatelyan', id: 2},
    {name: 'Ash', surname: 'Torosyan', id: 3}
  ]);
  const [nextId,setNextId] = useState(4);
  const [searchName,setSearchName] = useState('');
  const nextUserName = useRef('');
  const nextUserSurname = useRef('');

  const deleteHandler = (id) => {
     const filtered = users.filter(el => el.id !== id);
     setUsers(filtered)
  }

  const changeName = (event) => {
    setSearchName(event.target.value)
  }

  const filterItems = (item) => item.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase());

  const addUser = () => {
    const newUser = {
      name: nextUserName.current.value,
      surname: nextUserSurname.current.value,
      id: nextId
    }
    setNextId(nextId + 1);
    setUsers(users.concat(newUser))
  }

  return (
   <Wrapper>
    <Input onChange={changeName} />
      <Textinline>add user</Textinline>
      <Input propsRef={nextUserName} />
      <Input propsRef={nextUserSurname} />
      <br />
      <Button onClick={addUser}>add user</Button>
      <List>
        {users.filter(filterItems).map(user => {
          return (
            <Listitem key={user.id}>
              <Textinline>
                 {user.name} {user.surname}
              </Textinline>
              <Button onClick={() => deleteHandler(user.id)}>delete user</Button>
            </Listitem>
          )
        })}
      </List>
   </Wrapper>
  )
}

export default App