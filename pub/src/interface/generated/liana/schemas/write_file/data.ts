
import * as _pi from 'pareto-core/dist/interface'

import * as i__imports_path from "../path/data"

import * as i__imports_list_of_characters from "../list_of_characters/data"

export namespace Parameters_ {
    
    export type path = i__imports_path.Node_Path
    
    export type data = i__imports_list_of_characters.List_of_Characters
    
}

export type Parameters_ = {
    readonly 'path': Parameters_.path
    readonly 'data': Parameters_.data
}

export namespace Error_ {
    
    export type path = i__imports_path.Node_Path
    
    export namespace type_ {
        
        export type permission_denied = null
        
    }
    
    export type type_ = 
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
