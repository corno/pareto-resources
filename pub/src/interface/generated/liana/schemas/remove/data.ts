
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "../../generic/location"

import * as i__imports_path from "../path/data"

export namespace Parameters_ {
    
    export type path = i__imports_path.Node_Path
    
    export type error_if_not_exists = boolean
    
}

export type Parameters_ = {
    readonly 'path': Parameters_.path
    readonly 'error if not exists': Parameters_.error_if_not_exists
}

export namespace Error_ {
    
    export type node_does_not_exist = null
    
    export type permission_denied = null
    
}

export type Error_ = 
    | readonly ['node does not exist', Error_.node_does_not_exist]
    | readonly ['permission denied', Error_.permission_denied]

export { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
