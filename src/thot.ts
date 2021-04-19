/*
 *   Copyright: xbanki <contact@xbanki.me>
 *   Licensed under the MIT License.
 *   see LICENSE for details.
 */


/**
 * Command invokation prefix.
 * @return {string}
 * @todo (xbanki): Change this to be a config getter not hardcoded string
 */
const bot_prefix = '!';

/**
 * `spliceMessage` returned payload, including the original raw message string.
 * @class   Util
 * @private
 */
interface SpliceMessageResult {

    /**
     * Raw message string.
     * @return {string}
     */
    raw: string;

    /**
     * Spliced message prefix.
     * @return {string}
     */
    prefix: string;

    /**
     * Spliced message command name.
     * @return {string}
     */
    command: string;

    /**
     * Spliced message command options, split by commas.
     * @return {Array<string>}
     */
    options: Array<string>;
}

/**
 * Takes in raw message string, splitting the string in to it's parts (`prefix`, `command` & `options`).
 * @param   {string} message - Raw `string` Discord message to splice & parse
 * @class   Util
 * @private
 */
function spliceMessage(message: string): SpliceMessageResult {

    /**
     * Message prefix.
     * @return {string}
     */
    let prefix: string;

    /**
     * Prefix starting position in message.
     * @return {number}
     */
    let prefix_pos: number;

    /**
     * Message command.
     * @return {string}
     */
    let command: string;

    /**
     * Command starting position in message.
     * @return {number}
     */
    let command_pos: number;

    /**
     * Message options.
     * @return {Array<string>}
     */
    let options: Array<string>;

    /**
     * Duplicate of `message` parameter for less verbosity.
     * @return {string}
     */
    const raw = message;

    // Get prefix
    if (!prefix?.length) {
        prefix_pos = message.indexOf(bot_prefix, 0);
        prefix = message.substr(prefix_pos, bot_prefix.length);
    }

    // Get command
    if (!command?.length) {
        command = message.substring(prefix_pos + prefix.length).split(/\s/)[0];
        command_pos = message.indexOf(command);
    }

    // Get options
    if (!options?.length) {
        const temp_options = message.substring(command_pos + command.length).split(',');

        options = [];

        for (let option of temp_options) {
            option = option.trim();
            options.push(option);
        }
    }

    return { prefix, command, options, raw } as SpliceMessageResult;
}

export { spliceMessage, SpliceMessageResult };
