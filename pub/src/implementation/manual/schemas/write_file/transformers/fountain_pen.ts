import * as _p from 'pareto-core/dist/expression'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/write_file/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

export type Error = _pi.Transformer<d_in.Error, d_out.Block_Part>

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Error: Error = ($) => {
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'permission denied': return _p.ss($, ($) => sh.b.snippet(`permission denied`))
            default: return _p.au($[0])
        }
    })
}