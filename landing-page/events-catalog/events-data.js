const eventsData = [
  // Mouse Events
  {
    name: "onclick",
    category: "Mouse",
    description: "Fires when the user clicks on an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onclick.asp"
  },
  {
    name: "ondblclick",
    category: "Mouse",
    description: "Fires when the user double-clicks on an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_ondblclick.asp"
  },
  {
    name: "onmousedown",
    category: "Mouse",
    description: "Fires when a mouse button is pressed down on an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onmousedown.asp"
  },
  {
    name: "onmouseup",
    category: "Mouse",
    description: "Fires when a mouse button is released over an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onmouseup.asp"
  },
  {
    name: "onmousemove",
    category: "Mouse",
    description: "Fires when the mouse pointer moves over an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onmousemove.asp"
  },
  {
    name: "onmouseover",
    category: "Mouse",
    description: "Fires when the mouse pointer enters an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onmouseover.asp"
  },
  {
    name: "onmouseout",
    category: "Mouse",
    description: "Fires when the mouse pointer leaves an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onmouseout.asp"
  },
  {
    name: "onmouseenter",
    category: "Mouse",
    description: "Fires when the mouse pointer enters an element (does not bubble)",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onmouseenter.asp"
  },
  {
    name: "onmouseleave",
    category: "Mouse",
    description: "Fires when the mouse pointer leaves an element (does not bubble)",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onmouseleave.asp"
  },
  {
    name: "oncontextmenu",
    category: "Mouse",
    description: "Fires when the user right-clicks on an element to open a context menu",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_oncontextmenu.asp"
  },
  {
    name: "onwheel",
    category: "Mouse",
    description: "Fires when the mouse wheel is rolled over an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onwheel.asp"
  },

  // Keyboard Events
  {
    name: "onkeydown",
    category: "Keyboard",
    description: "Fires when a user is pressing a key",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onkeydown.asp"
  },
  {
    name: "onkeyup",
    category: "Keyboard",
    description: "Fires when a user releases a key",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onkeyup.asp"
  },
  {
    name: "onkeypress",
    category: "Keyboard",
    description: "Fires when a user presses a key (deprecated, use keydown instead)",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onkeypress.asp"
  },

  // Form Events
  {
    name: "onsubmit",
    category: "Form",
    description: "Fires when a form is submitted",
    tags: ["form"],
    link: "https://www.w3schools.com/jsref/event_onsubmit.asp"
  },
  {
    name: "onchange",
    category: "Form",
    description: "Fires when the value of an element has been changed",
    tags: ["input", "select", "textarea"],
    link: "https://www.w3schools.com/jsref/event_onchange.asp"
  },
  {
    name: "oninput",
    category: "Form",
    description: "Fires when an element gets user input",
    tags: ["input", "textarea"],
    link: "https://www.w3schools.com/jsref/event_oninput.asp"
  },
  {
    name: "onreset",
    category: "Form",
    description: "Fires when a form is reset",
    tags: ["form"],
    link: "https://www.w3schools.com/jsref/event_onreset.asp"
  },
  {
    name: "onselect",
    category: "Form",
    description: "Fires after text has been selected in an element",
    tags: ["input", "textarea"],
    link: "https://www.w3schools.com/jsref/event_onselect.asp"
  },
  {
    name: "oninvalid",
    category: "Form",
    description: "Fires when an element is invalid",
    tags: ["input"],
    link: "https://www.w3schools.com/jsref/event_oninvalid.asp"
  },
  {
    name: "onsearch",
    category: "Form",
    description: "Fires when the user writes something in a search field",
    tags: ["input"],
    link: "https://www.w3schools.com/jsref/event_onsearch.asp"
  },

  // Focus Events
  {
    name: "onfocus",
    category: "Focus",
    description: "Fires when an element gets focus",
    tags: ["input", "select", "textarea", "button", "a"],
    link: "https://www.w3schools.com/jsref/event_onfocus.asp"
  },
  {
    name: "onblur",
    category: "Focus",
    description: "Fires when an element loses focus",
    tags: ["input", "select", "textarea", "button", "a"],
    link: "https://www.w3schools.com/jsref/event_onblur.asp"
  },
  {
    name: "onfocusin",
    category: "Focus",
    description: "Fires when an element is about to get focus (bubbles)",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onfocusin.asp"
  },
  {
    name: "onfocusout",
    category: "Focus",
    description: "Fires when an element is about to lose focus (bubbles)",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onfocusout.asp"
  },

  // Window Events
  {
    name: "onload",
    category: "Window",
    description: "Fires when an object has loaded",
    tags: ["body", "iframe", "img", "script", "style"],
    link: "https://www.w3schools.com/jsref/event_onload.asp"
  },
  {
    name: "onunload",
    category: "Window",
    description: "Fires when a page has unloaded (deprecated)",
    tags: ["body"],
    link: "https://www.w3schools.com/jsref/event_onunload.asp"
  },
  {
    name: "onbeforeunload",
    category: "Window",
    description: "Fires before the document is about to be unloaded",
    tags: ["body"],
    link: "https://www.w3schools.com/jsref/event_onbeforeunload.asp"
  },
  {
    name: "onresize",
    category: "Window",
    description: "Fires when the browser window is resized",
    tags: ["body"],
    link: "https://www.w3schools.com/jsref/event_onresize.asp"
  },
  {
    name: "onscroll",
    category: "Window",
    description: "Fires when an element's scrollbar is being scrolled",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onscroll.asp"
  },
  {
    name: "onerror",
    category: "Window",
    description: "Fires when an error occurs while loading an external file",
    tags: ["img", "script", "style", "body"],
    link: "https://www.w3schools.com/jsref/event_onerror.asp"
  },
  {
    name: "onpageshow",
    category: "Window",
    description: "Fires when a user navigates to a webpage",
    tags: ["body"],
    link: "https://www.w3schools.com/jsref/event_onpageshow.asp"
  },
  {
    name: "onpagehide",
    category: "Window",
    description: "Fires when a user navigates away from a webpage",
    tags: ["body"],
    link: "https://www.w3schools.com/jsref/event_onpagehide.asp"
  },

  // Clipboard Events
  {
    name: "oncopy",
    category: "Clipboard",
    description: "Fires when the user copies the content of an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_oncopy.asp"
  },
  {
    name: "oncut",
    category: "Clipboard",
    description: "Fires when the user cuts the content of an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_oncut.asp"
  },
  {
    name: "onpaste",
    category: "Clipboard",
    description: "Fires when the user pastes content in an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onpaste.asp"
  },

  // Drag & Drop Events
  {
    name: "ondrag",
    category: "Drag & Drop",
    description: "Fires when an element is being dragged",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_ondrag.asp"
  },
  {
    name: "ondragstart",
    category: "Drag & Drop",
    description: "Fires when the user starts to drag an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_ondragstart.asp"
  },
  {
    name: "ondragend",
    category: "Drag & Drop",
    description: "Fires when the user has finished dragging an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_ondragend.asp"
  },
  {
    name: "ondragover",
    category: "Drag & Drop",
    description: "Fires when a dragged element is over a drop target",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_ondragover.asp"
  },
  {
    name: "ondragenter",
    category: "Drag & Drop",
    description: "Fires when a dragged element enters a drop target",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_ondragenter.asp"
  },
  {
    name: "ondragleave",
    category: "Drag & Drop",
    description: "Fires when a dragged element leaves a drop target",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_ondragleave.asp"
  },
  {
    name: "ondrop",
    category: "Drag & Drop",
    description: "Fires when a dragged element is dropped on a drop target",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_ondrop.asp"
  },

  // Touch Events
  {
    name: "ontouchstart",
    category: "Touch",
    description: "Fires when a finger is placed on a touch screen",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_ontouchstart.asp"
  },
  {
    name: "ontouchmove",
    category: "Touch",
    description: "Fires when a finger is dragged across the screen",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_ontouchmove.asp"
  },
  {
    name: "ontouchend",
    category: "Touch",
    description: "Fires when a finger is removed from a touch screen",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_ontouchend.asp"
  },
  {
    name: "ontouchcancel",
    category: "Touch",
    description: "Fires when a touch event is interrupted",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_ontouchcancel.asp"
  },

  // Pointer Events
  {
    name: "onpointerdown",
    category: "Pointer",
    description: "Fires when a pointer becomes active",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onpointerdown.asp"
  },
  {
    name: "onpointerup",
    category: "Pointer",
    description: "Fires when a pointer is no longer active",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onpointerup.asp"
  },
  {
    name: "onpointermove",
    category: "Pointer",
    description: "Fires when a pointer moves",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onpointermove.asp"
  },
  {
    name: "onpointerover",
    category: "Pointer",
    description: "Fires when a pointer moves onto an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onpointerover.asp"
  },
  {
    name: "onpointerout",
    category: "Pointer",
    description: "Fires when a pointer moves out of an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onpointerout.asp"
  },
  {
    name: "onpointerenter",
    category: "Pointer",
    description: "Fires when a pointer enters an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onpointerenter.asp"
  },
  {
    name: "onpointerleave",
    category: "Pointer",
    description: "Fires when a pointer leaves an element",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onpointerleave.asp"
  },
  {
    name: "onpointercancel",
    category: "Pointer",
    description: "Fires when a pointer event is cancelled",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_onpointercancel.asp"
  },

  // Media Events
  {
    name: "onplay",
    category: "Media",
    description: "Fires when media starts playing",
    tags: ["audio", "video"],
    link: "https://www.w3schools.com/jsref/event_onplay.asp"
  },
  {
    name: "onpause",
    category: "Media",
    description: "Fires when media is paused",
    tags: ["audio", "video"],
    link: "https://www.w3schools.com/jsref/event_onpause.asp"
  },
  {
    name: "onplaying",
    category: "Media",
    description: "Fires when media is playing after being paused",
    tags: ["audio", "video"],
    link: "https://www.w3schools.com/jsref/event_onplaying.asp"
  },
  {
    name: "onended",
    category: "Media",
    description: "Fires when media has reached the end",
    tags: ["audio", "video"],
    link: "https://www.w3schools.com/jsref/event_onended.asp"
  },
  {
    name: "oncanplay",
    category: "Media",
    description: "Fires when the browser can start playing media",
    tags: ["audio", "video"],
    link: "https://www.w3schools.com/jsref/event_oncanplay.asp"
  },
  {
    name: "oncanplaythrough",
    category: "Media",
    description: "Fires when the browser estimates it can play through media without stopping",
    tags: ["audio", "video"],
    link: "https://www.w3schools.com/jsref/event_oncanplaythrough.asp"
  },
  {
    name: "onloadeddata",
    category: "Media",
    description: "Fires when media data is loaded",
    tags: ["audio", "video"],
    link: "https://www.w3schools.com/jsref/event_onloadeddata.asp"
  },
  {
    name: "onloadedmetadata",
    category: "Media",
    description: "Fires when metadata for media is loaded",
    tags: ["audio", "video"],
    link: "https://www.w3schools.com/jsref/event_onloadedmetadata.asp"
  },
  {
    name: "ontimeupdate",
    category: "Media",
    description: "Fires when the playing position of media has changed",
    tags: ["audio", "video"],
    link: "https://www.w3schools.com/jsref/event_ontimeupdate.asp"
  },
  {
    name: "onvolumechange",
    category: "Media",
    description: "Fires when the volume of media has changed",
    tags: ["audio", "video"],
    link: "https://www.w3schools.com/jsref/event_onvolumechange.asp"
  },
  {
    name: "onseeking",
    category: "Media",
    description: "Fires when the user starts seeking in media",
    tags: ["audio", "video"],
    link: "https://www.w3schools.com/jsref/event_onseeking.asp"
  },
  {
    name: "onseeked",
    category: "Media",
    description: "Fires when the user is done seeking in media",
    tags: ["audio", "video"],
    link: "https://www.w3schools.com/jsref/event_onseeked.asp"
  },
  {
    name: "onwaiting",
    category: "Media",
    description: "Fires when media is waiting for data to continue",
    tags: ["audio", "video"],
    link: "https://www.w3schools.com/jsref/event_onwaiting.asp"
  },
  {
    name: "onstalled",
    category: "Media",
    description: "Fires when the browser is trying to get media data but data is not available",
    tags: ["audio", "video"],
    link: "https://www.w3schools.com/jsref/event_onstalled.asp"
  },
  {
    name: "ondurationchange",
    category: "Media",
    description: "Fires when the duration of media changes",
    tags: ["audio", "video"],
    link: "https://www.w3schools.com/jsref/event_ondurationchange.asp"
  },
  {
    name: "onratechange",
    category: "Media",
    description: "Fires when the playing speed of media changes",
    tags: ["audio", "video"],
    link: "https://www.w3schools.com/jsref/event_onratechange.asp"
  },

  // Animation Events
  {
    name: "onanimationstart",
    category: "Animation",
    description: "Fires when a CSS animation starts",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_animationstart.asp"
  },
  {
    name: "onanimationend",
    category: "Animation",
    description: "Fires when a CSS animation completes",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_animationend.asp"
  },
  {
    name: "onanimationiteration",
    category: "Animation",
    description: "Fires when a CSS animation repeats",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_animationiteration.asp"
  },
  {
    name: "ontransitionend",
    category: "Animation",
    description: "Fires when a CSS transition completes",
    tags: ["All HTML elements"],
    link: "https://www.w3schools.com/jsref/event_transitionend.asp"
  },

  // DOM Events
  {
    name: "onabort",
    category: "DOM",
    description: "Fires when the loading of a resource is aborted",
    tags: ["img", "audio", "video"],
    link: "https://www.w3schools.com/jsref/event_onabort.asp"
  },
  {
    name: "onoffline",
    category: "DOM",
    description: "Fires when the browser starts working offline",
    tags: ["body"],
    link: "https://www.w3schools.com/jsref/event_onoffline.asp"
  },
  {
    name: "ononline",
    category: "DOM",
    description: "Fires when the browser starts working online",
    tags: ["body"],
    link: "https://www.w3schools.com/jsref/event_ononline.asp"
  },
  {
    name: "onhashchange",
    category: "DOM",
    description: "Fires when the anchor part of the URL has changed",
    tags: ["body"],
    link: "https://www.w3schools.com/jsref/event_onhashchange.asp"
  },
  {
    name: "onpopstate",
    category: "DOM",
    description: "Fires when the window's history changes",
    tags: ["body"],
    link: "https://www.w3schools.com/jsref/event_onpopstate.asp"
  },
  {
    name: "onstorage",
    category: "DOM",
    description: "Fires when a storage area (localStorage/sessionStorage) is changed",
    tags: ["body"],
    link: "https://www.w3schools.com/jsref/event_onstorage.asp"
  },
  {
    name: "ontoggle",
    category: "DOM",
    description: "Fires when the user opens or closes a details element",
    tags: ["details"],
    link: "https://www.w3schools.com/jsref/event_ontoggle.asp"
  }
];