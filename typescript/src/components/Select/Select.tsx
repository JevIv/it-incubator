import React from "react";
import styles from "./Select.module.css";

export type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const selectedItem = props.items.find(i => i.value === props.value);
    return (
        <div className={styles.select}>
            <select>
                <option value="">Minsk</option>
                <option value="">Moscow</option>
                <option value="">Kiev</option>
            </select>
            <h3>{selectedItem && selectedItem.title}</h3>
            {props.items.map(i => <div key={i.value}>{i.title}</div>)}
        </div>
    )
}