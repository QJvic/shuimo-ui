/**
 * @description input-number api type
 * @author 阿怪
 * @date 2022/4/17 00:49
 * @version v1.0.0
 *
 * @name w-input-number
 * @docDescription InputNumber component with wash-painting-ui style.
 *                 水墨组件数字输入框的组件。
 * @docUrl https://wash-painting.com/input#number
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

export declare type InputNumberProps = {
  /**
   * @description input-number modelValue
   * @type number
   * @default 0
   */
  modelValue?: number;
  /**
   * @description input-number max
   * @type number
   * @default Infinity
   */
  max?: number,
  /**
   * @description input-number min
   * @type number
   * @default -Infinity
   */
  min?: number,
}
