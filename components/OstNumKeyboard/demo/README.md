## OstNumKeyboard 示例

  
```jsx
:::$demo
class Demo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
       return( 
            <div>
                <OstNumKeyboard
                    show={this.state.show}
                    onChange={v => console.log('onChange>>>', v)} />
            </div>
       )
    }
}
:::$
```
