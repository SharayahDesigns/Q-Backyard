import {useContext} from "react"
import {AuthContext} from "../../providers/AuthProvider"

const Home = () => {
  let auth = useContext(AuthContext)
  return (
    <div>
      <h1>Home</h1>
      <p> Hello user.email</p>
      <p>{JSON.stringify(auth)}</p>
    </div>
)
}
export default Home
