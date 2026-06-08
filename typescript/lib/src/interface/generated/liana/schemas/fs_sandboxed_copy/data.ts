
import * as _pi from 'pareto-core/dist/interface'

import * as i_imports_path from "../fs_sandboxed_path/data"

import * as i_imports_unrestricted from "../fs_unrestricted_copy/data"

export namespace Parameters_ {
    
    export type source = i_imports_path.Node_Path
    
    export type target = i_imports_path.Node_Path
    
    export namespace options {
        
        export type recursive = boolean
        
        export type force = boolean
        
        export type errorOnExist = boolean
        
    }
    
    export type options = {
        readonly 'recursive': options.recursive
        readonly 'force': options.force
        readonly 'errorOnExist': options.errorOnExist
    }
    
}

export type Parameters_ = {
    readonly 'source': Parameters_.source
    readonly 'target': Parameters_.target
    readonly 'options': Parameters_.options
}

export type Error_ = i_imports_unrestricted.Error

export { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
