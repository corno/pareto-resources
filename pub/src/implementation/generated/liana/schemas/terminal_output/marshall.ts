
import * as _p from "pareto-core/dist/transformer"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/terminal_output/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const Message: t_signatures.Message = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'lines': _p_cc(
            $['lines'], 
            ($) => ['list', $.__l_map(
                ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]
            )]
        ),
        'raw': _p_cc(
            $['raw'], 
            ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]
        ),
    })
)]]
