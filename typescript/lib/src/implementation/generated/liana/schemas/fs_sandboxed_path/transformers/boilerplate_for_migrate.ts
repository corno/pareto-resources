
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_sandboxed_path/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fs_sandboxed_path/data"

export const Node_Path: t_signatures.Node_Path = ($) => ({
    'context': _p_change_context(
        $['context'],
        ($) => Context_Path(
            $,
        ),
    ),
    'node': _p_change_context(
        $['node'],
        ($) => $,
    ),
})

export const Context_Path: t_signatures.Context_Path = ($) => ({
    'start': null,
    'subpath': _p_change_context(
        $['subpath'],
        ($) => Context_Subpath(
            $,
        ),
    ),
})

export const Context_Subpath: t_signatures.Context_Subpath = ($) => _p.list.from.list(
    $,
).map(
    ($) => $,
)
