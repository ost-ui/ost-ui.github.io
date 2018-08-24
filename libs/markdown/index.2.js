import React, {Component} from 'react';
import prismjs from 'prismjs';
import 'prismjs/themes/prism.css';
import ReactMarkdown from 'react-markdown';
import './md.less'

class Markdown extends Component {
    constructor(props) {
        super(props);
        const { mdstr } = props;
        
        if (mdstr && typeof mdstr !== 'string') {
            const e = new Error();
            e.message = `Markdown mdstr must be md string!`
            throw e
        }
        prismjs.highlightAll();
    }

    render() {
        const { mdstr } = this.props;

        return (
            <ReactMarkdown source={mdstr} className="ost-md" />
        );
    }
}

export default Markdown;