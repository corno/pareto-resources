
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/terminal_output/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/terminal_output/data"

export const Message: t_signatures.Message = ($) => ({
    'lines': _p_cc(
        $['lines'],
        ($) => _p.list.map(
            $,
            ($) => $
        )
    ),
    'raw': _p_cc(
        $['raw'],
        ($) => $
    ),
})
