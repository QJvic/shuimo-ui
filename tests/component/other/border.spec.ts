/**
 * @description 边框组件测试用例
 * @author 阿怪
 * @date 2022/5/2 10:50
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import WBorder from "../../../lib/other/border/WBorder";

describe('边框组件', () => {

  test('无参数渲染', () => {
    const wrapper = mount(WBorder,{
      slots:{
        default: '<div>测试</div>'
      }
    });
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div class=\\"w-border\\">
        <div class=\\"w-border-main\\">
          <div>测试</div>
        </div>
        <div class=\\"w-border-line w-border-top-line\\"></div>
        <div class=\\"w-border-line w-border-left-line\\"></div>
        <div class=\\"w-border-line w-border-right-line\\"></div>
        <div class=\\"w-border-line w-border-bottom-line\\"></div>
      </div>"
    `);
  });

})
