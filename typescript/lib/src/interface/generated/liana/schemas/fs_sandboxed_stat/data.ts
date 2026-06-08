
import * as _pi from 'pareto-core/dist/interface'

import * as i_imports_path from "../fs_sandboxed_path/data"

import * as i_imports_unrestricted from "../fs_unrestricted_stat/data"

export type Parameters_ = i_imports_path.Node_Path

export type Result_ = Node_Type_

export namespace Node_Type_ {
    
    export type file = null
    
    export type directory = null
    
}

export type Node_Type_ = 
    | readonly ['file', Node_Type_.file]
    | readonly ['directory', Node_Type_.directory]

export type Error_ = i_imports_unrestricted.Error

export { 
    Parameters_ as Parameters, 
    Result_ as Result, 
    Node_Type_ as Node_Type, 
    Error_ as Error, 
}
