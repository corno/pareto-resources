import * as _p from 'pareto-core/dist/command'

import * as signatures from "../../../interface/signatures/execute_sandboxed"

export const $$: signatures.commands.command_executable = _p.command_procedure(
    ($d, $s, $q, $c) => [
        $c.unrestricted.execute(
            {
                'program': $s.program,
                'args': $d.args,
                'working directory': $d['working directory']
            },
            ($) => $
        )
    ]
)