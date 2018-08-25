## OstLoading 示例

  
```jsx
:::$demo

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
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
                    onClick={()=>this.setState({isLoading: !this.state.isLoading})} > 
                    {this.state.isLoading ? '关闭 Loading' : '显示 Loading'}
                </button>
                <OstLoading isLoading={this.state.isLoading} />
            </div>
       )
    }
:::$
```
