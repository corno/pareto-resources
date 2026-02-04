
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace Directory_ {
    
    export type I = string
    
    export type O = i_out.Directory
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Directory_ = (
    context: Directory_.I,
    abort: _pi.Abort<Directory_.E>,
    parameters: {
        readonly 'document resource identifier': Directory_.P.document_resource_identifier
        readonly 'tab size': Directory_.P.tab_size
    },
) => Directory_.O

export namespace Node_ {
    
    export type I = string
    
    export type O = i_out.Node
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Node_ = (
    context: Node_.I,
    abort: _pi.Abort<Node_.E>,
    parameters: {
        readonly 'document resource identifier': Node_.P.document_resource_identifier
        readonly 'tab size': Node_.P.tab_size
    },
) => Node_.O

export namespace Group_ {
    
    export type I = string
    
    export type O = i_out.Group
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Group_ = (
    context: Group_.I,
    abort: _pi.Abort<Group_.E>,
    parameters: {
        readonly 'document resource identifier': Group_.P.document_resource_identifier
        readonly 'tab size': Group_.P.tab_size
    },
) => Group_.O

export namespace Group_Part_ {
    
    export type I = string
    
    export type O = i_out.Group_Part
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Group_Part_ = (
    context: Group_Part_.I,
    abort: _pi.Abort<Group_Part_.E>,
    parameters: {
        readonly 'document resource identifier': Group_Part_.P.document_resource_identifier
        readonly 'tab size': Group_Part_.P.tab_size
    },
) => Group_Part_.O

export namespace Block_ {
    
    export type I = string
    
    export type O = i_out.Block
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Block_ = (
    context: Block_.I,
    abort: _pi.Abort<Block_.E>,
    parameters: {
        readonly 'document resource identifier': Block_.P.document_resource_identifier
        readonly 'tab size': Block_.P.tab_size
    },
) => Block_.O

export namespace Block_Part_ {
    
    export type I = string
    
    export type O = i_out.Block_Part
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Block_Part_ = (
    context: Block_Part_.I,
    abort: _pi.Abort<Block_Part_.E>,
    parameters: {
        readonly 'document resource identifier': Block_Part_.P.document_resource_identifier
        readonly 'tab size': Block_Part_.P.tab_size
    },
) => Block_Part_.O

export { 
    Directory_ as Directory, 
    Node_ as Node, 
    Group_ as Group, 
    Group_Part_ as Group_Part, 
    Block_ as Block, 
    Block_Part_ as Block_Part, 
}
