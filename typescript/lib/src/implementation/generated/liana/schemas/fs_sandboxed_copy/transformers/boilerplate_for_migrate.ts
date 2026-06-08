
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_sandboxed_copy/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fs_sandboxed_copy/data"

import * as v_path from "../../fs_sandboxed_path/transformers/boilerplate_for_migrate"

import * as v_unrestricted from "../../fs_unrestricted_copy/transformers/boilerplate_for_migrate"

export const Parameters: t_signatures.Parameters = ($) => ({
    'source': _p_change_context(
        $['source'],
        ($) => v_path.Node_Path(
            $,
        ),
    ),
    'target': _p_change_context(
        $['target'],
        ($) => v_path.Node_Path(
            $,
        ),
    ),
    'options': _p_change_context(
        $['options'],
        ($) => ({
            'recursive': _p_change_context(
                $['recursive'],
                ($) => $,
            ),
            'force': _p_change_context(
                $['force'],
                ($) => $,
            ),
            'errorOnExist': _p_change_context(
                $['errorOnExist'],
                ($) => $,
            ),
        }),
    ),
})

export const Error: t_signatures.Error = ($) => v_unrestricted.Error(
    $,
)
