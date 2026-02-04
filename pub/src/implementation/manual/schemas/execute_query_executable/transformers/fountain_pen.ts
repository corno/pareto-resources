import * as _p from 'pareto-core/dist/expression'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/execute_query_executable/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

export namespace signatures {

    export type Error = _pi.Transformer<d_in.Error, d_out.Block_Part>

}

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Error: signatures.Error = ($) => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'failed to spawn': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("failed to spawn process:"),
            sh.b.indent([
                sh.g.sub($.message.lines.__l_map(($) => sh.g.simple_block($)))
            ])
        ]))
        case 'non zero exit code': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("non zero exit code:"),
            sh.b.indent([
                sh.g.nested_block([
                    sh.b.literal("exit code: "),
                    $['exit code'].__decide(
                        ($) => sh.b.decimal($),
                        () => sh.b.literal("n/a")
                    )
                ]),
                sh.g.nested_block([
                    sh.b.literal("output:"),
                    sh.b.indent([
                        sh.g.sub($.stderr.lines.__l_map(($) => sh.g.simple_block($)))
                    ])
                ])
            ])
        ]))
        default: return _p.au($[0])
    }
})