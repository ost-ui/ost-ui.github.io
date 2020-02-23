## OstToast 示例

  
```jsx
import OstToast from 'ost-ui';

:::$demo
    constructor(props, context) {
        super(props, context);
        this.state = {text: ''};
    }

    show = () => {
        OstToast.show(this.state.text, 2);
    }

    render() {
       return(
            <div className='ost-toast-demo'>
                <input
                    className='ost-toast-demo-input'
                    onChange={e => this.setState({text: e.currentTarget.value})}
                    type='text'/>
                <button
                    className='ost-toast-demo-button'
                    onClick={this.show}>展示Toast</button>
            </div>
       )
    }
:::$
```

```css
<style>
.ost-toast-demo {
    width: 100%;
    height: 100%;
}

.ost-toast-demo-input {
    width: 80%;
    height: 44px;
    font-size: 14px;
    color: #666;
    margin: 10px 10%;
}

.ost-toast-demo-button {
    width: 80%;
    height: 46px;
    font-size: 14px;
    background: #FF6D00;
    color: #fff;
    margin: 10px 10%;
}

</style>

```
