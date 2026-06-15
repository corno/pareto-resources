import * as pt from 'pareto-core/dist/transformer/implementation'
import * as p_i from 'pareto-core/dist/transformer/interface'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/fs_unrestricted_copy/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export type Error = p_i.Transformer<d_in.Error, d_out.Phrase>

//dependencies
import * as t_path_to_text from "../unrestricted_path/list_of_characters"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Error: Error = ($) => sh.ph.composed([
    pt.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'device not ready': return pt.ss($, ($) => sh.ph.literal("device not ready"))
            case 'source does not exist': return pt.ss($, ($) => sh.ph.literal("source does not exist"))
            case 'node is not a file': return pt.ss($, ($) => sh.ph.literal("node is not a file"))
            case 'permission denied': return pt.ss($, ($) => sh.ph.literal("permission denied"))
            case 'file too large': return pt.ss($, ($) => sh.ph.literal("file too large"))
            default: return pt.au($[0])
        }
    }),
    sh.ph.literal(": "),
    sh.ph.serialize(t_path_to_text.Node_Path($.path)),
])