jQuery Accordion
================

Responsive, CSS powered, jQuery accordion plugin.

Jquery Accordion uses CSS transitions to animate opening/closing with a fallback to jQuery's animate when CSS transitions are not supported. It takes little configuration or code to use it on your project. [Try out the demo](//vctrfrnndz.github.io/jquery-accordion).

Supports IE9+ and modern browsers.

Developed by [@vctrfrnndz](//vctrfrnndz.com). Licensed under the MIT License.

**Usage**

```javascript
$('.accordion').accordion({
    "transitionSpeed": 400
});
```

**Options**

`transitionSpeed` - (default:300 type:int description:Transition speed on miliseconds.)

`transitionEasing` - (default:'ease' type:string description: CSS value for easing)

`controlElement` - (default: '[data-control]'    type: string description: CSS selector for the element acting as a button inside accordions.)

`contentElement` - (default: '[data-content]'    type: string description:CSS selector for the element containing hide/show content.)

`groupElement` - (default: '[data-accordion-group]'  type:string  description: CSS selector for a parent element containing a group of accordions.)

`singleOpen` - (default:true type:boolean    description: Opens a single accordion a time. If false, multiple accordions can be open a time.)

**Events**

`open:` fires when any accordion closes

`close:` fires when any accordion opens

**Sample Structure**

For a simple accordion/dropdown, use the following structure/data-attributes:

```html
<div data-accordion>
    <div data-control>Control</div>
    <div data-content>
        <div>Row</div>
        <div>Row</div>
        <div>Row</div>
    </div>
</div>
```

For a group of accordions, you can use the `data-accordion-group` attribute on a parent, this will allow you to activate/deactivate the single open behavior by setting ´singleOpen´ to true/false.

```html
<div data-accordion-group>
    <div class="accordion" data-accordion>
        <div data-control>Control</div>
        <div data-content>
            <div>Row</div>
            <div>Row</div>
            <div>Row</div>
        </div>
    </div>
    <div class="accordion" data-accordion>
        <div data-control>Control</div>
        <div data-content>
            <div>Row</div>
            <div>Row</div>
            <div>Row</div>
        </div>
    </div>
</div>
```
