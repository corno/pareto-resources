import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/fs_unrestricted_stat/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export type Error = p_i.Transformer<d_in.Error, d_out.Phrase>

//dependencies
import * as t_path_to_text from "../unrestricted_path/list_of_characters"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Error: Error = ($) => sh.ph.composed([
    p_.from.state($.type).decide(
        ($) => {
            switch ($[0]) {
                case 'node does not exist': return p_.ss($, ($) => sh.ph.literal("node does not exist"))
                default: return p_.au($[0])
            }
        }),
    sh.ph.literal(": "),
    sh.ph.serialize(t_path_to_text.Node_Path($.path)),
])