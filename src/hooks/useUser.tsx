import React, { useEffect, useState } from 'react'

export default function useUser() {
    const [user, setUser] = useState<object>({});
    // useEffect(()=>{

    // },[]);
    return [user];
}
