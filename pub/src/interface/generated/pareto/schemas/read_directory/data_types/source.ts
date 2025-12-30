import * as _et from 'pareto-core-interface'

import * as _i_core from "../../../core/resolved"
import * as _i_imports_path from "../../path/data_types/source"

// **** TYPES

export type _T_Parameters = {
    readonly 'path': _i_imports_path._T_Node_Path
}

export type _T_Error = _i_core._T_State_Group<null, 
    | readonly ['directory does not exist', null]
    | readonly ['node is not a directory', null]
>

export type _T_Node_Type = _i_core._T_State_Group<null, 
    | readonly ['file', null]
    | readonly ['directory', null]
    | readonly ['other', null]
>

export type _T_Result = _i_core._T_Dictionary<null, {
    readonly 'node type': _T_Node_Type
    readonly 'context directory': _i_imports_path._T_Context_Path
    readonly 'path': _i_imports_path._T_Node_Path
}>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Parameters = _T_Parameters

export type Error = _T_Error

export type Node_Type = _T_Node_Type

export type Result = _T_Result

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Parameters {
    
    export namespace path {
    }
    export type path = _i_imports_path._T_Node_Path
}

export namespace _T_Error {
    
    export namespace SG {
        export type directory_does_not_exist = null
        export type node_is_not_a_directory = null
    }
    export type SG = 
        | readonly ['directory does not exist', null]
        | readonly ['node is not a directory', null]
}

export namespace _T_Node_Type {
    
    export namespace SG {
        export type file = null
        export type directory = null
        export type other = null
    }
    export type SG = 
        | readonly ['file', null]
        | readonly ['directory', null]
        | readonly ['other', null]
}

export namespace _T_Result {
    
    export namespace D {
        
        export namespace node_type {
        }
        export type node_type = _T_Node_Type
        
        export namespace context_directory {
        }
        export type context_directory = _i_imports_path._T_Context_Path
        
        export namespace path {
        }
        export type path = _i_imports_path._T_Node_Path
    }
    export type D = {
        readonly 'node type': _T_Node_Type
        readonly 'context directory': _i_imports_path._T_Context_Path
        readonly 'path': _i_imports_path._T_Node_Path
    }
}

// *** ALIASES FOR NESTED TYPES

export namespace Parameters {
    
    export namespace path {
    }
    export type path = _i_imports_path._T_Node_Path
}

export namespace Error {
    
    export namespace SG {
        export type directory_does_not_exist = null
        export type node_is_not_a_directory = null
    }
    export type SG = 
        | readonly ['directory does not exist', null]
        | readonly ['node is not a directory', null]
}

export namespace Node_Type {
    
    export namespace SG {
        export type file = null
        export type directory = null
        export type other = null
    }
    export type SG = 
        | readonly ['file', null]
        | readonly ['directory', null]
        | readonly ['other', null]
}

export namespace Result {
    
    export namespace D {
        
        export namespace node_type {
        }
        export type node_type = _T_Node_Type
        
        export namespace context_directory {
        }
        export type context_directory = _i_imports_path._T_Context_Path
        
        export namespace path {
        }
        export type path = _i_imports_path._T_Node_Path
    }
    export type D = {
        readonly 'node type': _T_Node_Type
        readonly 'context directory': _i_imports_path._T_Context_Path
        readonly 'path': _i_imports_path._T_Node_Path
    }
}
