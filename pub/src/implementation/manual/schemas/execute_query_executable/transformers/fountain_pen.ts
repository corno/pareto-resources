import * as _p from 'pareto-core/dist/expression'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/execute_query_executable/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

export namespace signatures {

    export type Error = _pi.Transformer<d_in.Error, d_out.Phrase>

}

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Error: signatures.Error = ($) => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'failed to spawn': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("failed to spawn process:"),
            sh.ph.indent(
                sh.pg.sentences(
                    $.message.lines.__l_map(($) => sh.ph.literal($))
                )
            )
        ]))
        case 'non zero exit code': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("non zero exit code:"),
            sh.ph.indent(sh.pg.sentences([
                sh.ph.composed([
                    sh.ph.literal("exit code: "),
                    $['exit code'].__decide(
                        ($) => sh.ph.decimal($),
                        () => sh.ph.literal("n/a")
                    )
                ]),
                sh.ph.composed([
                    sh.ph.literal("output:"),
                    sh.ph.indent(
                        sh.pg.sentences(
                            $.stderr.lines.__l_map(($) => sh.ph.literal($))
                        ))
                ])
            ]))
        ]))
        default: return _p.au($[0])
    }
})