
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/log/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/log/data"

export const Parameters: t_signatures.Parameters = ($) => ({
    'lines': _p_cc(
        $['lines'],
        ($) => _p.list.map(
            $,
            ($) => $
        )
    ),
})

export const Error: t_signatures.Error = ($) => null
