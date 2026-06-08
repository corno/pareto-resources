
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_sandboxed_stat_possible_node/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fs_sandboxed_stat_possible_node/data"

import * as v_path from "../../fs_sandboxed_path/transformers/boilerplate_for_migrate"

import * as v_unrestricted from "../../fs_unrestricted_stat/transformers/boilerplate_for_migrate"

export const Parameters: t_signatures.Parameters = ($) => v_path.Node_Path(
    $,
)

export const Result: t_signatures.Result = ($) => _p.decide.state(
    $,
    ($): t_out.Result => {
        switch ($[0]) {
            case 'does not exist':
                return _p.ss(
                    $,
                    ($) => ['does not exist', null],
                )
            case 'file':
                return _p.ss(
                    $,
                    ($) => ['file', null],
                )
            case 'directory':
                return _p.ss(
                    $,
                    ($) => ['directory', null],
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)

export const Error: t_signatures.Error = ($) => v_unrestricted.Error(
    $,
)
