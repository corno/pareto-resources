import * as _et from 'pareto-core-interface'

import * as _i_in from "./data_types/source"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Parameters = (
    $$_: _i_in._T_Parameters,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Result = (
    $$_: _i_in._T_Result,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Parameters = _T_Parameters

export type Result = _T_Result

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

// *** ALIASES FOR NESTED TYPES

export namespace Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}
