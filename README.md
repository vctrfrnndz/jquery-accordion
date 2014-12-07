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

<table>
<thead>
<tr>
<th>Name</th>
<th>Default</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>transitionSpeed</td>
<td>300</td>
<td>int</td>
<td>Transition speed on miliseconds.</td>
</tr>
<tr>
<td>transitionEasing</td>
<td>'ease'</td>
<td>string</td>
<td>CSS value for easing</td>
</tr>
<tr>
<td>controlElement</td>
<td>'[data-control]'</td>
<td>string</td>
<td>CSS selector for the element acting as a button inside accordions.</td>
</tr>
<tr>
<td>contentElement</td>
<td>'[data-content]'</td>
<td>string</td>
<td>CSS selector for the element containing hide/show content.</td>
</tr>
<tr>
<td>groupElement</td>
<td>'[data-accordion-group]'</td>
<td>string</td>
<td>CSS selector for a parent element containing a group of accordions.</td>
</tr>
<tr>
<td>singleOpen</td>
<td>true</td>
<td>boolean</td>
<td>Opens a single accordion a time. If false, multiple accordions can be open a time.</td>
</tr>
</tbody>
</table>

**Events**

`accordion.open` fires when any accordion opens

`accordion.close` fires when any accordion closes

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

For a group of accordions, you can use the `data-accordion-group` attribute on a parent, this will allow you to activate/deactivate the single open behavior by setting `singleOpen` to true/false.

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
