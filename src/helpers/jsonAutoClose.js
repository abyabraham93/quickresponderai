import { OBJ, BOOL, ARR, NULL, parse } from 'partial-json';
import { jsonrepair } from 'jsonrepair';

/**
 * Parse a partial JSON string that might be streamed from an LLM
 * @param {string} partialJson - The incomplete JSON string
 * @returns {string} The autocompleted JSON string
 * @throws {Error} If the partial JSON is invalid or cannot be autocompleted
 * @example
 * autocompleteJson('{"name": "John", "age":') // Returns {"name": "John"}
 * autocompleteJson('{"users": ["Alice", "Bob", "Ch') // Returns {"users": ["Alice", "Bob"]}
 * autocompleteJson('{"name":}') // Returns {}
 * autocompleteJson('{"') // Returns {}
 */
export function parsePartialJson(partialJson) {
    try {
        return parse(partialJson, OBJ | ARR | BOOL | NULL);
    } catch (error) {
        return jsonrepair(partialJson);
    }
}
