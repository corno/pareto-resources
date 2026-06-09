import * as _p from 'pareto-core/dist/command'
import * as _pt from 'pareto-core/dist/assign'
import * as _pq from 'pareto-core/dist/query'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as signatures from "../../../interface/signatures/execute_sandboxed"

export const $$: signatures.commands.command_executable = _p.command_procedure(
    ($p, $cr, $qr, $x) => [
        $cr.unrestricted.execute(
            {
                'program': $x.program,
                'args': $p.args,
                'working directory': $p['working directory']
            },
            ($) => $
        )
    ]
)