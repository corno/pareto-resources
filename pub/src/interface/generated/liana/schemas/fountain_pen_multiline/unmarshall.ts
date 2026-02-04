
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Directory_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Directory
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Directory_ = (
    context: Directory_.I,
    abort: _pi.Abort<Directory_.E>,
) => Directory_.O

export namespace Node_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Node
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Node_ = (
    context: Node_.I,
    abort: _pi.Abort<Node_.E>,
) => Node_.O

export namespace Group_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Group
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Group_ = (
    context: Group_.I,
    abort: _pi.Abort<Group_.E>,
) => Group_.O

export namespace Group_Part_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Group_Part
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Group_Part_ = (
    context: Group_Part_.I,
    abort: _pi.Abort<Group_Part_.E>,
) => Group_Part_.O

export namespace Block_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Block
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Block_ = (
    context: Block_.I,
    abort: _pi.Abort<Block_.E>,
) => Block_.O

export namespace Block_Part_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Block_Part
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Block_Part_ = (
    context: Block_Part_.I,
    abort: _pi.Abort<Block_Part_.E>,
) => Block_Part_.O

export { 
    Directory_ as Directory, 
    Node_ as Node, 
    Group_ as Group, 
    Group_Part_ as Group_Part, 
    Block_ as Block, 
    Block_Part_ as Block_Part, 
}
