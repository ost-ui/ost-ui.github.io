import React, {Component} from 'react';
import prismjs from 'prismjs';
import 'prismjs/themes/prism.css';
import marked from 'marked';

class Markdown extends Component {
    constructor(props) {
        super(props);
        const { mdstr } = props;
        
        if (mdstr && typeof mdstr !== 'string') {
            const e = new Error();
            e.message = `Markdown mdstr must be md string!`
            throw e
        }
    }

    componentDidMount() {
        this.upDataInnerHTML();
    }

    componentWillUpdate() {
        this.upDataInnerHTML();

    }

    upDataInnerHTML = () => {
        const { mdstr } = this.props;
        prismjs.highlightAll();
        this.refs.md.innerHTML = marked(mdstr);
    }

    render() {
        return (
            <div ref='md' />
        );
    }
}

export default Markdown;