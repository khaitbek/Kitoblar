import { useEffect,  useState } from 'react'
import { getUser } from "../API/api";
import { useSelector } from "react-redux";
import { auth } from "../features/AuthSlicer";
export default function useCurrentUser() {
    const [user, setUser] = useState<any>({});
    const {token} = useSelector(auth);
    useEffect(() => {
        (async () => {
            const userData = await getUser(token);
            setUser(userData.data);
        })();
    }, []);
    return [user, setUser];
}
