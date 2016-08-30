import { Component } from 'rgui-ui-base';
import template from './index.rgl';
import headTemplate from './head.rgl';
import bodyTemplate from './body.rgl';
import { dom } from 'regularjs';

/**
 * @class Overlay
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {boolean=false}           options.data.open               <=> 当前为展开/收起状态
 * @param {string='click'}          options.data.trigger             => 触发方式。支持3种方式：`click`, `dblclick`, `hover`，默认为`click`。
 * @param {string='bottom-left'}    options.data.direction           => 展开方向。有12种方向：`top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`, `left-top`, `left-center`, `left-bottom`, `right-top`, `right-center`, `right-bottom`，默认为`bottom-left`。
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const Overlay = Component.extend({
    name: 'overlay',
    template,
    /**
     * @protected
     * @override
     */
    config() {
        this.defaults({
            open: false,
            trigger: 'click',
            direction: 'bottom-left',
            // @TODO animation: 'on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;',
        });
        this.supr();
        this.watch();
    },
    /**
     * @protected
     * @override
     */
    watch() {
        this.$watch('open', (newValue, oldValue) => {
            // 根据状态在Overlay.opens列表中添加/删除管理项
            const index = Overlay.opens.indexOf(this);
            if (newValue && index < 0)
                Overlay.opens.push(this);
            else if (!newValue && index >= 0)
                Overlay.opens.splice(index, 1);

            /**
             * @event change 展开/收起状态改变时触发
             * @property {object} sender 事件发送对象
             * @property {boolean} open 改变后的状态
             * @property {string} trigger 触发方式
             * @property {string} direction 展开方向
             */
            this.$emit('change', {
                sender: this,
                open: newValue,
                trigger: this.data.trigger,
                direction: this.data.direction,
            });
        });
    },
    /**
     * @protected
     * @override
     */
    destroy() {
        const index = Overlay.opens.indexOf(this);
        index >= 0 && Overlay.opens.splice(index, 1);
        this.supr();
    },
    /**
     * @method toggle(open) 展开/收起
     * @public
     * @param  {boolean} open 展开/收起状态。如果无此参数，则在两种状态之间切换。
     * @return {void}
     */
    toggle(open) {
        if (this.data.disabled)
            return;

        if (open === undefined)
            open = !this.data.open;
        this.data.open = open;

        /**
         * @event toggle 展开/收起时触发
         * @property {object} sender 事件发送对象
         * @property {boolean} open 展开/收起状态
         * @property {string} trigger 触发方式
         * @property {string} direction 展开方向
         */
        this.$emit('toggle', {
            sender: this,
            open,
            trigger: this.data.trigger,
            direction: this.data.direction,
        });
    },
});

// 处理点击toggle之外的地方后的收起事件。
Overlay.opens = [];
dom.on(document, 'click', (e) => {
    Overlay.opens.forEach((overlay, index) => {
        // 这个地方不能用stopPropagation来处理，因为展开一个overlay的同时要收起其他overlay
        const element = overlay.$refs.element;
        let element2 = e.target;
        while (element2) {
            if (element === element2)
                return;
            element2 = element2.parentElement;
        }
        overlay.toggle(false);
        overlay.$update();
    });
});

Overlay.Head = Component.extend({
    name: 'overlay.head',
    template: headTemplate,
});

Overlay.Body = Component.extend({ // @TODO r-animation={@(this.$outer.data.animation)}
    name: 'overlay.body',
    template: bodyTemplate,
});

export default Overlay;
