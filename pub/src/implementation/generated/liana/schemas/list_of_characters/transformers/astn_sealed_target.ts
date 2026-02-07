
import * as _p from 'pareto-core/dist/expression'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/list_of_characters/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

export const List_of_Characters: t_signatures.List_of_Characters = ($) => ['list', _p.list.map(
    $,
    ($) => ['text', {
        'delimiter': ['none', null],
        'value': _p_text_from_list(
            v_serialize_number.serialize(
                $,
            ),
            ($) => $,
        ),
    }],
)]
