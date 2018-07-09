import React from "react";

type Props = {
    fileNames: string[]
    onChange: (string) => void
}

export class FileList extends React.Component<Props> {

    constructor(props) {
        super(props)
    }

    onClick = (file) => (e) => {
        this.props.onChange(file);
    }

    render() {
        return (
            <div style={{ padding: "20px" }}>
                <div> Files </div>
                {this.props.fileNames.map((x, i) =>
                    <div key={x}>
                        <button onClick={this.onClick(x)}>{x}</button>
                    </div>
                )}
            </div>
        )
    }
}