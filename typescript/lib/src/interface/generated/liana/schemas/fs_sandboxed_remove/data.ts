
import * as _pi from 'pareto-core/dist/interface'

import * as i_imports_path from "../fs_sandboxed_path/data"

import * as i_imports_unrestricted from "../fs_unrestricted_remove/data"

export namespace Parameters_ {
    
    export type path = i_imports_path.Context_Path
    
    export type error_if_not_exists = boolean
    
}

export type Parameters_ = {
    readonly 'path': Parameters_.path
    readonly 'error if not exists': Parameters_.error_if_not_exists
}

export type Error_ = i_imports_unrestricted.Error

export { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
