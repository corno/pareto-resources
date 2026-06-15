
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/list_of_characters/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/list_of_characters/data"

export const List_of_Characters: t_signatures.List_of_Characters = ($) => _p.list.from.list(
    $,
).map(
    ($) => $,
)
