import React, { useEffect, useState } from 'react'

export default function useSearch() {
    const [search, setSearch] = useState<object>({});
    // useEffect(()=>{
        
    // },[]);
    return [search];
}
