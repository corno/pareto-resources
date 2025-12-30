import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../interface/generated/pareto/schemas/read_directory/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

export namespace signatures {   

export type Error = _pi.Transformer<d_in.Error, d_out.Block_Part>

}

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Error: signatures.Error = ($) => _pt.cc($, ($) => {
    switch ($[0]) {
        case 'directory does not exist': return _pt.ss($, ($) => sh.b.snippet(`directory does not exist`))
        case 'node is not a directory':return _pt.ss($, ($) => sh.b.snippet(`node is not a directory`))
        default: return _pt.au($[0])
    }
})
