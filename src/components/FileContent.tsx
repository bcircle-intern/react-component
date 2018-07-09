import React from "react";

type Props = {
    content: string
    onChange: (string) => void;
}

type State = {
    content: string
}

export class FileContent extends React.Component<Props, State> {

    constructor(props) {
        super(props)
        this.state = {
            content: props.content
        }
    }

    public componentWillReceiveProps(props: Props) {
        this.state = {
            content: props.content
        }
    }

    onChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    onSave = (e) => {
        this.props.onChange(this.state.content)
    }

    render() {
        return (
            <div style={{ padding: "20px" }}>
                <div>Content</div>
                <textarea style={{ width: 500, height: 200 }} onChange={this.onChange} value={this.state.content}></textarea>
                <div>
                    <button onClick={this.onSave}>Save</button>
                </div>
            </div>
        )
    }
}