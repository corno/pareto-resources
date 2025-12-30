import * as _et from 'pareto-core-interface'

import * as _i_core from "../../../core/unconstrained"
import * as _i_imports_path from "../../path/data_types/target"

// **** TYPES

export type _T_Parameters = {
    readonly 'source': _i_imports_path._T_Node_Path
    readonly 'target': _i_imports_path._T_Node_Path
    readonly 'options': {
        readonly 'recursive': _et.Optional_Value<boolean>
        readonly 'force': _et.Optional_Value<boolean>
        readonly 'errorOnExist': _et.Optional_Value<boolean>
    }
}

export type _T_Error = _i_core._T_State_Group<null, 
    | readonly ['source does not exist', null]
    | readonly ['node is not a file', null]
    | readonly ['permission denied', null]
    | readonly ['file too large', null]
    | readonly ['device not ready', null]
>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Parameters = _T_Parameters

export type Error = _T_Error

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Parameters {
    
    export namespace source {
    }
    export type source = _i_imports_path._T_Node_Path
    
    export namespace target {
    }
    export type target = _i_imports_path._T_Node_Path
    
    export namespace options {
        
        export namespace recursive {
            export type O = boolean
        }
        export type recursive = _et.Optional_Value<boolean>
        
        export namespace force {
            export type O = boolean
        }
        export type force = _et.Optional_Value<boolean>
        
        export namespace errorOnExist {
            export type O = boolean
        }
        export type errorOnExist = _et.Optional_Value<boolean>
    }
    export type options = {
        readonly 'recursive': _et.Optional_Value<boolean>
        readonly 'force': _et.Optional_Value<boolean>
        readonly 'errorOnExist': _et.Optional_Value<boolean>
    }
}

export namespace _T_Error {
    
    export namespace SG {
        export type source_does_not_exist = null
        export type node_is_not_a_file = null
        export type permission_denied = null
        export type file_too_large = null
        export type device_not_ready = null
    }
    export type SG = 
        | readonly ['source does not exist', null]
        | readonly ['node is not a file', null]
        | readonly ['permission denied', null]
        | readonly ['file too large', null]
        | readonly ['device not ready', null]
}

// *** ALIASES FOR NESTED TYPES

export namespace Parameters {
    
    export namespace source {
    }
    export type source = _i_imports_path._T_Node_Path
    
    export namespace target {
    }
    export type target = _i_imports_path._T_Node_Path
    
    export namespace options {
        
        export namespace recursive {
            export type O = boolean
        }
        export type recursive = _et.Optional_Value<boolean>
        
        export namespace force {
            export type O = boolean
        }
        export type force = _et.Optional_Value<boolean>
        
        export namespace errorOnExist {
            export type O = boolean
        }
        export type errorOnExist = _et.Optional_Value<boolean>
    }
    export type options = {
        readonly 'recursive': _et.Optional_Value<boolean>
        readonly 'force': _et.Optional_Value<boolean>
        readonly 'errorOnExist': _et.Optional_Value<boolean>
    }
}

export namespace Error {
    
    export namespace SG {
        export type source_does_not_exist = null
        export type node_is_not_a_file = null
        export type permission_denied = null
        export type file_too_large = null
        export type device_not_ready = null
    }
    export type SG = 
        | readonly ['source does not exist', null]
        | readonly ['node is not a file', null]
        | readonly ['permission denied', null]
        | readonly ['file too large', null]
        | readonly ['device not ready', null]
}
