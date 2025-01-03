// Mouse Events
element.addEventListener("click", () => { 
    console.log("Mouse clicked!");  // Triggered when the mouse button is clicked on the element
});
element.addEventListener("dblclick", () => { 
    console.log("Mouse double-clicked!");  // Triggered when the mouse button is double-clicked
});
element.addEventListener("mousedown", () => { 
    console.log("Mouse button pressed down!");  // Triggered when a mouse button is pressed down
});
element.addEventListener("mouseup", () => { 
    console.log("Mouse button released!");  // Triggered when a mouse button is released
});
element.addEventListener("mousemove", (event) => { 
    console.log(`Mouse moved to X: ${event.clientX}, Y: ${event.clientY}`);  // Triggered when the mouse moves over the element
});
element.addEventListener("mouseenter", () => { 
    console.log("Mouse entered the element!");  // Triggered when the mouse enters the element
});
element.addEventListener("mouseleave", () => { 
    console.log("Mouse left the element!");  // Triggered when the mouse leaves the element
});
element.addEventListener("contextmenu", (event) => { 
    event.preventDefault();  // Prevents the default context menu from appearing
    console.log("Right-clicked!");  // Triggered when the right-click is performed
});
element.addEventListener("dragstart", () => { 
    console.log("Drag started!");  // Triggered when the drag operation begins
});
element.addEventListener("drag", () => { 
    console.log("Element is being dragged!");  // Triggered as the element is being dragged
});
element.addEventListener("dragend", () => { 
    console.log("Drag operation ended!");  // Triggered when the drag operation ends
});
element.addEventListener("dragover", (event) => { 
    event.preventDefault();  // Necessary to allow dropping of the dragged element
    console.log("Element is being dragged over!");  // Triggered when a dragged element is over the target
});
element.addEventListener("dragenter", () => { 
    console.log("Element entered the drop target!");  // Triggered when a dragged element enters the target area
});
element.addEventListener("dragleave", () => { 
    console.log("Element left the drop target!");  // Triggered when a dragged element leaves the target area
});
element.addEventListener("drop", (event) => { 
    event.preventDefault();  // Prevents the default action (e.g., opening a file)
    console.log("Element dropped!");  // Triggered when the dragged element is dropped onto the target
});
element.addEventListener("wheel", (event) => { 
    console.log(`Wheel scrolled! Delta: ${event.deltaY}`);  // Triggered when the mouse wheel is scrolled
});

// Keyboard Events
element.addEventListener("keydown", (event) => { 
    console.log(`Key pressed: ${event.key}`);  // Triggered when a key is pressed down
});
element.addEventListener("keyup", (event) => { 
    console.log(`Key released: ${event.key}`);  // Triggered when a key is released
});
element.addEventListener("keypress", (event) => { 
    console.log(`Key pressed (keypress): ${event.key}`);  // Triggered when a key is pressed (deprecated, use keydown instead)
});

// Focus Events
element.addEventListener("focus", () => { 
    console.log("Element focused!");  // Triggered when an element gains focus
});
element.addEventListener("blur", () => { 
    console.log("Element lost focus!");  // Triggered when an element loses focus
});

// Form Events
element.addEventListener("submit", () => { 
    console.log("Form submitted!");  // Triggered when a form is submitted
});
element.addEventListener("reset", () => { 
    console.log("Form reset!");  // Triggered when a form is reset
});
element.addEventListener("input", () => { 
    console.log("Input changed!");  // Triggered when an input field's value changes
});
element.addEventListener("change", () => { 
    console.log("Input value changed!");  // Triggered when the value of a form element changes and loses focus
});
element.addEventListener("focusin", () => { 
    console.log("Focus in!");  // Triggered when an element or any of its descendants gains focus (bubbles)
});
element.addEventListener("focusout", () => { 
    console.log("Focus out!");  // Triggered when an element or any of its descendants loses focus (bubbles)
});

