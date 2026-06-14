
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/terminal_output/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/terminal_output/data"

export const Message: t_signatures.Message = ($) => ({
    'lines': _p_change_context(
        $['lines'],
        ($) => _p.list.from.list(
            $,
        ).map(
            ($) => $,
        ),
    ),
    'raw': _p_change_context(
        $['raw'],
        ($) => $,
    ),
})
