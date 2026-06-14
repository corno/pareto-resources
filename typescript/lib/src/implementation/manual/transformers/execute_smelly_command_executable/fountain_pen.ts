import * as pt from 'pareto-core/dist/assign'
import * as pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/execute_sandboxed_smelly_command_executable/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export type Error = pi.Transformer<d_in.Error, d_out.Phrase>

import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Error: Error = ($) => pt.decide.state($, ($) => {
    switch ($[0]) {
        case 'failed to spawn': return pt.ss($, ($) => sh.ph.composed([
            sh.ph.literal("failed to spawn process:"),
            sh.ph.composed($.message.lines.__l_map(($) => sh.ph.literal($)))
        ]))
        case 'non zero exit code': return pt.ss($, ($) => sh.ph.composed([
            sh.ph.literal("non zero exit code:"),
            sh.ph.indent(sh.pg.sentences([
                sh.sentence([
                    sh.ph.literal("exit code: "),
                    $['exit code'].__decide(
                        ($) => sh.ph.decimal($),
                        () => sh.ph.literal("n/a")
                    )
                ]),
                sh.sentence([
                    sh.ph.literal("output:"),
                    sh.ph.indent(sh.pg.composed([
                        sh.pg.sentences(
                            $.stdout.lines.__l_map(($) => sh.sentence([
                                sh.ph.literal($)
                            ]))
                        ),
                        sh.pg.sentences(
                            $.stderr.lines.__l_map(($) => sh.sentence([
                                sh.ph.literal($)
                            ]))
                        )
                    ]))
                ])
            ]))
        ]))
        default: return pt.au($[0])
    }
})