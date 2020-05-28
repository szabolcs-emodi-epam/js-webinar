/**
 * Create Layout class, which represents a page of
 * the application, and
 * 
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("body")
 * 2. It has a URL (.url), e.g. "/home" or "https://epam.com"
 * 3. It has a name (.name), e.g. "Document Page"
 * 4. It cannot have a parent element
 * 5. It can have children Elements (.children)
 * 6. It has a method to retrieve the root protractor element
 *    by the locator (.get([name])) or a child element
 *    by name in any depth
 * 7. It has a method to load the page, i.e. Navigates to
 *    the URL of it (.load())
 */
'use strict';
const Element = require("./Element");
class Layout extends Element {
    constructor(name, url, locator) {
        super(name, locator);
        //this.name = name;
        //this.locator = locator;
        this.url = url;

        this.parent = null;
        //this.children = {};
    }

    load() {
        return this.url;
    }

    setParent(parent) {
        throw new Error('Parent is set');
    }
}
module.exports = Layout;