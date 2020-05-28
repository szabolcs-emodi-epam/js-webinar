/**
 * Create Element class, which represents an element of
 * the application, and
 * 
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("h1.title") 
 * 2. It has a name (.name), e.g. "Document Title" 
 * 3. It can have a parent Element, 
 *    which is the context of the element (.parent) 
 * 4. It can have children Elements (.children)
 * 5. It has a method to retrieve the protractor element
 *    by the locator (.get([name])) in it's context
 *     - if it gets a name as parameter, it tries to find
 *       in it's children (recursively) the Element with
 *       the given name or throws an Erorr if it cannot
 *       find the element
 */
'use strict';
const ElementFinder = require("../test/mock/ElementFinder")
class Element {
    constructor(name, locator) {
        this.name = name;
        this.locator = locator;
        
        this.parent = null;
        this.children = {};
    }
    setParent(parent) {
        this.parent = parent;
    }

    addChildren(child) {
        if (this.children[child.name] !== undefined) {
            throw new Error('Child already exist');
        }
        this.children[child.name] = child;
    }

    get(name) {
        if (name === undefined) {
            return new ElementFinder(this.locator);
        } else {
            if (this.children[name] === undefined) {
                throw new Error('Child not found');
            }
            return new ElementFinder(this.children[name].locator);
        }
    }
}
module.exports = Element;