import React from "react";
import clasess from './MySelect.module.css'

const MySelect = ({ option, defaultValue, value ,onChange }) => {

    return (
        <div>
            <select
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option value="value1">{defaultValue}</option>
                {
                    option.map(
                        opt => <option key={opt.value} value={opt.value}>{opt.name}</option>

                    )
                }

            </select>
        </div>
    )
}

export default MySelect