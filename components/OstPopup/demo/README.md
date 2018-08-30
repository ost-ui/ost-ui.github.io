## OstPopup 示例


```jsx
:::$demo

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
       return( 
            <div style={{
                    width: '100%',
                    padding: '10px'
            }}>
                <button
                    style={{
                        width: 'calc(100% - 20px)',
                        height: '44px',
                        position: 'fixed',
                        bottom: '10px',
                        zIndex: '10000',
                        fontSize: '14px',
                        background: '#fff'
                    }}
                    onClick={()=>this.setState({show: !this.state.show})} > 
                    {this.state.show ? '关闭 popup' : '显示 popup ostPopup'}
                </button>
                <OstPopup show={this.state.show} />
            </div>
       )
    }
:::$
```
