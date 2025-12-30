import * as _et from 'pareto-core-interface'

import * as _i_out from "../../core/astn_target"
import * as _i_in from "./data_types/source"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Up_Steps = (
    $$_: _i_in._T_Up_Steps,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Start = (
    $$_: _i_in._T_Start,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Context_Subpath = (
    $$_: _i_in._T_Context_Subpath,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Context_Path = (
    $$_: _i_in._T_Context_Path,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Node_Path = (
    $$_: _i_in._T_Node_Path,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Non_Normalized_Path = (
    $$_: _i_in._T_Non_Normalized_Path,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Up_Steps = _T_Up_Steps

export type Start = _T_Start

export type Context_Subpath = _T_Context_Subpath

export type Context_Path = _T_Context_Path

export type Node_Path = _T_Node_Path

export type Non_Normalized_Path = _T_Non_Normalized_Path

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Up_Steps {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Up_Steps
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Start {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Start
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Context_Subpath {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Context_Subpath
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Context_Path {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Context_Path
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Node_Path {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node_Path
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Non_Normalized_Path {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Non_Normalized_Path
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

// *** ALIASES FOR NESTED TYPES

export namespace Up_Steps {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Up_Steps
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Start {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Start
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Context_Subpath {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Context_Subpath
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Context_Path {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Context_Path
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Node_Path {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node_Path
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Non_Normalized_Path {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Non_Normalized_Path
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
