
import * as _pi from 'pareto-core/dist/interface'

import * as i__imports_path from "../path/data"

import * as i__imports_list_of_characters from "../list_of_characters/data"

export type Parameters_ = i__imports_path.Node_Path

export namespace Error_ {
    
    export type file_does_not_exist = null
    
    export type node_is_not_a_file = null
    
    export type permission_denied = null
    
    export type file_too_large = null
    
    export type device_not_ready = null
    
}

export type Error_ = 
    | readonly ['file does not exist', Error_.file_does_not_exist]
    | readonly ['node is not a file', Error_.node_is_not_a_file]
    | readonly ['permission denied', Error_.permission_denied]
    | readonly ['file too large', Error_.file_too_large]
    | readonly ['device not ready', Error_.device_not_ready]

export type Result_ = i__imports_list_of_characters.List_of_Characters

export { 
    Parameters_ as Parameters, 
    Error_ as Error, 
    Result_ as Result, 
}
