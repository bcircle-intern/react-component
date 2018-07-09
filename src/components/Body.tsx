import React from "react";
import { FileContent } from "./FileContent";
import { ProjectList } from "./ProjectList";
import { FileList } from "./FileList"

function getFiles(project) {
    if (!project) return []
    else {
        return [
            `${project} File A`,
            `${project} File B`,
            `${project} File C`,
        ]
    }
}

function getFileContent(project, fileName) {
    return `Content of ${fileName}`
}

type State = {
    selectedProject: string
    selectedFile: string
    currentContent: string
}

export class Body extends React.Component<{}, State> {

    constructor(props) {
        super(props)

        this.state = {
            selectedProject: "",
            selectedFile: "",
            currentContent: ""
        }
    }

    private onProjectChange = (project) => {
        this.setState({
            selectedProject: project,
            currentContent: ""
        })
        console.log(project)
    }

    private onFileChange = (file) => {
        this.setState({
            selectedFile: file,
            currentContent: getFileContent(this.state.selectedProject, file)
        });
    }

    private onContentChange = (content) => {
        this.setState({
            currentContent: content
        });
        console.log(content);
    }

    public render() {
        var projects = ["Project A", "Project B", "Project C"]
        var files = getFiles(this.state.selectedProject)
        var content = this.state.currentContent
        return (
            <div>
                <h1>Body</h1>
                <div>
                    <ProjectList projectNames={projects} onChange={this.onProjectChange} />
                    <FileList fileNames={files} onChange={this.onFileChange} />
                    <FileContent content={content} onChange={this.onContentChange} />
                </div>
            </div >
        )
    }
}