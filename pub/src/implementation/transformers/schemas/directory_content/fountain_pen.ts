import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../interface/to_be_generated/read_directory_content"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"
namespace signatures {

    export type Error = _pi.Transformer<d_in.Error, d_out.Block_Part>
    export type Node_Error = _pi.Transformer<d_in.Node_Error, d_out.Block_Part>

}

//dependencies
import * as t_read_directory_to_fountain_pen from "../read_directory/fountain_pen"
import * as t_read_file_to_fountain_pen from "../read_file/fountain_pen"



import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Node_Error: signatures.Node_Error = ($) => _pt.cc($, ($) => {
    return _pt.cc($, ($) => {
        switch ($[0]) {
            case 'file': return _pt.ss($, ($) => t_read_file_to_fountain_pen.Error($))
            case 'directory': return _pt.ss($, ($) => Error($))
            default: return _pt.au($[0])
        }
    })
})

export const Error: signatures.Error = ($) => _pt.cc($, ($) => {
    switch ($[0]) {
        case 'directory content processing': return _pt.ss($, ($) => sh.b.indent([
            sh.g.sub($.to_list(($, key) => sh.g.nested_block([
                sh.b.snippet(`${key}: `),
                Node_Error($)
            ])))
        ]))
        case 'read directory': return _pt.ss($, ($) => sh.b.sub([
            t_read_directory_to_fountain_pen.Error($)
        ]))
        default: return _pt.au($[0])
    }
})