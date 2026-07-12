import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/execute_sandboxed_query_executable.js"
import type * as s_out from "../../../interface/schemas/prose.js"

namespace declarations {
    export type Error = p_.Transformer<
        s_in.Error,
        s_out.Phrase
    >
}

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Error: declarations.Error = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'failed to spawn': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("failed to spawn process:"),
                sh.ph.indent(
                    sh.pg.sentences(
                        p_.from.list($.message.lines).map(
                            ($) => sh.sentence([
                                sh.ph.literal($)
                            ]))
                    )
                )
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
                                sh.pg.sentences(
                                    p_.from.list($.stderr.lines).map(
                                        ($) => sh.sentence([
                                            sh.ph.literal($)
                                        ]))
                                ))
                        ])
                    ]))
            ]))
            default: return p_.exhaustive($[0])
        }
    })