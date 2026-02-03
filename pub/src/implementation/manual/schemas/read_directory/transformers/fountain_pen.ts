import * as _p from 'pareto-core/dist/expression'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/read_directory/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

export namespace signatures {   

export type Error = _pi.Transformer<d_in.Error, d_out.Block_Part>

}

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Error: signatures.Error = ($) => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'directory does not exist': return _p.ss($, ($) => sh.b.snippet(`directory does not exist`))
        case 'node is not a directory':return _p.ss($, ($) => sh.b.snippet(`node is not a directory`))
        default: return _p.au($[0])
    }
})
