import * as _et from 'pareto-core-interface'

import * as _i_core from "../../../core/resolved"
import * as _i_imports_path from "../../path/data_types/source"

// **** TYPES

export type _T_Parameters = {
    readonly 'path': _i_imports_path._T_Node_Path
    readonly 'error if not exists': boolean
}

export type _T_Error = _i_core._T_State_Group<null, 
    | readonly ['node does not exist', null]
    | readonly ['permission denied', null]
>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Parameters = _T_Parameters

export type Error = _T_Error

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Parameters {
    
    export namespace path {
    }
    export type path = _i_imports_path._T_Node_Path
    export type error_if_not_exists = boolean
}

export namespace _T_Error {
    
    export namespace SG {
        export type node_does_not_exist = null
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['node does not exist', null]
        | readonly ['permission denied', null]
}

// *** ALIASES FOR NESTED TYPES

export namespace Parameters {
    
    export namespace path {
    }
    export type path = _i_imports_path._T_Node_Path
    export type error_if_not_exists = boolean
}

export namespace Error {
    
    export namespace SG {
        export type node_does_not_exist = null
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['node does not exist', null]
        | readonly ['permission denied', null]
}
