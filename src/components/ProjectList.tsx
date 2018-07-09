import React from "react";


type Props = {
    projectNames: string[]
    onChange: (string) => void
}

export class ProjectList extends React.Component<Props> {

    constructor(props) {
        super(props)
    }

    onChange = (e) => {
        var value = e.target.value
        this.props.onChange(value)
    }

    render() {
        return (
            <div style={{ padding: "20px" }}>
                <div>Project</div>
                <select onChange={this.onChange}>
                    {this.props.projectNames.map(x =>
                        <option value={x}>{x}</option>)
                    }
                </select>
            </div>
        )
    }
}