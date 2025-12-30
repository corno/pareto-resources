import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../interface/generated/pareto/schemas/make_directory/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

export type Error = _pi.Transformer<d_in.Error, d_out.Block_Part>

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Error: Error = ($) => {
    return _pt.cc($, ($) => {
        switch ($[0]) {
            case 'directory already exists': return _pt.ss($, ($) => sh.b.snippet(`directory already exists`))
            case 'permission denied': return _pt.ss($, ($) => sh.b.snippet(`permission denied`))
            default: return _pt.au($[0])
        }
    })
}