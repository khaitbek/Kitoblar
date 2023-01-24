import { useState } from "react"

type useToggleTypes = [
    value: boolean,
    toggleValue: (userValue?: boolean) => void
]

export default function useToggle(initialValue: boolean): useToggleTypes {
    const [value, setValue] = useState<boolean>(initialValue);
    function toggleValue(userValue?:boolean){
        setValue(typeof userValue === "boolean" ? userValue : previousValue => !previousValue);
    }
    return [value, toggleValue]
}
