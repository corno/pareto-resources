import * as p_ from 'pareto-core/dist/command'

import * as signatures from "../../../interface/signatures/execute_sandboxed"

export const $$: signatures.commands.smelly_command_executable = p_.command_procedure(
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