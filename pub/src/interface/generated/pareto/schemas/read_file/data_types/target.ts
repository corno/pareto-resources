import * as _et from 'pareto-core-interface'

import * as _i_core from "../../../core/unconstrained"
import * as _i_imports_path from "../../path/data_types/target"

// **** TYPES

export type _T_Parameters = _i_imports_path._T_Node_Path

export type _T_Error = _i_core._T_State_Group<null, 
    | readonly ['file does not exist', null]
    | readonly ['node is not a file', null]
    | readonly ['permission denied', null]
    | readonly ['file too large', null]
    | readonly ['device not ready', null]
>

export type _T_Result = string

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Parameters = _T_Parameters

export type Error = _T_Error

export type Result = _T_Result

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Parameters {
}

export namespace _T_Error {
    
    export namespace SG {
        export type file_does_not_exist = null
        export type node_is_not_a_file = null
        export type permission_denied = null
        export type file_too_large = null
        export type device_not_ready = null
    }
    export type SG = 
        | readonly ['file does not exist', null]
        | readonly ['node is not a file', null]
        | readonly ['permission denied', null]
        | readonly ['file too large', null]
        | readonly ['device not ready', null]
}

// *** ALIASES FOR NESTED TYPES

export namespace Parameters {
}

export namespace Error {
    
    export namespace SG {
        export type file_does_not_exist = null
        export type node_is_not_a_file = null
        export type permission_denied = null
        export type file_too_large = null
        export type device_not_ready = null
    }
    export type SG = 
        | readonly ['file does not exist', null]
        | readonly ['node is not a file', null]
        | readonly ['permission denied', null]
        | readonly ['file too large', null]
        | readonly ['device not ready', null]
}
