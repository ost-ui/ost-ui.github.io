import React, {Component} from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atelier-sulphurpool-light.css';
import Remarkable from 'remarkable';
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
    }

    getRawMarkup() {
      const md = new Remarkable({
          html: false,        // Enable HTML tags in source
          xhtmlOut: false,        // Use '/' to close single tags (<br />)
          breaks: false,        // Convert '\n' in paragraphs into <br>
          langPrefix: 'language-',  // CSS language prefix for fenced blocks
          linkify: false,        // Autoconvert URL-like text to links
          // Enable some language-neutral replacement + quotes beautification
          typographer: false,
          // Double + single quotes replacement pairs, when typographer enabled,
          // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
          quotes: '“”‘’',
          // Highlighter function. Should return escaped HTML,
          // or '' if the source string is not changed
          highlight: function (str, lang) {
            // const testStr = hljs.highlightBlock(lang);
            // console.log(testStr);
            
              if (lang && hljs.getLanguage(lang)) {
                try {
                  return hljs.highlight(lang, str).value;
                } catch (err) {
                  console.log(`hljs err: ${err}`);
                }
              }
          
              try {
                return hljs.highlightAuto(str).value;
              } catch (err) {
                console.log(`hljs err: ${err}`);
              }
          
              return ''; // use external default escaping

           }
        });

      return { __html: md.render(this.props.mdstr) };
    }

    render() {
        return (
            <div className="ost-md" dangerouslySetInnerHTML={this.getRawMarkup()} />
        );
    }
}

export default Markdown;