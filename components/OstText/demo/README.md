## OstText 示例

  
```jsx
:::$demo

    render() {
       return( 
            <div style={{
                    padding: '10px'
            }}>
                <OstText size="md" label="医院地址:" text="徐汇凯滨路徐汇凯滨路徐汇凯滨路徐汇凯滨路徐汇凯滨路徐汇凯滨路徐汇凯滨路徐汇凯滨路徐汇凯滨路徐汇凯滨路徐汇凯滨路徐汇凯滨路徐汇凯滨路徐汇凯滨路徐汇凯滨路徐汇凯滨路徐汇凯滨路徐汇凯滨路徐汇凯滨"></OstText>
                <OstWhiteSpace size="xl" />
                <OstText multiLine={false} type="success" size="xs" text="徐汇凯滨路1号，徐汇凯滨路路2号，徐汇凯滨路1号，徐汇凯滨路路2号"></OstText>
                <OstWhiteSpace />
                <OstText type="primary" text="徐汇凯滨路1号，徐汇凯滨路路2号，徐汇凯滨路1号，徐汇凯滨路路2号"></OstText>
                <OstWhiteSpace />
                <OstText type="warning" size="lg" label="医院地址:" text="徐汇凯滨路"></OstText>
                <OstWhiteSpace />
                <OstText size="xl" text="徐汇凯滨路哈哈哈"></OstText>
            </div>
       )
    }
:::$
```

### 组件 props 说明
| 事件名称 | 说明 | 类型 | 默认值 |
|---------|--------|---------|---------|
| size | <p>文本字体大小，可选值 <code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code>或者不设</p> | string | <p><code>md</code>14px</p>
| type | <p>文本字体类型，可选值 <code>primary</code>、<code>success</code>、<code>warning</code></p> | string | - |
| labe | label值 | string | - |
| text | 文本值 | string | - |
| multiLine | 文本是否支持多行显示 | boolean | true |
| fixedCls | class前缀 | string | <p><code>ost-text</code></p> |
| className | 样式类名 | string | 无 |
