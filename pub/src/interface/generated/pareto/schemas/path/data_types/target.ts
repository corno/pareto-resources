import * as _et from 'pareto-core-interface'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Up_Steps = number

export type _T_Start = _i_core._T_State_Group<null, 
    | readonly ['absolute', null]
    | readonly ['relative', {
        readonly 'up steps': _T_Up_Steps
    }]
>

export type _T_Context_Subpath = _i_core._T_List<null, string>

export type _T_Context_Path = {
    readonly 'start': _T_Start
    readonly 'subpath': _T_Context_Subpath
}

export type _T_Node_Path = {
    readonly 'context': _T_Context_Path
    readonly 'node': string
}

export type _T_Non_Normalized_Path = {
    readonly 'leading slash': boolean
    readonly 'segments': _i_core._T_List<null, _i_core._T_State_Group<null, 
        | readonly ['parent', null]
        | readonly ['child', string]
        | readonly ['current', null]
        | readonly ['nothing', null]
    >>
    readonly 'trailing slash': boolean
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Up_Steps = _T_Up_Steps

export type Start = _T_Start

export type Context_Subpath = _T_Context_Subpath

export type Context_Path = _T_Context_Path

export type Node_Path = _T_Node_Path

export type Non_Normalized_Path = _T_Non_Normalized_Path

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Start {
    
    export namespace SG {
        export type absolute = null
        
        export namespace relative {
            
            export namespace up_steps {
            }
            export type up_steps = _T_Up_Steps
        }
        export type relative = {
            readonly 'up steps': _T_Up_Steps
        }
    }
    export type SG = 
        | readonly ['absolute', null]
        | readonly ['relative', {
            readonly 'up steps': _T_Up_Steps
        }]
}

export namespace _T_Context_Subpath {
    export type L = string
}

export namespace _T_Context_Path {
    
    export namespace start {
    }
    export type start = _T_Start
    
    export namespace subpath {
    }
    export type subpath = _T_Context_Subpath
}

export namespace _T_Node_Path {
    
    export namespace context {
    }
    export type context = _T_Context_Path
    export type node = string
}

export namespace _T_Non_Normalized_Path {
    export type leading_slash = boolean
    
    export namespace segments {
        
        export namespace L {
            
            export namespace SG {
                export type parent = null
                export type child = string
                export type current = null
                export type nothing = null
            }
            export type SG = 
                | readonly ['parent', null]
                | readonly ['child', string]
                | readonly ['current', null]
                | readonly ['nothing', null]
        }
        export type L = _i_core._T_State_Group<null, 
            | readonly ['parent', null]
            | readonly ['child', string]
            | readonly ['current', null]
            | readonly ['nothing', null]
        >
    }
    export type segments = _i_core._T_List<null, _i_core._T_State_Group<null, 
        | readonly ['parent', null]
        | readonly ['child', string]
        | readonly ['current', null]
        | readonly ['nothing', null]
    >>
    export type trailing_slash = boolean
}

// *** ALIASES FOR NESTED TYPES

export namespace Start {
    
    export namespace SG {
        export type absolute = null
        
        export namespace relative {
            
            export namespace up_steps {
            }
            export type up_steps = _T_Up_Steps
        }
        export type relative = {
            readonly 'up steps': _T_Up_Steps
        }
    }
    export type SG = 
        | readonly ['absolute', null]
        | readonly ['relative', {
            readonly 'up steps': _T_Up_Steps
        }]
}

export namespace Context_Subpath {
    export type L = string
}

export namespace Context_Path {
    
    export namespace start {
    }
    export type start = _T_Start
    
    export namespace subpath {
    }
    export type subpath = _T_Context_Subpath
}

export namespace Node_Path {
    
    export namespace context {
    }
    export type context = _T_Context_Path
    export type node = string
}

export namespace Non_Normalized_Path {
    export type leading_slash = boolean
    
    export namespace segments {
        
        export namespace L {
            
            export namespace SG {
                export type parent = null
                export type child = string
                export type current = null
                export type nothing = null
            }
            export type SG = 
                | readonly ['parent', null]
                | readonly ['child', string]
                | readonly ['current', null]
                | readonly ['nothing', null]
        }
        export type L = _i_core._T_State_Group<null, 
            | readonly ['parent', null]
            | readonly ['child', string]
            | readonly ['current', null]
            | readonly ['nothing', null]
        >
    }
    export type segments = _i_core._T_List<null, _i_core._T_State_Group<null, 
        | readonly ['parent', null]
        | readonly ['child', string]
        | readonly ['current', null]
        | readonly ['nothing', null]
    >>
    export type trailing_slash = boolean
}
