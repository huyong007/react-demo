import { Component } from 'react';


class MutationObserver extends Component {
  state = {
    text: 1,
  }

  componentDidMount() {
    this.initBreadcrumbDomListening()
  }

  changeText() {
    this.setState((prevState) => {
      return { text: prevState.text + 1 }
    })
  }


  initBreadcrumbDomListening() {
    try {
      let listeners = [];
      let doc = window.document;
      let MutationObserver = window.MutationObserver || window['WebKitMutationObserver'];
      let observer;
      let lastTitles = '';


      function ready(selector, fn) {
        // 储存选择器和回调函数
        listeners.push({
          selector: selector,
          fn: fn
        });
        observer = new MutationObserver(check);
        observer.observe(doc.getElementById('MutationObserver'), {
          childList: false,//：子节点的变动（指新增，删除 或者更改）
          attributes: false,//：属性的变动。
          characterData: true,//：节点内容或节点文本的变动。
          // 以上三个必须一个位true
          subtree: true,//：布尔值，表示是否将该观察器应用于该节点的所有后代节点。
          attributeOldValue: false,//：布尔值，表示观察attributes变动时，是否需要记录变动前的属性值。
          characterDataOldValue: true,//：布尔值，表示观察characterData变动时，是否需要记录变动前的值。
          // attributeFilter: ['data-sensors-track'],//：数组，表示需要观察的特定属性（比如['class','src']）。
        });
      }

      // @ts-ignore
      function check(records) {
        records.forEach(function (record) {
          const { type, target } = record;
          if (type === 'childList') {
            console.log(target, 'childList')
          } else if (type === 'characterData') {
            console.log(target, 'characterData')
          } else {
            console.log('strange')
          }
        })

        // listener.fn.call(element, element, listener.selector);
      }
      function domChangeCallback(node, selector) {
        if (selector === `.${selector}`) {
          console.log(`--------------.${selector}`)
        }
      }
      ready('.MutationObserver', domChangeCallback)
    } catch (error) {
      console.log(error, 'error')
    }

  }

  render() {
    return (
      <div id="MutationObserver" >
        <div>{`当前文本是${this.state.text}`}</div>
        <button onClick={()=>this.changeText()}>changeText</button>
      </div>
    )
  }
}

export default MutationObserver;