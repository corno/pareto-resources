import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/read_file/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

export type Error = _pi.Transformer<d_in.Error, d_out.Block_Part>

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Error: Error = ($) => {
    return _p.sg($, ($) => {
        switch ($[0]) {
            case 'permission denied': return _p.ss($, ($) => sh.b.snippet(`permission denied`))
            case 'file does not exist': return _p.ss($, ($) => sh.b.snippet(`file does not exist`))
            case 'node is not a file': return _p.ss($, ($) => sh.b.snippet(`node is not a file`))
            case 'file too large': return _p.ss($, ($) => sh.b.snippet(`file too large`))
            case 'device not ready': return _p.ss($, ($) => sh.b.snippet(`device not ready`))
            default: return _p.au($[0])
        }
    })
}