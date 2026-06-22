
import * as p_ from 'pareto-core/dist/implementation/transformer'

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/terminal_output/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/terminal_output/data"

export const Message: t_signatures.Message = ($) => ({
    'lines': p_change_context(
        $['lines'],
        ($) => p_.from.list($,
        ).map(
            ($) => $,
        ),
    ),
    'raw': p_change_context(
        $['raw'],
        ($) => $,
    ),
})
