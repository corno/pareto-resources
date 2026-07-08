import * as p_ from 'pareto-core/implementation/command'

import type * as interface_ from "../../../interface/declarations/commands.js"

export const $$: interface_.smelly_command_executable = p_.command(
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