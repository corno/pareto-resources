
import * as _p from "pareto-core/dist/refiner"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/execute_any_smelly_command_executable/unmarshall"

import * as t_external_terminal_output from "../terminal_output/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_generic from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_external_terminal_output from "../terminal_output/unmarshall"
export const Parameters: t_signatures.Parameters = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'program': _p_cc(
            $.__get_entry(
                'program', 
                ($) => abort(
                    ['no such entry', "program"]
                )
            ), 
            ($) => v_generic.expect_text(
                $, 
                ($) => abort(
                    ['expected a text', null]
                )
            )
        ),
        'args': _p_cc(
            $.__get_entry(
                'args', 
                ($) => abort(
                    ['no such entry', "args"]
                )
            ), 
            ($) => v_generic.expect_list(
                $, 
                ($) => abort(
                    ['expected a list', null]
                )
            ).__l_map(
                ($) => v_generic.expect_text(
                    $, 
                    ($) => abort(
                        ['expected a text', null]
                    )
                )
            )
        ),
    })
)
export const Error: t_signatures.Error = ($,abort) => _p_unreachable_code_path(
)
