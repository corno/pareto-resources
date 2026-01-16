import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/execute_query_executable/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data"

export namespace signatures {

    export type Error = _pi.Transformer<d_in.Error, d_out.Block_Part>

}

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Error: signatures.Error = ($) => _p.sg($, ($) => {
    switch ($[0]) {
        case 'failed to spawn': return _p.ss($, ($) => sh.b.sub([
            sh.b.snippet(`failed to spawn process:`),
            sh.b.list($.message.__l_map(($) => sh.b.snippet($)))
        ]))
        case 'non zero exit code': return _p.ss($, ($) => sh.b.sub([
            sh.b.snippet(`non zero exit code:`),
            sh.b.indent([
                sh.g.nested_block([
                    sh.b.snippet(`exit code: `),
                    sh.b.snippet($['exit code'].__decide(
                        ($) => `${$}`,
                        () => `n/a`
                    ))
                ]),
                sh.g.nested_block([
                    sh.b.snippet(`output:`),
                    sh.b.indent([
                        sh.g.sub($.stderr.__l_map(($) => sh.g.simple_block($)))
                    ])
                ])
            ])
        ]))
        default: return _p.au($[0])
    }
})