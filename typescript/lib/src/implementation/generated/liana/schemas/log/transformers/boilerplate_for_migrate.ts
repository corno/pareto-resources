
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/log/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/log/data"

import * as v_fountain_pen from "../../fountain_pen/transformers/boilerplate_for_migrate"

export const Parameters: t_signatures.Parameters = ($) => ({
    'message': _p_change_context(
        $['message'],
        ($) => v_fountain_pen.Paragraph(
            $,
        ),
    ),
})

export const Error: t_signatures.Error = ($) => null
