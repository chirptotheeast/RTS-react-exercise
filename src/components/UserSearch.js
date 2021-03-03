import React from "react"
import { useSelector } from "react-redux"

export default function UserSearch() {
    const userSearch = useSelector((state) => state.userInput)

    return (
        <div>
            {userSearch?.map((input) => (
                <div key={input}>{input}</div>
            ))}
         
        </div>
    )
}