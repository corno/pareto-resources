
import * as _pi from 'pareto-core/dist/interface'

import * as i_imports_path from "../fs_sandboxed_path/data"

import * as i_imports_unrestricted from "../fs_unrestricted_stat_possible_node/data"

export type Parameters_ = i_imports_path.Node_Path

export namespace Result_ {
    
    export type does_not_exist = null
    
    export type file = null
    
    export type directory = null
    
}

export type Result_ = 
    | readonly ['does not exist', Result_.does_not_exist]
    | readonly ['file', Result_.file]
    | readonly ['directory', Result_.directory]

export type Error_ = i_imports_unrestricted.Error

export { 
    Parameters_ as Parameters, 
    Result_ as Result, 
    Error_ as Error, 
}
