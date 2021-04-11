import HelloWorld from './HelloWorld';
import Vue from "Vue";

new Vue({
    el: '#app',
    render: h=> h(HelloWorld),
})