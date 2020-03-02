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
            <div className='demo-box'>
                <button 
                    className='demo-button'
                    onClick={()=>this.setState({isLoading: !this.state.isLoading})} > 
                    {this.state.isLoading ? '关闭 Loading' : '显示 Loading'}
                </button>
                <OstLoading isLoading={this.state.isLoading} />
            </div>
       )
    }
:::$
```

```css
<style>
.demo-box {
    width: 100%;
    padding: 10px;
}

.demo-button {
    width: calc(100% - 20px);
    height: 44px;
    position: fixed;
    bottom: 10px;
    z-index: 10000;
    font-size: 14px;
    background: #FF6D00;
    color: #fff;
    border-radius: 100px;
}

</style>

```
