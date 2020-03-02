import React from "react";
import { shallow, mount } from "enzyme";

let id = 0;

class Factory {
  constructor() {
    this.appContainer = null;
    this.appContainers = [];
    this.appId = 'App';
  }

  createAppContainer() {
    const ele = document.createElement('div');
    ele.id = this.appId + (++id);
    ele.key = ele.id;
    this.appContainer = ele;
    this.appContainers.push(ele);
    document.body.appendChild(ele);
  }

  createComponent(comp) {
    this.createAppContainer();
    return mount(comp, {
      attachTo: this.appContainer
    });
  }

  destroyAppContainer(isAll) {
    if(isAll) {
      this.appContainers.forEach(e => {
        e && e.remove();
      });
    } else {
      this.appContainer && this.appContainer.remove();
    }
  }

  shallowDefault(Comp) {
    return shallow(Comp);
  }

  mountDefault(Comp, Container = null) {
    return Container ?
      mount(
        <Container>
          { Comp }
        </Container>) :
      mount(Comp);
  }
}

/**
 * 移除Dom当中的指定节点
 * @param {Object|String} select id选择器|类选择器
 */
export const destroyElement = (select) => {
  const nodeList = document.querySelectorAll('*');
  let nodeResult = [];
  for(let nodeItem of nodeList) {
    let res;
    if(select.substring(0, 1) === '#') {
      // const _select = select.substring(1);
      if(nodeItem.id === select.substring(1) || nodeItem.id.indexOf(select.substring(1)) > -1) {
        res = nodeItem;
        nodeResult.push(res);
      }
    } else {
      if(nodeItem.className === select || nodeItem.className.indexOf(select) > -1) {
        res = nodeItem;
        nodeResult.push(res);
      }
    }
  }
  nodeResult.forEach(ele => {
    ele.parentNode.removeChild(ele);
  });
};
/**
 * 创建自定义事件
 * @param name mouse|click|key
 * @param ele DOM元素
 * @param opt
 * @returns {*}
 */
export const createEvent = (name, ele, opt = {}) => {
  let eventType;
  switch(name) {
    case /^mouse|click/.test(name):
      eventType = 'MouseEvents';
      break;
    case /^key/.test(name):
      eventType = 'KeyboardEvent';
      break;
    default:
      eventType = 'HTMLEvents';
  }
  const evt = document.createEvent(eventType);
  evt.initEvent(name, ...opt);
  ele.dispatchEvent ? ele.dispatchEvent(evt) : ele.fireEvent('on' + name, evt);
  return ele;
};
/**
 * 延迟
 * @param delay 事件
 * @returns {Promise<any>}
 */
export const defer = (delay = 0) => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve()
    }, delay);
  })
};

/**
 * 监听
 * @param obj 被监听的对象
 * @param prop 传入被监听的属性名和回调方法
 */
export const monitor = (obj, props) => {
  const describe = Object.create(null);
  Object.keys(props).forEach(propName => {
    describe[propName] = {
      get: function() {
        if(typeof obj[propName] === 'function') {
          return function() {
            typeof props[propName] === 'function' && props[propName]();
          }
        } else {
          typeof props[propName] === 'function' && props[propName]();
        }
      }
    };
  });
  Object.defineProperties(obj, describe);
};

export default new Factory();
