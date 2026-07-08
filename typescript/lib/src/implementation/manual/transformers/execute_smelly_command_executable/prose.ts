import * as p_ from 'pareto-core/implementation/transformer'
import * as p_i from 'pareto-core/interface/transformer'

import * as d_in from "../../../../interface/generated/liana/schemas/execute_sandboxed_smelly_command_executable/data.js"
import * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"

export type Error = p_i.Transformer<
    d_in.Error,
    d_out.Phrase
>

import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Error: Error = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'failed to spawn': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("failed to spawn process:"),
                sh.ph.composed(p_.from.list($.message.lines).map(
                    ($) => sh.ph.literal($)))
            ]))
            case 'non zero exit code': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("non zero exit code:"),
                sh.ph.indent(
                    sh.pg.sentences([
                        sh.sentence([
                            sh.ph.literal("exit code: "),
                            p_.from.optional($['exit code']).decide(
                                ($) => sh.ph.decimal($),
                                () => sh.ph.literal("n/a")
                            )
                        ]),
                        sh.sentence([
                            sh.ph.literal("output:"),
                            sh.ph.indent(
                                sh.pg.composed([
                                    sh.pg.sentences(
                                        p_.from.list($.stdout.lines).map(
                                            ($) => sh.sentence([
                                                sh.ph.literal($)
                                            ]))
                                    ),
                                    sh.pg.sentences(
                                        p_.from.list($.stderr.lines).map(
                                            ($) => sh.sentence([
                                                sh.ph.literal($)
                                            ]))
                                    )
                                ]))
                        ])
                    ]))
            ]))
            default: return p_.exhaustive($[0])
        }
    })