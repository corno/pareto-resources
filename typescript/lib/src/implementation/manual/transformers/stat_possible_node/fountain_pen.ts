import * as pt from 'pareto-core/dist/assign'
import * as p_ti from 'pareto-core/dist/transformer/interface'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/fs_unrestricted_stat_possible_node/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export type Error = p_ti.Transformer<d_in.Error, d_out.Phrase>

//dependencies
import * as t_path_to_text from "../unrestricted_path/list_of_characters"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Error: Error = ($) => sh.ph.composed([
    pt.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'unknown': return pt.ss($, ($) => sh.ph.literal("unknown"))
            default: return pt.au($[0])
        }
    }),
    sh.ph.literal(": "),
    sh.ph.serialize(t_path_to_text.Node_Path($.path)),
])