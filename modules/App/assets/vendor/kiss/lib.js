import "./components/dropdown/dropdown.js";
import "./components/dialog/dialog.js";
import "./components/offcanvas/offcanvas.js";
import "./components/popoutmenu/popoutmenu.js";
import "./components/parallax/parallax.js";
import "./components/row/row.js";
import "./components/svg/svg.js";
import "./components/tooltip/tooltip.js";
import {on, onMutation} from "./js/events.js";

HTMLElement.prototype.on = function(event, selector, handler) {
    return on(this, event, selector, handler)
};

HTMLElement.prototype.onMutation = function(cb) {
    return onMutation(cb, this)
};