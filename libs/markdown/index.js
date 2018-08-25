import React, {Component} from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';
import myMarked from 'marked';
import './md.less';


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

    getRawMarkup() {
      myMarked.setOptions({
        renderer: new myMarked.Renderer(),
        highlight: function(code) {
          return hljs.highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      });


      return { __html: myMarked(this.props.mdstr || '')};
    }

    render() {
        return (
            <div className="ost-md" dangerouslySetInnerHTML={this.getRawMarkup()} />
        );
    }
}

export default Markdown;