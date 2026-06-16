import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { setAge, setName } from "../../store/userSlice"

 
function Register(){
    const data = useAppSelector((store)=>store.user)
    console.log(data)
    const dispatch = useAppDispatch()
    dispatch(setName("Kumar Shah"))
    dispatch(setAge(61))
    //useDispatch() used to insert or update. ALso to trigger action if needed.
    //useSelector() used to select or get data.
    return (
        <h1>Register page</h1>
    )
}

export default Register
