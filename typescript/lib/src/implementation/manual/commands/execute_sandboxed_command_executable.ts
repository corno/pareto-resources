import * as p_ from 'pareto-core/implementation/command'

import * as interface_ from "../../../interface/signatures/execute_sandboxed.js"

export const $$: interface_.commands.command_executable = p_.command_procedure(
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