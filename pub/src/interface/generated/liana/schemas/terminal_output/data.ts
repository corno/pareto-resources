
import * as _pi from 'pareto-core/dist/interface'

import * as i__imports_fountain_pen from "../fountain_pen/data"

export namespace Message_ {
    
    export type paragraph = i__imports_fountain_pen.Paragraph
    
    export type raw = string
    
}

export type Message_ = {
    readonly 'paragraph': Message_.paragraph
    readonly 'raw': Message_.raw
}

export { 
    Message_ as Message, 
}
