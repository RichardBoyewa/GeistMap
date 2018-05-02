import React, { Component } from 'react'
import './styles.scss'

import testAnnotations from "./test-highlights";
import PdfViewer from '../SourcePdfViewer'
import PdfAnnotations from '../SourcePdfAnnotations'
import SourceLoader from '../SourceLoader'

class DerivedDocument extends React.Component {
    /*
     * A summary of a parent document
     */

    constructor(props) {
        super(props)
    }

    render() {
        const {  } = this.props

        return (
            <div className="derivedDocument">
            </div>
        )
    }
}

class SourcePDF extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { source } = this.props

        return (
            <div className="sourcePDF">
                <PdfViewer url={source.url} annotations={source.annotations} />
                <PdfAnnotations annotations={source.annotations} />
                <DerivedDocument />
            </div>
        )
    }
}

class SourceDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const { source } = this.props

        const source = {
            type: "pdf",
            url: "https://arxiv.org/pdf/1708.08021.pdf",
            annotations: testAnnotations,
        }

        let sourceComponent;

        switch(source.type) {
            case "pdf":
                sourceComponent = <SourcePDF source={source} />
        }

        return (
            <div className="sourceDetail">
                { sourceComponent }
            </div>
        )
    }
}

class SourceDetailView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {  } = this.props

        return (
            <SourceLoader>
                { source => (
                    <SourceDetail
                        source={source}
                    />
                )}
            </SourceLoader>
            
        )
    }
}

export default SourceDetailView
