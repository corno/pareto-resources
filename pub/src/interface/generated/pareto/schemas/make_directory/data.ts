
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "../../core/location"

import * as i__imports_path from "../path/data"

export type Parameters_ = i__imports_path.Node_Path

export namespace Error_ {
    
    export type directory_already_exists = null
    
    export type permission_denied = null
    
}

export type Error_ = 
    | readonly ['directory already exists', Error_.directory_already_exists]
    | readonly ['permission denied', Error_.permission_denied]

export { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
