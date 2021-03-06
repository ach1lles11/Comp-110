import { Node } from "./Node";

/**
 * Given a string and a head node, pushes a new node in front
 * of the previous head node and returns the new head node.
 */
export function link(data: string, rest: Node | null): Node {
    let head: Node = new Node();
    head.data = data;
    head.next = rest;
    return head;
}

/**
 * Given a head Node, this function will return the number
 * of Nodes in the linked list. It does so recursively.
 */
export function length(node: Node): number {
    if (node.next === null) {
        return 1; 
    } else {
        return 1 + length(node.next);
    }  
}

/**
 * Given a head Node, this function will return the number
 * of Nodes in the linked list. It does so imperatively.
 */
export function lengthLoop(node: Node): number {
    let count: number = 1;
    let current: Node = node;
    while (current.next !== null) {
        count++;
        current = current.next;
    }
    return count;
}

/**
 * Given a head Node, this function will return a string
 * representation of the list in the form of:
 * 
 * Single Node: A -> null
 * Many Nodes:  C -> B -> A -> null
 */
export function toString(node: Node): string {
    if (node.next === null) {
        return node.data + " -> null";
    } else {
        return node.data + " -> " + toString(node.next);
    }
}

/**
 * Given a head Node and an index i, return the string value
 * of the ith linked Node. If no such node exists, returns null.
 */
export function get(node: Node, i: number): string | null {
    if (i === 0) {
        return node.data;
    } else if (node.next === null) {
        return null;
    } else {
        return get(node.next, i - 1);
    }
}

// === Challenge Functions ===

/**
 * Given a head node, copy all values to a new list. Returns
 * the copied list's head node. You'll want to make use of the link
 * function.
 */
export function copy(node: Node): Node {
    // TODO
    return node;
}

/**
 * Given a string and a head node, append a new node whose
 * data is the string to the end of the list.
 */
export function append(data: string, node: Node): void {
    // TODO
}

/**
 * Given a head Node, reverse the list and return the new 
 * head Node.
 */
export function reverse(node: Node): Node {
    // TODO
    return node;
}