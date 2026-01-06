import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/execute_smelly_procedure_executable/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

export type Error = _pi.Transformer<d_in.Error, d_out.Block_Part>

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Error: Error = ($) => _p.sg($, ($) => {
    switch ($[0]) {
        case 'failed to spawn': return _p.ss($, ($) => sh.b.snippet(`failed to spawn process: ${$.message}`))
        case 'non zero exit code': return _p.ss($, ($) => sh.b.sub([
            sh.b.snippet(`non zero exit code:`),
            sh.b.indent([
                sh.g.nested_block([
                    sh.b.snippet(`exit code: `),
                    sh.b.snippet($['exit code'].transform(
                        ($) => `${$}`, //this is a number converted to a string
                        () => `n/a`
                    ))
                ]),
                sh.g.nested_block([
                    sh.b.snippet(`output:`),
                    sh.b.indent([
                        sh.g.nested_block([
                            sh.b.snippet($.stdout) //FIX this should be split up in lines
                        ]),
                        sh.g.nested_block([
                            sh.b.snippet($.stderr) //FIX this should be split up in lines
                        ])
                    ])
                ])
            ])
        ]))
        default: return _p.au($[0])
    }
})