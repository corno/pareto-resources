
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

import * as i_out from "./data"

export namespace Directory_ {
    
    export type I = i_in.List_of_Characters
    
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
    
    export type I = i_in.List_of_Characters
    
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

export namespace Paragraph_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Paragraph
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Paragraph_ = (
    context: Paragraph_.I,
    abort: _pi.Abort<Paragraph_.E>,
    parameters: {
        readonly 'document resource identifier': Paragraph_.P.document_resource_identifier
        readonly 'tab size': Paragraph_.P.tab_size
    },
) => Paragraph_.O

export namespace Sentence_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Sentence
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Sentence_ = (
    context: Sentence_.I,
    abort: _pi.Abort<Sentence_.E>,
    parameters: {
        readonly 'document resource identifier': Sentence_.P.document_resource_identifier
        readonly 'tab size': Sentence_.P.tab_size
    },
) => Sentence_.O

export namespace Phrase_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Phrase
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Phrase_ = (
    context: Phrase_.I,
    abort: _pi.Abort<Phrase_.E>,
    parameters: {
        readonly 'document resource identifier': Phrase_.P.document_resource_identifier
        readonly 'tab size': Phrase_.P.tab_size
    },
) => Phrase_.O

export namespace Single_Line_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Single_Line
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Single_Line_ = (
    context: Single_Line_.I,
    abort: _pi.Abort<Single_Line_.E>,
    parameters: {
        readonly 'document resource identifier': Single_Line_.P.document_resource_identifier
        readonly 'tab size': Single_Line_.P.tab_size
    },
) => Single_Line_.O

export namespace List_of_Characters_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.List_of_Characters
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type List_of_Characters_ = (
    context: List_of_Characters_.I,
    abort: _pi.Abort<List_of_Characters_.E>,
    parameters: {
        readonly 'document resource identifier': List_of_Characters_.P.document_resource_identifier
        readonly 'tab size': List_of_Characters_.P.tab_size
    },
) => List_of_Characters_.O

export { 
    Directory_ as Directory, 
    Node_ as Node, 
    Paragraph_ as Paragraph, 
    Sentence_ as Sentence, 
    Phrase_ as Phrase, 
    Single_Line_ as Single_Line, 
    List_of_Characters_ as List_of_Characters, 
}
