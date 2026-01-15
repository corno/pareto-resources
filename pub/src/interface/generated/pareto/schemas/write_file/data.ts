
import * as _pi from "pareto-core-interface"

import * as i__location from "../../core/location"

import * as i__imports_path from "../path/data"

export namespace Parameters_ {
    
    export type path = i__imports_path.Node_Path
    
    export type data = string
    
}

export type Parameters_ = {
    readonly 'path': Parameters_.path
    readonly 'data': Parameters_.data
}

export namespace Error_ {
    
    export type permission_denied = null
    
}

export type Error_ = 
    | readonly ['permission denied', Error_.permission_denied]

export { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
