
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_sandboxed_remove/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fs_sandboxed_remove/data"

import * as v_path from "../../fs_sandboxed_path/transformers/boilerplate_for_migrate"

import * as v_unrestricted from "../../fs_unrestricted_make_directory/transformers/boilerplate_for_migrate"

export const Parameters: t_signatures.Parameters = ($) => ({
    'path': _p_change_context(
        $['path'],
        ($) => v_path.Context_Path(
            $,
        ),
    ),
    'error if not exists': _p_change_context(
        $['error if not exists'],
        ($) => $,
    ),
})

export const Error: t_signatures.Error = ($) => v_unrestricted.Error(
    $,
)
