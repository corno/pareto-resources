import * as _et from 'pareto-core-interface'

import * as _i_core from "../../../core/unconstrained"
import * as _i_imports_path from "../../path/data_types/target"

// **** TYPES

export type _T_Parameters = _i_imports_path._T_Node_Path

export type _T_Error = _i_core._T_State_Group<null, 
    | readonly ['node does not exist', null]
>

export type _T_Node_Type = _i_core._T_State_Group<null, 
    | readonly ['file', null]
    | readonly ['directory', null]
>

export type _T_Result = _T_Node_Type

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Parameters = _T_Parameters

export type Error = _T_Error

export type Node_Type = _T_Node_Type

export type Result = _T_Result

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Parameters {
}

export namespace _T_Error {
    
    export namespace SG {
        export type node_does_not_exist = null
    }
    export type SG = 
        | readonly ['node does not exist', null]
}

export namespace _T_Node_Type {
    
    export namespace SG {
        export type file = null
        export type directory = null
    }
    export type SG = 
        | readonly ['file', null]
        | readonly ['directory', null]
}

export namespace _T_Result {
}

// *** ALIASES FOR NESTED TYPES

export namespace Parameters {
}

export namespace Error {
    
    export namespace SG {
        export type node_does_not_exist = null
    }
    export type SG = 
        | readonly ['node does not exist', null]
}

export namespace Node_Type {
    
    export namespace SG {
        export type file = null
        export type directory = null
    }
    export type SG = 
        | readonly ['file', null]
        | readonly ['directory', null]
}

export namespace Result {
}
