
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/execute_any_smelly_command_executable/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/execute_any_smelly_command_executable/data"

import * as v_terminal_output from "../terminal_output/migrate_boilerplate"

export const Parameters: t_signatures.Parameters = ($) => ({
    'program': _p_cc(
        $['program'],
        ($) => $
    ),
    'args': _p_cc(
        $['args'],
        ($) => $.__l_map(
            ($) => $
        )
    ),
})

export const Error: t_signatures.Error = ($) => _p.decide.state(
    $,
    ($): t_out.Error => {
        switch ($[0]) {
            case 'failed to spawn':
                return _p.ss(
                    $,
                    ($) => ['failed to spawn', ({
                        'message': _p_cc(
                            $['message'],
                            ($) => v_terminal_output.Message(
                                $
                            )
                        ),
                    })]
                )
            case 'non zero exit code':
                return _p.ss(
                    $,
                    ($) => ['non zero exit code', ({
                        'exit code': _p_cc(
                            $['exit code'],
                            ($) => $.__o_map(
                                ($) => $
                            )
                        ),
                        'stderr': _p_cc(
                            $['stderr'],
                            ($) => v_terminal_output.Message(
                                $
                            )
                        ),
                        'stdout': _p_cc(
                            $['stdout'],
                            ($) => v_terminal_output.Message(
                                $
                            )
                        ),
                    })]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)
