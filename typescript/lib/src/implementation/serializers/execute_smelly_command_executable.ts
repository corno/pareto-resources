import * as p_ from 'pareto-core/implementation/serializer'

//schemas
import type * as s_in from "../../interface/schemas/execute_sandboxed_smelly_command_executable.js"

namespace declarations {
    export type Error = p_.Phrase_Serializer<
        s_in.Error
    >
}

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose_extended/deprecated"

export const Error: declarations.Error = ($) => p_.from.state($).decide(
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
                                ($) => sh.ph.literal(`${$}`), //FIXME
                                () => sh.ph.literal("n/a")
                            )
                        ]),
                        sh.sentence([
                            sh.ph.literal("output:"),
                            sh.ph.indent(
                                sh.pg.sentences(
                                    p_.literal.segmented_list([
                                        p_.from.list($.stdout.lines).map(
                                            ($) => sh.sentence([
                                                sh.ph.literal($)
                                            ])
                                        ),
                                        p_.from.list($.stderr.lines).map(
                                            ($) => sh.sentence([
                                                sh.ph.literal($)
                                            ])
                                        ),
                                    ])
                                ))
                        ])
                    ]))
            ]))
            default: return p_.exhaustive($[0])
        }
    })