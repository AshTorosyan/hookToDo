import { useState } from "react"
import Button from "./components/Button/Button";
import { List } from "./components/List/List";
import Listitem from "./components/Listitem/Listitem";
import Textinline from "./components/Textinline/Textinline";
import { Wrapper } from "./ui/Wrapper/Wrapper"

const App = () => {
  const [users,setUsers] = useState([
    {name: 'Narek', surname: 'Xudoyan', id: 1},
    {name: 'Ash', surname: 'Saxatelyan', id: 2},
    {name: 'Ash', surname: 'Torosyan', id: 3}
  ]);
  const [nextId,setNextId] = useState(4);

  const deleteHandler = (id) => {
     const filtered = users.filter(el => el.id !== id);
     setUsers(filtered)
  }

  return (
   <Wrapper>
      <List>
        {users.map(user => {
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