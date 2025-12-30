import * as _et from 'pareto-core-interface'

import * as _i_core from "../../../core/unconstrained"
import * as _i_imports_path from "../../path/data_types/target"

// **** TYPES

export type _T_Parameters = {
    readonly 'path': _i_imports_path._T_Node_Path
    readonly 'data': string
}

export type _T_Error = _i_core._T_State_Group<null, 
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
    export type data = string
}

export namespace _T_Error {
    
    export namespace SG {
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['permission denied', null]
}

// *** ALIASES FOR NESTED TYPES

export namespace Parameters {
    
    export namespace path {
    }
    export type path = _i_imports_path._T_Node_Path
    export type data = string
}

export namespace Error {
    
    export namespace SG {
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['permission denied', null]
}
