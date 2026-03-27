
import * as _pi from 'pareto-core/dist/interface'

import * as i_imports_path from "../path/data"

export type Parameters_ = i_imports_path.Node_Path

export namespace Error_ {
    
    export type path = i_imports_path.Node_Path
    
    export namespace type_ {
        
        export type directory_already_exists = null
        
        export type permission_denied = null
        
    }
    
    export type type_ = 
        | readonly ['directory already exists', type_.directory_already_exists]
        | readonly ['permission denied', type_.permission_denied]
    
}

export type Error_ = {
    readonly 'path': Error_.path
    readonly 'type': Error_.type_
}

export { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
