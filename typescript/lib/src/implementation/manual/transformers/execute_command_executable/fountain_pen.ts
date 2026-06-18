import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

import * as d_in from "../../../../interface/generated/liana/schemas/execute_sandboxed_command_executable/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export namespace signatures {

    export type Error = p_i.Transformer<d_in.Error, d_out.Phrase>

}

import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Error: signatures.Error = ($) => p_.from.state($).decide(($) => {
    switch ($[0]) {
        case 'failed to spawn': return p_.ss($, ($) => sh.ph.composed([
            sh.ph.literal("failed to spawn process:"),
            sh.ph.composed($.message.lines.__l_map_deprecated(($) => sh.ph.literal($)))
        ]))
        case 'non zero exit code': return p_.ss($, ($) => sh.ph.composed([
            sh.ph.literal("non zero exit code:"),
            sh.ph.indent(sh.pg.sentences([
                sh.sentence([
                    sh.ph.literal("exit code: "),
                    $['exit code'].__decide(
                        ($) => sh.ph.decimal($),
                        () => sh.ph.literal("n/a")
                    ),
                ]),
                sh.sentence([
                    sh.ph.literal("output:"),
                    sh.ph.indent(
                        sh.pg.sentences(
                            $.stderr.lines.__l_map_deprecated(
                                ($) => sh.sentence([
                                    sh.ph.literal($)
                                ])
                            )
                        )
                    ),
                ])
            ])),
        ]))
        default: return p_.au($[0])
    }
})