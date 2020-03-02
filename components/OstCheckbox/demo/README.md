## OstDemo 示例

  
```jsx
:::$demo
    render() {
       return(
        <div>
        <OstList.card title='OstCheckbox'>
          <OstList title='可选'>
            <div className="alignCenter">
                <OstCheckbox defaultChecked={true} onClick={ck => {console.log(ck);}}/>
            </div>
          </OstList>
          <OstList title='不可选-默认选中'>
            <div className="alignCenter">
                <OstCheckbox disabled={true} defaultChecked={true} onClick={ck => {console.log(ck);}}/>
            </div>
          </OstList>
          <OstList title='不可选-默认未选'>
            <div className="alignCenter">
                <OstCheckbox disabled={true} defaultChecked={false} onClick={ck => {console.log(ck);}}/>
            </div>
          </OstList>
        </OstList.card>
        </div>
       )
    }
:::$
```

```css
<style>
.alignCenter {
    height: 100%;
    display: flex;
    align-items: center;
}
</style>

```

