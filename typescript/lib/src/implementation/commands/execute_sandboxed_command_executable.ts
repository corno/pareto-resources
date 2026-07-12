import * as p_ from 'pareto-core/implementation/command'

import type * as command_interfaces from "../../interface/commands.js"

export const $$: p_.Command_Implementation<
    command_interfaces.execute_sandboxed.command_executable,
    {
        'program': string,
    },
    null,
    {
        'unrestricted': command_interfaces.execute_unrestricted.command_executable,
    }
>
 = p_.command(
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