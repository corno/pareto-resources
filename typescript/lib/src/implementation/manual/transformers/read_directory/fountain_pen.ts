import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/read_directory/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export namespace signatures {

    export type Error = _pi.Transformer<d_in.Error, d_out.Phrase>

}

//dependencies
import * as t_path_to_text from "../path/list_of_characters"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Error: signatures.Error = ($) => sh.ph.composed([
    _p.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'directory does not exist': return _p.ss($, ($) => sh.ph.literal("directory does not exist"))
            case 'node is not a directory': return _p.ss($, ($) => sh.ph.literal("node is not a directory"))
            default: return _p.au($[0])
        }
    }),
    sh.ph.literal(": "),
    sh.ph.serialize(t_path_to_text.Node_Path($.path)),
])