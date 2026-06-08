
import * as _pi from 'pareto-core/dist/interface'

import * as i_imports_path from "../fs_sandboxed_path/data"

import * as i_imports_unrestricted from "../fs_unrestricted_make_directory/data"

export namespace Parameters_ {
    
    export type delete_existing = boolean
    
    export type path = i_imports_path.Node_Path
    
}

export type Parameters_ = {
    readonly 'delete existing': Parameters_.delete_existing
    readonly 'path': Parameters_.path
}

export type Error_ = i_imports_unrestricted.Error

export { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
