import * as pt from 'pareto-core/dist/assign'
import * as p_ti from 'pareto-core/dist/transformer/interface'

import * as d_in from "../../../../interface/to_be_generated/read_directory_content"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
namespace signatures {

    export type Error = p_ti.Transformer<d_in.Error, d_out.Phrase>
    export type Node_Error = p_ti.Transformer<d_in.Node_Error, d_out.Phrase>

}

//dependencies
import * as t_read_directory_to_fountain_pen from "../read_directory/fountain_pen"
import * as t_read_file_to_fountain_pen from "../read_file/fountain_pen"



import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Node_Error: signatures.Node_Error = ($) => pt.decide.state($, ($) => {
    switch ($[0]) {
        case 'file': return pt.ss($, ($) => t_read_file_to_fountain_pen.Error($))
        case 'directory': return pt.ss($, ($) => Error($))
        default: return pt.au($[0])
    }
})

export const Error: signatures.Error = ($) => pt.decide.state($, ($) => {
    switch ($[0]) {
        case 'directory content processing': return pt.ss($, ($) => sh.ph.indent(
            sh.pg.sentences(pt.list.from.dictionary($).convert(($, id) => sh.sentence([
                sh.ph.literal(id),
                sh.ph.literal(": "),
                Node_Error($)
            ])))
        ))
        case 'read directory': return pt.ss($, ($) => t_read_directory_to_fountain_pen.Error($))
        default: return pt.au($[0])
    }
})