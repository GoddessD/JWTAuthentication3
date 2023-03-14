import React, { useContext } from "react";
import { Context } from '../store/appContext'

export const Characters = () => {
    const { store, actions } = useContext(Context)
    console.log(store.characters, "These are the Characters.")

    return (
        <div>
            {store.characters.name}
            hello
            {store.characters && store.characters.map((item, index) => {
                <div>
                    return (
                    <div key={index}>
                        hello
                        {item.name}
                    </div>
                    )
                </div>
            })}
        </div>
    )
}