// Touch Events
element.addEventListener("touchstart", () => { 
    console.log("Touch start!");  // Triggered when a touch point is placed on the touch surface
});
element.addEventListener("touchend", () => { 
    console.log("Touch end!");  // Triggered when a touch point is removed from the touch surface
});
element.addEventListener("touchmove", () => { 
    console.log("Touch move!");  // Triggered when a touch point moves along the touch surface
});
element.addEventListener("touchcancel", () => { 
    console.log("Touch canceled!");  // Triggered when a touch event is interrupted
});

// Window Events
window.addEventListener("resize", () => { 
    console.log("Window resized!");  // Triggered when the window is resized
});
window.addEventListener("scroll", () => { 
    console.log("Window scrolled!");  // Triggered when the window or an element is scrolled
});
window.addEventListener("load", () => { 
    console.log("Window loaded!");  // Triggered when the window has finished loading
});
window.addEventListener("unload", () => { 
    console.log("Window unloaded!");  // Triggered when the window is being unloaded
});
window.addEventListener("beforeunload", () => { 
    console.log("Window before unload!");  // Triggered before the window is unloaded (can be used to warn the user)
});
window.addEventListener("hashchange", () => { 
    console.log("Hash changed!");  // Triggered when the fragment identifier (URL hash) changes
});

// Media Events
element.addEventListener("play", () => { 
    console.log("Media started playing!");  // Triggered when media (audio or video) starts playing
});
element.addEventListener("pause", () => { 
    console.log("Media paused!");  // Triggered when media (audio or video) is paused
});
element.addEventListener("ended", () => { 
    console.log("Media ended!");  // Triggered when media (audio or video) ends
});
element.addEventListener("volumechange", () => { 
    console.log("Volume changed!");  // Triggered when the volume of media (audio or video) changes
});
element.addEventListener("timeupdate", () => { 
    console.log("Media time updated!");  // Triggered when the current time of media (audio or video) is updated
});

// Clipboard Events
element.addEventListener("copy", () => { 
    console.log("Content copied!");  // Triggered when content is copied to the clipboard
});
element.addEventListener("cut", () => { 
    console.log("Content cut!");  // Triggered when content is cut to the clipboard
});
element.addEventListener("paste", () => { 
    console.log("Content pasted!");  // Triggered when content is pasted from the clipboard
});

// Animation Events
element.addEventListener("animationstart", () => { 
    console.log("Animation started!");  // Triggered when a CSS animation starts
});
element.addEventListener("animationend", () => { 
    console.log("Animation ended!");  // Triggered when a CSS animation ends
});
element.addEventListener("animationiteration", () => { 
    console.log("Animation iteration!");  // Triggered when a CSS animation completes one cycle
});

// Transition Events
element.addEventListener("transitionend", () => { 
    console.log("Transition ended!");  // Triggered when a CSS transition ends
});

// Pointer Events
element.addEventListener("pointerdown", () => { 
    console.log("Pointer down!");  // Triggered when a pointer (mouse, touch, stylus) is pressed
});
element.addEventListener("pointerup", () => { 
    console.log("Pointer up!");  // Triggered when a pointer is released
});
element.addEventListener("pointermove", () => { 
    console.log("Pointer move!");  // Triggered when a pointer moves
});
element.addEventListener("pointerenter", () => { 
    console.log("Pointer entered!");  // Triggered when a pointer enters the element
});
element.addEventListener("pointerleave", () => { 
    console.log("Pointer left!");  // Triggered when a pointer leaves the element
});
element.addEventListener("pointercancel", () => { 
    console.log("Pointer canceled!");  // Triggered when a pointer event is canceled
});

// Other Events
element.addEventListener("error", () => { 
    console.log("An error occurred!");  // Triggered when an error occurs (e.g., loading a file)
});
element.addEventListener("change", () => { 
    console.log("Change occurred!");  // Triggered when the value of an input element changes
});
element.addEventListener("submit", () => { 
    console.log("Form submitted!");  // Triggered when a form is submitted
});
element.addEventListener("reset", () => { 
    console.log("Form reset!");  // Triggered when a form is reset
});
