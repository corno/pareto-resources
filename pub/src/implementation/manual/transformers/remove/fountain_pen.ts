import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/remove/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export type Error = _pi.Transformer<d_in.Error, d_out.Phrase>

import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Error: Error = ($) => {
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'node does not exist': return _p.ss($, ($) => sh.ph.literal("node does not exist"))
            case 'permission denied': return _p.ss($, ($) => sh.ph.literal("permission denied"))
            default: return _p.au($[0])
        }
    })
}