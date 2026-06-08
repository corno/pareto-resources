import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/fs_unrestricted_write_file/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export type Error = _pi.Transformer<d_in.Error, d_out.Phrase>

//dependencies
import * as t_path_to_text from "../path/list_of_characters"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Error: Error = ($) => sh.ph.composed([
    _p.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'permission denied': return _p.ss($, ($) => sh.ph.literal("permission denied"))
            default: return _p.au($[0])
        }
    }),
    sh.ph.literal(": "),
    sh.ph.serialize(t_path_to_text.Node_Path($.path)),
])