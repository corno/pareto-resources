import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

export type Error = _pi.Transformer<d_in.Error, d_out.Block_Part>

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Error: Error = ($) => {
    return _pt.cc($, ($) => {
        switch ($[0]) {
            case 'permission denied': return _pt.ss($, ($) => sh.b.snippet(`permission denied`))
            case 'file does not exist': return _pt.ss($, ($) => sh.b.snippet(`file does not exist`))
            case 'node is not a file': return _pt.ss($, ($) => sh.b.snippet(`node is not a file`))
            case 'file too large': return _pt.ss($, ($) => sh.b.snippet(`file too large`))
            case 'device not ready': return _pt.ss($, ($) => sh.b.snippet(`device not ready`))
            default: return _pt.au($[0])
        }
    })
}